import React from 'react';
import LoginScreen from '../../screens/LoginScreen/LoginScreen';
import colors from '../../shared/colors';
import { createStackNavigator } from '@react-navigation/stack';
import WizardScreen from '../../screens/WizardScreen/WizardScreen';
import RegisterScreen from '../../screens/RegisterScreen/RegisterScreen';

const Stack = createStackNavigator();
// default screens options
const screenOptions = {
    headerStyle: {
        backgroundColor: colors.primary,
    },
    headerTintColor: colors.background_primary,
    headerTitleStyle: {
        color: colors.background_primary
    },
    cardStyle: { backgroundColor: colors.white }
}
const defaultOptions = ({ isLoggedIn }) => ({
    headerShown: false,
    animationTypeForReplace: isLoggedIn ? 'pop' : 'push',
});





// App Navigator have all the routes with authenticated users
export default AuthNavigator = ({ isLoggedIn }) => (
    <Stack.Navigator screenOptions={[screenOptions, { cardStyle: { backgroundColor: "white" } }]} initialRouteName={"WizardScreen"}>
        <Stack.Screen
            name="WizardScreen"
            options={defaultOptions({ isLoggedIn })}
            component={WizardScreen}
        />

        <Stack.Screen
            name="RegisterScreen"
            options={defaultOptions({ isLoggedIn })}
            component={RegisterScreen}

        />

        <Stack.Screen
            name="LoginScreen"
            options={defaultOptions({ isLoggedIn })}
            component={LoginScreen}

        />
    </Stack.Navigator>
)