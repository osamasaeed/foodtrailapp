import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Body, Left, ListItem, Right } from 'native-base';

const ListHeader = ({ left, center, right }) => {
    return (
        <ListItem last>
            <Left style={styles.flexColumn}>
                <Text style={styles.text}>{left}</Text>
            </Left>
            <Body style={styles.flex}>
                <Text style={styles.text}>{center}</Text>
            </Body>
            <Right style={styles.flex}>
                <Text style={styles.text}>{right}</Text>
            </Right>
        </ListItem>
    )
}

export default ListHeader

const styles = StyleSheet.create({
    text: {
        fontWeight: "bold",
    },
    flex: {
        flex: 1
    },
    flexColumn: {
        flex: 1,
        flexDirection: "column",
    },
})