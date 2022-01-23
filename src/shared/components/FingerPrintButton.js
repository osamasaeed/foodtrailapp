import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Icon } from 'native-base';
import colors from '../colors';

const FingerPrintButton = ({ onPress, style, iconStyle }) => {
    return (
        <TouchableOpacity onPress={() => { }} style={[styles.fingerBtn, style]}>
            <Icon name="finger-print-outline" style={[styles.fingerBtnIcon, iconStyle]} />
        </TouchableOpacity>
    )
}

export default FingerPrintButton

const styles = StyleSheet.create({
    fingerBtn: {
        marginRight: 30,
        alignItems: 'center'
    },
    fingerBtnIcon: {
        color: colors.darkPrimary,
        fontSize: 40
    },
})