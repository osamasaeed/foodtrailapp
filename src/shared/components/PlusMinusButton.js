import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../colors';

const PlusMinusButton = ({ style, onMinusQty, qty, onPlusQty }) => {
    return (
        <View style={[styles.qtyBtns, style]}>
            <TouchableOpacity onPress={() => { onMinusQty() }} style={styles.minusBtn}>
                <MaterialIcon name="minus" color="white" size={20} />
            </TouchableOpacity>
            <Text style={styles.qtyText}>{qty}</Text>
            <TouchableOpacity onPress={() => { onPlusQty() }} style={styles.plusBtn}>
                <MaterialIcon name="plus" color="white" size={20} />
            </TouchableOpacity>
        </View>
    )
}

export default PlusMinusButton;

const styles = StyleSheet.create({
    qtyBtns: {
        backgroundColor: colors.text_tertiary,
        borderRadius: 5,
        flexDirection: 'row',
        alignSelf: 'flex-end',
        alignItems: 'center',
        
    },
    minusBtn: {
        width: 40,
        height: 40,
        borderRadius: 5,
        backgroundColor: colors.text_secondary,
        justifyContent: 'center',
        alignItems: 'center'
    },
    qtyText: {
        paddingHorizontal: 8,
        backgroundColor: colors.text_tertiary
    },
    plusBtn: {
        width: 40,
        height: 40,
        borderRadius: 5,
        backgroundColor: colors.primary,
        justifyContent: 'center',
        alignItems: 'center'
    },
});