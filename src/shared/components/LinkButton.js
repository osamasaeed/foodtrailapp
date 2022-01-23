import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

const LinkButton = ({ title, style, textStyle, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress} style={[{ padding: 20 }, style]}>
            <Text style={[{ fontWeight: "bold" }, textStyle]}>{title}</Text>
        </TouchableOpacity>
    )
}

export default LinkButton
