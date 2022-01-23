import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import PropTypes from 'prop-types';
import colors from '../colors';
import { sharedStyles } from '../styles';
import { StyleSheet } from 'react-native';

export default function NotificationIcon(props) {
    return (
        <TouchableOpacity onPress={props.onPress} style={styles.container}>
            <MaterialIcon style={styles.bellIcon} size={20} color={colors.primary} name="bell-outline" />
            {(props.badge === true) ? (<MaterialIcon size={7} style={styles.badge} color={colors.secondary} name="circle" />) : null}
        </TouchableOpacity>
    )
}

NotificationIcon.propTypes = {
    badge: PropTypes.bool,
    onPress: PropTypes.func
};


const styles = StyleSheet.create({
    bellIcon: {
        marginTop: 2,
    },
    container: { borderWidth: 3, borderColor: colors.primary, position: 'absolute', right: 10, top: 40, justifyContent: 'center', alignItems: "center", borderRadius: 60, width: 30, height: 30, backgroundColor: 'white', ...sharedStyles.boxShadow },
    badge: { position: 'absolute', right: 2, bottom: -2, borderWidth: 0.6, borderColor: 'white', borderRadius: 50, backgroundColor: colors.secondary }


})
