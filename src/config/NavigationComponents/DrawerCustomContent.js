import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import {
    DrawerContentScrollView,
    DrawerItem,
    DrawerItemList,
} from '@react-navigation/drawer';
import { ImageBackground } from 'react-native';
import { sharedStyles, softButtonsHeight } from '../../shared/styles';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../../shared/colors';
import Avatar from '../../shared/components/Avatar';
import { itemImage1, profileImage } from '../../shared/staticAssets';
import { connect } from 'react-redux';
import { userActions } from '../redux';


const DrawerCustomContent = (props) => {
    const { state, navigation } = props;
    return (
        <ImageBackground source={itemImage1} style={styles.imageBG} imageStyle={styles.imageStyle}>
            <Avatar name="Osama S." source={profileImage} onPress={() => { navigation.navigate('Profile') }} />
            <DrawerContentScrollView {...props}>
                <DrawerItemList  {...props} />
            </DrawerContentScrollView>
            <DrawerItem
                style={styles.drawerItem}
                {...DrawerItemOptions("Logout")}
                onPress={() => props.logout()}
            />
        </ImageBackground>
    )
}
const styles = StyleSheet.create({
  imageStyle: {
    opacity: 0.1,
  },
  imageBG: {
    flex: 1,
  },
    drawerItem: {
        borderTopWidth: 1,
        borderColor: colors.text_secondary,
        marginBottom: softButtonsHeight
    },
    drawerLabel: {
        fontSize: 18,
        ...sharedStyles.fontRedressed,
    }
})
export default connect(null, { logout: userActions.logout })(DrawerCustomContent);


export const DrawerItemOptions = (routeName) => {
    switch (routeName) {
        case 'Home': return {
            drawerLabel: ({ color, focused }) => <Text style={[styles.drawerLabel, { color: focused ? "white" : colors.primary }]} >Home</Text>,
            drawerIcon: ({ focused, size, color }) => <MaterialIcon name="home-outline" size={size} color={focused ? "white" : colors.primary} />
        }
        case 'Profile': return {
            drawerLabel: ({ color, focused }) => <Text style={[styles.drawerLabel, { color: focused ? "white" : colors.primary }]} >Profile</Text>,
            drawerIcon: ({ focused, size, color }) => <MaterialIcon name="face-profile" size={size} color={focused ? "white" : colors.primary} />
        }
        case 'History': return {
            drawerLabel: ({ color, focused }) => <Text style={[styles.drawerLabel, { color: focused ? "white" : colors.primary }]} >History</Text>,
            drawerIcon: ({ focused, size, color }) => <MaterialIcon name="clock-time-eight-outline" size={size} color={focused ? "white" : colors.primary} />
        }
        case 'Notification': return {
            drawerLabel: ({ color, focused }) => <Text style={[styles.drawerLabel, { color: focused ? "white" : colors.primary }]} >Notification</Text>,
            drawerIcon: ({ focused, size, color }) => <MaterialIcon name="bell-ring-outline" size={size} color={focused ? "white" : colors.primary} />
        }
        case 'TermsAndCondition': return {
            drawerLabel: ({ color, focused }) => <Text style={[styles.drawerLabel, { color: focused ? "white" : colors.primary }]} >Terms And Condition</Text>,
            drawerIcon: ({ focused, size, color }) => <MaterialIcon name="text-box-check-outline" size={size} color={focused ? "white" : colors.primary} />
        }
        case 'About': return {
            drawerLabel: ({ color, focused }) => <Text style={[styles.drawerLabel, { color: focused ? "white" : colors.primary }]} >About</Text>,
            drawerIcon: ({ focused, size, color }) => <MaterialIcon name="information-variant" size={size} color={focused ? "white" : colors.primary} />
        }
        case 'Login': return {
            drawerLabel: ({ color, focused }) => <Text style={[styles.drawerLabel, { color: focused ? "white" : colors.primary }]} >Bonus Screen</Text>,
            drawerIcon: ({ focused, size, color }) => <MaterialIcon name="gift-outline" size={size} color={focused ? "white" : colors.primary} />
        }
        case 'Logout': return {
            label: ({ color, focused }) => <Text style={[styles.drawerLabel, { color: focused ? "white" : colors.primary }]} >Logout</Text>,
            icon: ({ focused, size, color }) => <MaterialIcon name="logout-variant" size={size} color={focused ? "white" : colors.primary} />
        }
    }
}