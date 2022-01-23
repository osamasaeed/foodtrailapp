import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../colors';
import { Body, Left, ListItem } from 'native-base';

const OrderAddressView = ({ type, address }) => {
    return (
        <ListItem iconLeft style={styles.addressView}>
            <Left>
                <MaterialIcon name="map-marker-outline" color={colors.text_primary} size={20} />
                <Text style={styles.addressType}>{type}</Text>
            </Left>
            <Body>
                <Text>{address}</Text>
            </Body>
        </ListItem>
    )
}

export default OrderAddressView

const styles = StyleSheet.create({
  addressType: {
    fontWeight: "bold",
    color: colors.text_primary,
  },
  addressView: {
    justifyContent: "space-between",
    flexDirection: "column",
  },
})