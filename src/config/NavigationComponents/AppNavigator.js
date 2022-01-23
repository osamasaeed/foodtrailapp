import React from 'react';
import colors from '../../shared/colors';
import CategoryScreen from '../../screens/CategoryScreen/CategoryScreen';
import CartScreen from '../../screens/CartScreen/CartScreen';
import PaymentScreen from '../../screens/PaymentScreen/PaymentScreen';
import AddressScreen from '../../screens/AddressScreen/AddressScreen';
import PaymentPopup from '../../screens/PaymentScreen/PaymentPopup';
import AddressPopup from '../../screens/AddressScreen/AddressPopup';
import OrderDetailScreen from '../../screens/OrderDetailScreen/OrderDetailScreen';
import OrderSummaryScreen from '../../screens/OrderSummaryScreen/OrderSummaryScreen';
import { createStackNavigator } from '@react-navigation/stack';
import CustomDrawer from './DrawerNavigator';
import ItemDetailScreen from '../../screens/ItemDetailScreen/ItemDetailScreen';

// setting screen default options
const screenOptions = {
    headerStyle: {
        backgroundColor: colors.primary,
    },
    headerTintColor: colors.background_primary,
    headerTitleStyle: {
        color: colors.background_primary
    },
    cardStyle: { backgroundColor: colors.background_secondary }
}
const Stack = createStackNavigator();

// App Navigator have all the routes with authenticated users
export default AppNavigator = () => (
    <Stack.Navigator screenOptions={screenOptions} initialRouteName={"Drawer"}>
        <Stack.Screen name="Drawer" options={{ headerShown: false }} component={CustomDrawer} />

        <Stack.Screen name="Category" component={CategoryScreen} options={{ headerShown: true }} />
        <Stack.Screen name="ItemDetail" component={ItemDetailScreen} options={{ headerTransparent: true, title: "" }} />
        <Stack.Screen name="Cart" component={CartScreen} />
        <Stack.Screen name="Address" component={AddressScreen} />
        <Stack.Screen name="AddressPopup" component={AddressPopup} options={{ title: "Add Address" }} />
        <Stack.Screen name="Payment" component={PaymentScreen} />
        <Stack.Screen name="PaymentPopup" component={PaymentPopup} options={{ title: "Add Payment Method" }} />
        <Stack.Screen name="Order Detail" component={OrderDetailScreen} />
        <Stack.Screen name="Order Summary" options={{ headerShown: false, cardStyle: { backgroundColor: colors.white } }} component={OrderSummaryScreen} />
    </Stack.Navigator>
)