import React from 'react'
import { View, Text, FlatList, ImageBackground, TouchableOpacity } from 'react-native';
import { sharedStyles } from '../styles';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../colors';
import SubLabel from './SubLabel';
import { StyleSheet } from 'react-native';
import { currencySymbol } from '../contants';

const Item = ({ item, index, onPress, onPressHeart }) => (
    <View style={styles.itemContainer}>
        <ImageBackground
            style={styles.itemBackgroundImage}
            source={item.image}
        >
            <TouchableOpacity onPress={() => onPressHeart(item, index, item.isFavorite)} style={styles.heartBtn}>
                {(item.isFavorite) ? <MaterialIcon style={styles.heartIcon} size={20} color={colors.primary} name="heart" /> : <MaterialIcon style={styles.heartIcon} size={20} color={colors.primary} name="heart-outline" />}
            </TouchableOpacity>
            <View style={styles.imageOverlay}>
                <Text style={styles.itemTitle}>Fruit salad mix</Text>
                <Text style={styles.itemDescription}>Delics fruit salad Ngasem</Text>
                <View style={styles.imageOverlayFooter}>
                    <Text style={styles.itemPrice} >{currencySymbol}{item.price}</Text>
                    <TouchableOpacity onPress={() => onPress(item, index)} small style={styles.cartButton}><MaterialIcon color={colors.text_secondary} size={20} name="cart-plus" /></TouchableOpacity>
                </View>
            </View>
        </ImageBackground>
    </View >
)


const FeaturedItems = ({ listItems, onPressItem, onPressHeart }) => {
    return (
        <FlatList
            horizontal={true}
            data={listItems}
            keyExtractor={(item, i) => i.toString()}
            renderItem={({ item, index }) => <Item item={item} index={index} onPress={onPressItem} onPressHeart={onPressHeart} />}
        />
    )
}

export default FeaturedItems;


const styles = StyleSheet.create({
  heartIcon: {
    marginTop: 2,
  },
  cartButton: {
    padding: 6,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: colors.text_secondary,
    paddingHorizontal: 10,
  },
  itemPrice: {
    color: colors.secondary,
    fontWeight: 'bold',
  },
    itemContainer: {
        margin: 10,
        width: 300,
        height: 300,
        borderRadius: 10,
        overflow: 'hidden',
        ...sharedStyles.boxShadow
    },
    itemBackgroundImage: {
        width: '100%',
        flex: 1,
        borderRadius: 20
    },
    heartBtn: {
        position: 'absolute',
        right: 10,
        top: 10,
        justifyContent: 'center',
        alignItems: "center",
        borderRadius: 60,
        width: 30,
        height: 30,
        backgroundColor: 'white',
        ...sharedStyles.boxShadow
    },
    imageOverlay: {
        paddingHorizontal: 15,
        paddingVertical: 12,
        justifyContent: "space-around",
        position: "absolute",
        bottom: 20,
        opacity: 0.9,
        width: "90%",
        height: 120,
        borderRadius: 10,
        marginHorizontal: 15,
        backgroundColor: "white"
    },
    itemTitle: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    itemDescription: {
        color: colors.text_secondary,
        fontSize: 15
    },
    imageOverlayFooter: {
        justifyContent: 'space-between',
        flexDirection: "row"
    }
})
