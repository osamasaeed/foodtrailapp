import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import colors from '../colors';
import { Body, Left, ListItem, Right } from 'native-base';
import { currencySymbol } from '../contants';

const OrderDetailsItems = ({ item, index, length }) => (
    <ListItem key={index} last={(index + 1) === length}>
        <Left style={styles.flexColumn}>
            <Text>{item.title}</Text>
            <Text style={styles.text}>{item.description}</Text>
        </Left>
        <Body style={styles.flex}>
            <Text>{item.qty}x{item.price}</Text>
        </Body>
        <Right style={styles.flex}>
            <Text >{currencySymbol}{item.qty * item.price}</Text>
        </Right>
    </ListItem>
)

export default OrderDetailsItems

const styles = StyleSheet.create({
    text: {
        color: colors.text_secondary,
    },
    flex: {
        flex: 1,
    },
    flexColumn: {
        flex: 1,
        flexDirection: "column",
    },
})