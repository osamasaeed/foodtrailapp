
import React, { useEffect, useRef, useState } from 'react'
import { FlatList, TouchableOpacity, StyleSheet, View } from 'react-native'
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../../shared/colors';
import { sharedStyles } from '../../shared/styles';
import LinearGradient from 'react-native-linear-gradient';
import SubLabel from '../../shared/components/SubLabel';
import ItemTile from '../../shared/components/ItemTile';
import BlockButton from '../../shared/components/BlockButton';
import SearchBar from '../../shared/components/SearchBar';
import { Dishes, PillsCategories } from '../../shared/data';
import { connect } from 'react-redux';
import { userActions } from '../../config/redux';
import { logics } from '../../shared/ComplexLogics';
import HorizontalCategoryList from '../../shared/components/HorizontalCategoryList';
import {currencySymbol} from '../../shared/contants';

const checkoutButtonHeight = 60;

const CategoryScreen = (props) => {
    // declare all states and varibles
    const flatListRef = useRef(null);
    const [items, setItems] = useState(Dishes)
    const [selectedCategoryIndex, setSelectedCategory] = useState(0);
    const [cartInfo, setCartInfo] = useState({ total: props.cart.total, totalItems: props.cart.items.length });
    const [searchText, setSearchText] = useState('');


    useEffect(() => {
        const timer = setTimeout(() => {
            const { category, index } = props.route.params;
            switch (category) {
                case "FAVORITE": {
                    // flatListRef.current.scrollToIndex({ animated: true, index: 1 });
                    changeCategory(1);
                    break;
                }
                case "CHEAP": {
                    // flatListRef.current.scrollToIndex({ animated: true, index: 2 });
                    changeCategory(2);
                    break;
                }
                case "TREND": {
                    // flatListRef.current.scrollToIndex({ animated: true, index: 3 });
                    changeCategory(3);
                    break;
                }
                case "MORE": {
                    // flatListRef.current.scrollToIndex({ animated: true, index: 4 })
                    changeCategory(4);
                    break;
                }
                default: {
                    // flatListRef.current.scrollToIndex({ animated: true, index: index + 4 });
                    changeCategory(index + 4);
                }
            }

        })

        props.navigation.setOptions({
            headerRight: () => <TouchableOpacity onPress={() => gotoCart()} style={styles.cartBtn}>
                <MaterialIcon style={styles.circleIcon} size={5} color={colors.secondary} name="circle" />
                <MaterialIcon style={styles.cartIcon} size={20} color={colors.primary} name="cart" />
            </TouchableOpacity>
        })


        return () => clearTimeout(timer);
    }, [props.navigation])


    const handleSearchChange = (text) => {
        setSearchText(text);
    }
    const onResetSearchBar = () => {
        setSearchText('');
    }
    const changeCategory = (index) => {
        setSelectedCategory(index);
        const scrollToIndex = (index === 0) ? 0 : index - 1;
        flatListRef.current.scrollToIndex({ animated: true, index: scrollToIndex });
    }
    const calcCartInfo = (cart) => {
        setCartInfo({
            total: cart.total,
            totalItems: cart.items.length
        })
    }
    const addToFavorite = (index) => {
        items[index].isFavorite = !items[index].isFavorite;
        setItems([...items])
    }
    const addToCart = (index) => {
        const cart = logics.addToCart(props.cart, items, index);
        props.setCart(cart);
        calcCartInfo(cart);
    }
    const onMinusQty = (index) => {
        const cart = logics.onMinusQty(props.cart, items, index);
        props.setCart(cart);
        calcCartInfo(cart);

    }
    const isAdded = (index) => {
        const qty = logics.isAddedInCart(props.cart, items, index);
        return qty;
    }
    const gotoCart = () => {
        props.navigation.navigate("Cart")
    }
    return (
        <>
            <HorizontalCategoryList
                flatListRef={flatListRef}
                selectedCategoryIndex={selectedCategoryIndex}
                changeCategory={changeCategory}
            />
            <View style={styles.categoryContainer} >
                {selectedCategoryIndex === 0 && <SearchBar onChangeText={handleSearchChange} value={searchText} onClose={onResetSearchBar} />}
                <LinearGradient colors={[colors.background_primary, "transparent"]} style={styles.linearGrad} />
                <FlatList
                    data={items}
                    keyExtractor={(item, i) => i.toString()}
                    contentContainerStyle={styles.pillsCatList}
                    ListHeaderComponent={() => (<SubLabel title={PillsCategories[selectedCategoryIndex].title} titleIcon={PillsCategories[selectedCategoryIndex].icon} containerStyle={styles.subLabel} titleIconSize={30} />)}
                    renderItem={({ item, index }) => {
                        return (
                            <ItemTile
                                onPress={() => props.navigation.navigate('ItemDetail', { item })}
                                key={"itemTile." + index}
                                id={`item.${item.id}.detail`}
                                imageSource={item.image}
                                onTapHeart={() => addToFavorite(index)}
                                onAddToCart={() => addToCart(index)}
                                onMinusQty={() => onMinusQty(index)}
                                isHeartFill={item.isFavorite}
                                title={item.title}
                                description={item.description}
                                meanRatings={4.9}
                                price={item.price}
                                isAdded={() => isAdded(index)}
                            />
                        )
                    }}
                />
            </View>
            <BlockButton
                onPress={() => gotoCart()}
                checkoutButtonHeight={checkoutButtonHeight}
                text1={`${cartInfo.totalItems} Item(s)`}
                text2="Checkout"
                text3={`${currencySymbol} ${cartInfo.total}`}
                style={styles.blockBtn}
            />
        </>
    )
}


const mapStateToProps = (props) => {
    return {
        cart: props.global.cart,
    };
};

const mapDispatchToProps = {
    setCart: userActions.setCart
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryScreen)

const styles = StyleSheet.create({
  blockBtn: {
    position: 'absolute',
    bottom: 0,
  },
  subLabel: {
    marginTop: 0,
    paddingVertical: 0,
  },
  pillsCatList: {
    justifyContent: 'space-around',
    marginTop: 20,
    paddingBottom: checkoutButtonHeight,
  },
  linearGrad: {
    zIndex: 1,
    position: 'absolute',
    width: "100%",
    height: 20,
  },
  categoryContainer: {
    marginBottom: checkoutButtonHeight + 50,
  },
  cartIcon: {
    marginTop: 2,
  },
  circleIcon: {
    position: 'absolute',
    top: 3,
  },
    cartBtn: {
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
})
