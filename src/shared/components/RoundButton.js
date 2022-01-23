import React from 'react'
import { Text, TouchableOpacity } from 'react-native';
import colors from '../colors';
import { sharedStyles } from '../styles';

const RoundButton = ({ title, style, textStyle, shadow = true, onPress, leftIcon, rightIcon }) => {
    return (
        <TouchableOpacity onPress={onPress} style={[{ flexDirection: 'row', backgroundColor: colors.white, width: '90%', marginHorizontal: 10, borderRadius: 50, padding: 20, justifyContent: 'center', alignItems: "center", margin: 5 }, shadow === true ? sharedStyles.boxShadow : null, style]}>
            {rightIcon}
            <Text style={[{ fontWeight: "bold", fontSize: 16 }, textStyle]}>{title}</Text>
            {leftIcon}
        </TouchableOpacity>
    )
}

export default RoundButton
