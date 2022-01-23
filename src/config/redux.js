import { combineReducers } from 'redux';
const userConstants = {

    SET_CART: 'SET_CART',
    SET_NOTIFICATIONS: 'SET_NOTIFICATIONS',
    LOGIN: 'USERS_LOGIN',
    LOGOUT: 'USERS_LOGOUT',
    LOADING: 'LOADING'

};

export const userActions = {
    setCart: (cart) => (dispatch) => {
        dispatch({ type: userConstants.SET_CART, cart });
    },
    setNotifications: (notifications) => (dispatch) => {
        dispatch({ type: userConstants.SET_NOTIFICATIONS, notifications });
    },
    login: (user) => (dispatch) => {
        dispatch({ type: userConstants.LOGIN, user });
    },
    logout: () => (dispatch) => {
        dispatch({ type: userConstants.LOGOUT });
    },
    loading: (loading) => (dispatch) => {
        dispatch({ type: userConstants.LOADING, loading });
    }
};

const user = null;
const resetState = {
    loading: false,
    loggedIn: false,
    notifications: [],
    cart: {
        items: [],
        total: 0,
        discount: 0,
        tax: 0,
        netTotal: 0,
        discountPercent: 0,
        taxPercent: 0
    }
};
const initialState = user ? {
    ...resetState,
    loggedIn: true,
    user
} : resetState;

export function global(state = initialState,
    action) {
    switch (action.type) {
        case userConstants.SET_CART:
            return {
                ...state,
                cart: action.cart
            };
        case userConstants.SET_NOTIFICATIONS:
            return {
                ...state,
                notifications: action.notifications
            };
        case userConstants.LOGIN:
            return {
                ...state,
                loggedIn: true,
                user: action.user,
            };
        case userConstants.LOGOUT:
            return {
                ...resetState
            };
        case userConstants.LOADING:
            return {
                ...state,
                loading: action.loading
            };
        default:
            return state
    }
}


const rootReducer = combineReducers({
    global
});

// creating Persistor 
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
const persistConfig = {
    key: 'root',
    storage: AsyncStorage
}

const persistedReducer = persistReducer(persistConfig, rootReducer)


/// Creating an store
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';

const loggerMiddleware = createLogger();


export const store = createStore(
    persistedReducer,
    applyMiddleware(
        thunkMiddleware,
        // logger is disabled. Enable it for debugging
        // loggerMiddleware
    )
);

export const persistor = persistStore(store)
