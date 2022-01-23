import React from 'react'
import Icon from 'react-native-vector-icons/Feather';
import colors from '../colors';

export default function MenuIcon({ onPress, color, fixed, style }) {
    return (
        <Icon onPress={onPress} name="bar-chart-2" size={30} color={color || colors.primary} style={[fixed ? { position: 'absolute', left: 20, top: 40, zIndex: 1, transform: [{ rotate: '90deg' }] } : { zIndex: 1, transform: [{ rotate: '90deg' }] }, style]} />
    )
}
