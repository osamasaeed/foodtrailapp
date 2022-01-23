import React from 'react';
import { StyleSheet } from 'react-native';
import { TouchableOpacity, View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../colors';


const FabButton = ({ icon, hide = false, title, size, color, backgroundColor, onPress, style }) => {
    if (!hide)
        return (
            <TouchableOpacity onPress={onPress} style={[styles.container, { backgroundColor: backgroundColor || colors.primary }, style]} >
                {title ? <Text style={[{ color: color || "white" }]}>{title}</Text> : <Icon name={icon || "md-add"} size={size || 15} color={color || "white"} />}
            </TouchableOpacity>

        )
    else
        return null;
};


export default FabButton;

const styles = StyleSheet.create({
    container: {
        zIndex: 5,
        elevation: 10,
        position: "absolute",
        borderRadius: 60,
        alignItems: "center",
        justifyContent: "center",
        width: 50,
        height: 50
    }
})