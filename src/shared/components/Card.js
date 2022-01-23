import React from 'react'
import { StyleSheet } from 'react-native';
import { View, Text } from 'react-native'
import { sharedStyles } from '../styles';

export default function Card({ style, children }) {
    return (
        <View style={[styles.container, sharedStyles.boxShadow, style]}>
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        margin: 10,
        borderRadius: 10,
        backgroundColor: "white"
    }
})