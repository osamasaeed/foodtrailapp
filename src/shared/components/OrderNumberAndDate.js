import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import colors from '../colors';

const OrderNumberAndDate = ({ orderNumber, orderDate }) => {
    return (
        <View style={styles.main}>
            <View>
                <Text style={styles.label}>Order number</Text>
                <Text style={styles.value}>#{orderNumber}</Text>
            </View>
            <View>
                <Text style={styles.label}>Order Date</Text>
                <Text style={styles.value}>{orderDate}</Text>
            </View>
        </View>
    )
}

export default OrderNumberAndDate;

const styles = StyleSheet.create({
    main: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 10,
        marginVertical: 5,
    },
    label: {
        color: colors.text_tertiary
    },
    value: {
        color: colors.text_primary,
        fontWeight: "bold",
        fontSize: 20
    },

})
