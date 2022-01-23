import React from 'react'
import { View, Text, ImageBackground, TouchableOpacity } from 'react-native'
import { Image as ImageNative } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import PropTypes from 'prop-types'
import colors from '../colors'
import { sharedStyles } from '../styles';
import { StyleSheet } from 'react-native';

export default function CategoryTile(props) {
    return (
        <TouchableOpacity onPress={props.onPress} style={styles.container}>
            <View >
                <ImageBackground
                    style={styles.bgImage}
                    source={props.source}
                >
                    <View style={styles.tile}>
                        <Text style={styles.tileText}>{props.title}</Text>
                        <MaterialIcon size={26} color={colors.text_secondary} name="chevron-right" />
                    </View>
                </ImageBackground>
            </View>
        </TouchableOpacity>
    )
}

CategoryTile.propTypes = {
    title: PropTypes.string,
    source: ImageNative.propTypes.source.isRequired,
    onPress: PropTypes.func
}

const styles = StyleSheet.create({
    container: {
        width: "46%",
        height: 100,
        margin: 2,
        overflow: 'hidden',
        borderRadius: 5
    },
    bgImage: {
        height: "100%"
    },
    tile: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: "rgba(0,0,0,0.7)"
    },
    tileText: {
        marginLeft: 16,
        color: colors.text_tertiary,
        fontSize: 20,
        ...sharedStyles.fontAkayaTeli
    }
})