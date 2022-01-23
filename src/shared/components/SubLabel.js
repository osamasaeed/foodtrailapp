import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import PropTypes from 'prop-types';
import colors from '../colors';
import { sharedStyles } from '../styles';
export default function SubLabel(props) {
    if (props.title && props.titleIcon)
        return (
            <View style={[styles.container, props.containerStyle]} >
                <View style={styles.textContainer}>
                    <Text style={styles.title}>{props.title} </Text>
                    {(!!props.titleIcon) && <MaterialIcon style={styles.icon} size={20} color={colors.secondary} name={props.titleIcon} />}
                </View>
                <TouchableOpacity style={styles.viewAllBtn} onPress={props.onPress}>
                    <Text style={styles.viewAllText}>{props.viewAllText}</Text>
                </TouchableOpacity>
            </View>
        )
    else
        return null;
}
SubLabel.propTypes = {
    title: PropTypes.string,
    titleIcon: PropTypes.string,
    viewAllText: PropTypes.string,
    onPress: PropTypes.func,
    containerStyle: PropTypes.object,
    titleIconSize: PropTypes.number
};

const styles = StyleSheet.create({
    viewAllBtn: {
        padding: 5,
    },
    container: {
        marginTop: 15, padding: 10, flexDirection: 'row', justifyContent: "space-between", alignItems: 'center'
    },
    textContainer: {
        justifyContent: "center", alignItems: 'center', flexDirection: "row"
    },
    title: {
        color: colors.text_primary, fontSize: 35, ...sharedStyles.fontRedressed
    },
    icon: {
        marginHorizontal: 5, marginTop: 10
    },
    viewAllText: {
        textDecorationLine: "underline", color: colors.secondary, ...sharedStyles.fontRedressed
    }
})