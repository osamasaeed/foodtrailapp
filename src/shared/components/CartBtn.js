import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { StyleSheet } from 'react-native';
import { View, Text, TouchableOpacity } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../colors';
import { sharedStyles } from '../styles';

const CartBtn = ({ onPress, isEmpty }) => {
    // const navigation = useNavigation();
    return (
        <TouchableOpacity onPress={onPress} style={styles.cartBtn}>
            {!isEmpty && <MaterialIcon style={styles.circleIcon} size={5} color={colors.secondary} name="circle" />}
            <MaterialIcon style={styles.cartIcon} size={20} color={colors.primary} name="cart" />
        </TouchableOpacity>
    )
}

export default CartBtn;

const styles = StyleSheet.create({
    cartIcon: {
        marginTop: 2,
    },
    circleIcon: {
        position: 'absolute',
        top: 3,
    },
    cartBtn: {
        position: 'absolute',
        right: 10,
        top: 10,
        justifyContent: 'center',
        alignItems: "center",
        borderRadius: 60,
        width: 30,
        height: 30,
        backgroundColor: 'white',
        ...sharedStyles.boxShadow
    },
})
