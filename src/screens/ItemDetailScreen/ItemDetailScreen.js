import React, { useEffect } from 'react'
import { View, Text, TouchableOpacity } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../../shared/colors';
import { Rating } from 'react-native-ratings';
import { StyleSheet } from 'react-native';
import { sharedStyles } from '../../shared/styles';
import CustomCarousel from '../../shared/components/CustomCarosuel';
import { Dishes } from '../../shared/data';
import { Dimensions } from 'react-native';
import CTabView from '../../shared/components/CTabView';
import DetailsTab from '../../shared/components/DetailsTab';
import ReviewsTab from '../../shared/components/ReviewsTab';
import { currencySymbol } from '../../shared/contants';
import { useNavigation } from '@react-navigation/core';

const { width, height } = Dimensions.get('window');
const ItemDetailScreen = (props) => {
    const navigation = useNavigation();
    const { item } = props.route.params;
    const ratingCompleted = (rating) => {
        console.log("Rating is: " + rating)
    }
    const onTapCart = () => {
        navigation.navigate('Cart');

    }
    useEffect(() => {
        navigation.setOptions({
            headerRight: () => <TouchableOpacity onPress={onTapCart} style={styles.cartBtn}>
                <MaterialIcon style={styles.circleIcon} size={5} color={colors.secondary} name="circle" />
                <MaterialIcon style={styles.cartIcon} size={20} color={colors.primary} name="cart" />
            </TouchableOpacity>
        })
        return () => {

        }
    }, [navigation]);

    return (
        <View style={styles.container}>
            <CustomCarousel slides={Dishes} paginationStyle={styles.paginationStyle} activeDotStyle={styles.activeDotStyle} />
            <View style={styles.cardContainer}>
                <View style={styles.row}>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.itemPrice}>{currencySymbol}{item.price}</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.itemTags}><MaterialIcon name="tag" /> Desi, Oriental, Halal, Rice </Text>
                    <Text style={styles.cutPrice} >{currencySymbol}{(parseFloat(item.price) + 2.01).toFixed(2)}</Text>
                </View>
                <View style={[styles.row, styles.ratingContainer]}>
                    <Rating
                        type="star"
                        onFinishRating={ratingCompleted}
                        imageSize={24}
                        // readonly
                        startingValue={3.5}
                    />
                    <Text style={styles.freeDelivery}><MaterialIcon name="truck-fast-outline" color={colors.white} /> Free Delivery</Text>
                </View>
                <View style={[styles.row, { marginTop: 30 }]}>
                    <View style={styles.flexRow}>
                        <MaterialIcon name="star" color={colors.white} size={24} style={styles.ratingIcon} />
                        <View>
                            <Text style={styles.avgRating}>3.5</Text>
                            <Text style={styles.badgeLabel}>Rating</Text>
                        </View>
                    </View>
                    <View style={styles.flexRow}>
                        <MaterialIcon name="heart" color={colors.white} size={24} style={styles.favoriteIcon} />
                        <View>
                            <Text style={styles.favoriteCount}>200</Text>
                            <Text style={styles.badgeLabel}>Favoriate</Text>
                        </View>
                    </View>
                    <View style={styles.flexRow}>
                        <MaterialIcon name="comment-multiple" color={colors.white} size={24} style={styles.reviewsIcon} />
                        <View>
                            <Text style={styles.reviewCount}>345</Text>
                            <Text style={styles.badgeLabel}>Reviews</Text>
                        </View>
                    </View>
                </View>
                <CTabView>
                    <DetailsTab key="details" title="Details" />
                    <ReviewsTab key="reviews" title="Reviews" />
                </CTabView>
            </View>
        </View>
    )
}

export default ItemDetailScreen;


const styles = StyleSheet.create({
  reviewsIcon: {
    padding: 10,
    marginHorizontal: 6,
    borderRadius: 100,
    backgroundColor: colors.tertiary,
  },
  favoriteIcon: {
    padding: 10,
    marginHorizontal: 6,
    borderRadius: 100,
    backgroundColor: colors.darkPrimary,
  },
  ratingIcon: {
    padding: 10,
    marginHorizontal: 6,
    borderRadius: 100,
    backgroundColor: colors.secondary,
  },
  reviewCount: {
    fontWeight: 'bold',
    color: colors.tertiary,
  },
  favoriteCount: {
    fontWeight: 'bold',
    color: colors.darkPrimary,
  },
  badgeLabel: {
    color: colors.text_secondary,
    fontSize: 12,
  },
  avgRating: {
    fontWeight: 'bold',
    color: colors.secondary,
  },
  flexRow: {
    flexDirection: 'row',
  },
  freeDelivery: {
    paddingHorizontal: 16,
    paddingVertical: 2,
    color: colors.white,
    backgroundColor: colors.darkPrimary,
    borderRadius: 100,
    fontSize: 10,
    fontWeight: 'bold',
  },
  ratingContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  cutPrice: {
    color: colors.text_secondary,
    textDecorationLine: 'line-through',
  },
  itemTags: {
    color: colors.text_secondary,
  },
  itemPrice: {
    color: colors.darkPrimary,
    fontSize: 16,
    fontWeight: 'bold',
  },
  activeDotStyle: {
    borderWidth: 1,
    borderColor: colors.white,
  },
  paginationStyle: {
    bottom: 60,
  },
  cartIcon: {
    marginTop: 2,
  },
  circleIcon: {
    position: 'absolute',
    top: 3,
  },
    container: { flex: 1, },
    cardContainer: { padding: 20, paddingBottom: 0, paddingTop: 40, height: height - 180, marginTop: -50, backgroundColor: colors.white, zIndex: 1, ...sharedStyles.boxShadow, borderTopLeftRadius: 40, borderTopRightRadius: 40, },
    row: { flexDirection: 'row', justifyContent: 'space-between' },
    // bgImage: { width: '100%', flex: 1, borderRadius: 20 },
    cartBtn: { position: 'absolute', right: 10, top: 10, justifyContent: 'center', alignItems: "center", borderRadius: 60, width: 30, height: 30, backgroundColor: 'white', ...sharedStyles.boxShadow },
    // gradient: { position: 'absolute', bottom: 120, height: 50, width: "100%" },
    // body: { paddingHorizontal: 15, paddingVertical: 12, justifyContent: "space-around", position: "absolute", bottom: 0, height: 120, width: "100%", backgroundColor: "white" },
    title: { fontSize: 25, fontWeight: 'bold', textTransform: 'capitalize', width: "70%" },
    // desc: { color: colors.text_secondary, fontSize: 15, ...sharedStyles.fontPoppinsReg },
    // bottom: { justifyContent: 'space-between', flexDirection: "row" },
    // ratingContainer: { flexDirection: 'row', justifyContent: 'center', alignItems: 'center' },
    // meanRating: { fontSize: 12, color: '#f1c40f', marginRight: 5 },
    rating: { marginTop: 20 },
    // price: { fontSize: 20, fontWeight: 'bold', color: colors.secondary },
    fabBtn: { right: 30, top: -20, width: 50, height: 50 }
})