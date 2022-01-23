import React from 'react'
import { View, Text, TouchableOpacity, Dimensions, StyleSheet } from 'react-native';
import colors from '../colors';
import { sharedStyles, softButtonsHeight } from '../styles';
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

export default function BlockButton({ onPress, text1, text2, text3, checkoutButtonHeight, style }) {
    return (
        <View style={[styles.container, { height: checkoutButtonHeight + softButtonsHeight }, sharedStyles.boxShadow, style]}>
            <TouchableOpacity onPress={onPress} activeOpacity={0.6} style={styles.touchable}>
                <View style={styles.textContainer}>
                    {(!!text1) && (<Text style={styles.textStyle}>{text1}</Text>)}
                    {(!!text2) && (<Text style={styles.textStyle}>{text2}</Text>)}
                    {(!!text3) && (<Text style={styles.textStyle}>{text3}</Text>)}
                </View>
            </TouchableOpacity>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        padding: 10,
        width: WIDTH,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    touchable: {
        width: WIDTH - 20
    },
    textContainer: {
        padding: 10,
        borderRadius: 5,
        backgroundColor: colors.primary,
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: 'center'
    },
    textStyle: {
        color: "white",
        ...sharedStyles.fontPoppinsReg
    }

})