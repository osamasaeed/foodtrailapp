/**
 * @format
 */

import React, { useState } from 'react';
import { AppRegistry, ActivityIndicator } from 'react-native';
import { name as appName } from './app.json';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import App from './App';
import { store, persistor } from './src/config/redux';
import SplashScreen from './src/screens/SplashScreen/SplashScreen';

const Root = () => {
    const [showSplash, setShowSplash] = useState(true);

    if (showSplash)
        return <SplashScreen onSplashFinished={() => setShowSplash(false)} />;
    else
        return (
            <Provider store={store} >
                <PersistGate loading={<ActivityIndicator />} persistor={persistor}>
                    <App />
                </PersistGate>
            </Provider >
        );
}

AppRegistry.registerComponent(appName, () => Root);
