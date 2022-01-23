import React from 'react'
import { View, Text, StyleSheet } from 'react-native';
import CView from '../../shared/components/CView';
import Notify from '../../assets/svgs/notify.svg';
import colors from '../../shared/colors';

const NotificationScreen = (props) => {
    return (
        <CView headerTitle="Notifications" navigation={props.navigation}>
            <View style={styles.main}>
                <Notify width="100%" height={160} />
                <Text style={styles.nothingText}>Nothing here!</Text>
            </View>
        </CView>
    )
}

export default NotificationScreen


const styles = StyleSheet.create({
    nothingText: {
        fontWeight: 'bold',
        fontSize: 24,
        marginTop: 30,
        color: colors.text_primary
    },
    main: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})