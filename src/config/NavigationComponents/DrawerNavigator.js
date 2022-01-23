import React from 'react';
import MainScreen from '../../screens/MainScreen/MainScreen';
import HistoryScreen from '../../screens/HistoryScreen/HistoryScreen';
import DrawerCustomContent from './DrawerCustomContent';
import { DrawerItemOptions } from './DrawerCustomContent';
import colors from '../../shared/colors';
import ProfileScreen from '../../screens/ProfileScreen/ProfileScreen';
import TermsAndConditionScreen from '../../screens/TermsAndCondition/TermsAndCondition';
import AboutScreen from '../../screens/AboutScreen/AboutScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import NotificationScreen from '../../screens/NotificationScreen/NotificationScreen';
import LoginScreen from '../../screens/LoginScreen/LoginScreen';

const Drawer = createDrawerNavigator();

const drawerContentOptions = {
    itemStyle: {
        borderBottomWidth: 1,
        borderColor: colors.text_secondary,
        borderRadius: 0,
        marginHorizontal: 0,
        marginVertical: 0
    },
    activeTintColor: "white",
    activeBackgroundColor: colors.darkPrimary,
}







// All the navigation of side drawer
export default CustomDrawer = () => {
    return (
        <Drawer.Navigator
            drawerContentOptions={drawerContentOptions}
            drawerContent={props => <DrawerCustomContent  {...props} />}
            initialRouteName="Home">
            <Drawer.Screen name="Home" component={MainScreen} options={DrawerItemOptions("Home")} />
            <Drawer.Screen name="Profile" component={ProfileScreen} options={DrawerItemOptions("Profile")} />
            <Drawer.Screen name="History" component={HistoryScreen} options={DrawerItemOptions("History")} />
            <Drawer.Screen name="Notification" component={NotificationScreen} options={DrawerItemOptions("Notification")} />
            <Drawer.Screen name="TermsAndCondition" component={TermsAndConditionScreen} options={DrawerItemOptions("TermsAndCondition")} />
            <Drawer.Screen name="About" component={AboutScreen} options={DrawerItemOptions("About")} />
            <Drawer.Screen name="Bonus Screen" component={LoginScreen} options={DrawerItemOptions("Login")} />
        </Drawer.Navigator>
    );
}