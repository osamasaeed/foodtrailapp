import React from 'react'
import { View, Text, ImageBackground, StyleSheet, TouchableOpacity } from 'react-native'
import { sharedStyles } from '../styles'

export default function Avatar(props) {
    return (
        <View style={[styles.container, props.style]}>
            <TouchableOpacity onPress={props.onPress}>
                <View style={[styles.innerContainer, sharedStyles.boxShadow]}>
                    <ImageBackground source={props.source}
                        style={styles.bgImage}
                        imageStyle={styles.imageStyle}
                    />
                </View>
            </TouchableOpacity>
            <Text style={[styles.profileName, sharedStyles.fontAkayaTeli]}>{props.name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 0.4,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "transparent"
    },
    innerContainer: {
        borderWidth: 2,
        borderColor: colors.primary,
        borderRadius: 100,
        width: 120,
        height: 120
    },
    bgImage: {
        width: "100%",
        height: "100%"
    },
    imageStyle: {
        borderRadius: 100
    },
    profileName: {
        color: colors.primary,
        fontSize: 22
    }
})