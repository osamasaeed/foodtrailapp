import React, { useState } from 'react'
import { View, Text, ImageBackground, Pressable, TouchableOpacity, StyleSheet } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Rating } from 'react-native-ratings';
import colors from '../colors';
import { sharedStyles } from '../styles';
import LinearGradient from 'react-native-linear-gradient';
import FabButton from './FabButton';
import PlusMinusButton from './PlusMinusButton';
import { currencySymbol } from '../contants';

export default function ItemTile({ id, onPress, isAdded, onAddToCart, onMinusQty, onTapHeart, isHeartFill, imageSource, title, description, price, meanRatings }) {
    const [_isAdded, setisAdded] = useState(isAdded())
    const ratingCompleted = (rating) => {
        console.log("Rating is: " + rating)
    }
    const plusBtn = () => {
        onAddToCart()
        setisAdded(isAdded())
    }
    const minusBtn = () => {
        onMinusQty()
        setisAdded(isAdded())
    }
    return (

        <View style={styles.container}>
            <ImageBackground
                style={styles.bgImage}
                source={imageSource}
            >
                <View style={styles.heartBtn}>
                    <TouchableOpacity onPress={onTapHeart}>
                        {(isHeartFill) ? <MaterialIcon style={styles.heartIcon} size={20} color={colors.primary} name="heart" /> : <MaterialIcon style={styles.heartIcon} size={20} color={colors.primary} name="heart-outline" />}
                    </TouchableOpacity>
                </View>
                <LinearGradient colors={["transparent", "white"]} style={styles.gradient} />
                <View style={styles.body}>
                    <Pressable onPress={onPress} >
                        <Text style={styles.title}>{title}</Text>
                        <Text style={styles.desc}>{description}</Text>
                        <View style={styles.bottom}>
                            <View style={styles.ratingContainer}>
                                <Text style={styles.meanRating}>{meanRatings}</Text>
                                <Rating
                                    type="star"
                                    onFinishRating={ratingCompleted}
                                    imageSize={15}
                                    readonly
                                    startingValue={2}
                                    style={styles.rating}
                                />
                            </View>
                            <Text style={styles.price} >{currencySymbol} {price}</Text>
                        </View>
                        {_isAdded > 0 ? <PlusMinusButton style={styles.PlusMinusBtn} qty={_isAdded} onPlusQty={plusBtn} onMinusQty={minusBtn} />
                            : <FabButton
                                style={styles.fabBtn}
                                backgroundColor={colors.primary}
                                size={30}
                                onPress={plusBtn}
                                icon="plus"
                            />}
                    </Pressable>
                </View>

            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    PlusMinusBtn: {
        position: 'absolute',
        right: 30,
        top: -20,
    },
    heartIcon: {
        marginTop: 2,
    },
    container: { margin: 10, height: 300, borderRadius: 10, overflow: 'hidden', ...sharedStyles.boxShadow },
    bgImage: { width: '100%', flex: 1, borderRadius: 20 },
    heartBtn: { position: 'absolute', right: 10, top: 10, justifyContent: 'center', alignItems: "center", borderRadius: 60, width: 30, height: 30, backgroundColor: 'white', ...sharedStyles.boxShadow },
    gradient: { position: 'absolute', bottom: 120, height: 50, width: "100%" },
    body: { paddingHorizontal: 15, paddingVertical: 12, justifyContent: "space-around", position: "absolute", bottom: 0, height: 120, width: "100%", backgroundColor: "white" },
    title: { fontSize: 25, ...sharedStyles.fontAkayaTeli },
    desc: { color: colors.text_secondary, fontSize: 15, ...sharedStyles.fontPoppinsReg },
    bottom: { justifyContent: 'space-between', flexDirection: "row" },
    ratingContainer: { flexDirection: 'row', justifyContent: 'center', alignItems: 'center' },
    meanRating: { fontSize: 12, color: '#f1c40f', marginRight: 5 },
    rating: { paddingVertical: 10 },
    price: { fontSize: 20, fontWeight: 'bold', color: colors.secondary },
    fabBtn: { right: 30, top: -20, width: 50, height: 50 }


})