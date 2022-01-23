import React from 'react'
import { StyleSheet } from 'react-native';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../colors';
import { sharedStyles } from '../styles';
import PlusMinusButton from './PlusMinusButton';
import { currencySymbol } from '../contants';

export default function ItemListItem({ imageSource, title, description, price, qty, onPlusQty, onMinusQty, onRemoveItem }) {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={imageSource} />
            <View style={styles.itemStyle} >
                <Text style={styles.itemTitle}>{title}</Text>
                <Text style={styles.itemDesc}>{description}</Text>
                <Text style={styles.itemPrice}>{currencySymbol} {price}</Text>
                <PlusMinusButton qty={qty} onMinusQty={onMinusQty} onPlusQty={onPlusQty} />
            </View>
            <View style={styles.removeBtn}>
                <TouchableOpacity onPress={onRemoveItem}>
                    <MaterialIcon style={styles.trashIcon} size={20} color={colors.primary} name="trash-can-outline" />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
  trashIcon: {
    marginTop: 2,
  },
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        margin: 20,
        borderRadius: 5
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 6
    },
    itemStyle: {
        flex: 1,
        marginLeft: 10
    },
    itemTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: colors.text_primary
    },
    itemDesc: {
        fontSize: 15,
        color: colors.text_secondary
    },
    itemPrice: {
        fontSize: 18,
        fontWeight: 'bold',
        color: colors.secondary
    },
    qtyBtns: {
        backgroundColor: colors.text_tertiary,
        borderRadius: 5,
        flexDirection: 'row',
        alignSelf: 'flex-end',
        alignItems: 'center'
    },
    minusBtn: {
        width: 30,
        height: 30,
        borderRadius: 5,
        backgroundColor: colors.text_secondary,
        justifyContent: 'center',
        alignItems: 'center'
    },
    qtyText: {
        paddingHorizontal: 8,
        backgroundColor: colors.text_tertiary
    },
    plusBtn: {
        width: 30,
        height: 30,
        borderRadius: 5,
        backgroundColor: colors.primary,
        justifyContent: 'center',
        alignItems: 'center'
    },
    removeBtn: {
        position: 'absolute',
        top: -10,
        right: -10,
        justifyContent: 'center',
        alignItems: "center",
        borderRadius: 60,
        width: 30,
        height: 30,
        backgroundColor: 'white',
        ...sharedStyles.boxShadow
    }

})