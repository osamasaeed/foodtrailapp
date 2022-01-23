import React, { useEffect, useState } from 'react'
import { View, Text, TouchableOpacity, Dimensions, ScrollView, StyleSheet } from 'react-native'
import { Divider, Input } from 'react-native-elements';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../../shared/colors'
import Card from '../../shared/components/Card';
import ItemListItem from '../../shared/components/ItemListItem';
import BlockButton from '../../shared/components/BlockButton';
import { connect } from 'react-redux';
import { userActions } from '../../config/redux';
import { logics } from '../../shared/ComplexLogics';
import { currencySymbol } from '../../shared/contants';

const checkoutHeight = 60;

const taxPercent = 13;
const discountPercent = 10
const CartScreen = ({ cart, setCart, navigation }) => {
    useEffect(() => {
        const _cart = logics.calculateCart(cart, taxPercent, discountPercent);
        setCart({ ..._cart });
        return () => {

        }
    }, [])
    const plusQty = (index) => {
        let _cart = logics.addToCart(cart, cart.items, index);
        _cart = logics.calculateCart(cart, taxPercent, discountPercent);
        setCart({ ..._cart });
    }
    const minusQty = (index) => {
        let _cart = logics.onMinusQty(cart, cart.items, index);
        _cart = logics.calculateCart(cart, taxPercent, discountPercent);
        setCart({ ..._cart });
    }
    const removeItem = (index) => {
        let _cart = logics.onRemoveItem(cart, index);
        _cart = logics.calculateCart(cart, taxPercent, discountPercent);
        setCart({ ..._cart });
    }
    return (
        <>
            <ScrollView>
                <Card>
                    <View style={styles.paymentSection} >
                        <View style={styles.paymentInner}>
                            <Text style={styles.paymentLabel}>Payment </Text>
                            <MaterialIcon style={styles.paymentIcon} size={20} color={colors.secondary} name="wallet-outline" />
                        </View>
                        <TouchableOpacity onPress={() => navigation.navigate("Payment")} style={styles.paymentDropdown}>
                            <Text style={styles.paymentType}>Cash</Text>
                            <MaterialIcon size={20} color={colors.primary} name="chevron-down" />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.amountArea}>
                        <View style={styles.row}>
                            <Text style={styles.text}>Sub total</Text>
                            <Text style={styles.value}> {cart.total.toFixed(2)}</Text>
                        </View>
                        <View style={styles.row}>
                            <Text style={styles.text}>Discount ({cart.discountPercent} %)</Text>
                            <Text style={styles.value}> {cart.discount.toFixed(2)}</Text>
                        </View>
                        <View style={styles.row}>
                            <Text style={styles.text}>Tax ({cart.taxPercent} %)</Text>
                            <Text style={styles.value}> {cart.tax.toFixed(2)}</Text>
                        </View>
                        <Divider></Divider>
                        <View style={styles.row}>
                            <Text style={styles.toPay}>To Pay</Text>
                            <Text style={styles.toPayValue}>{currencySymbol} {cart.netTotal.toFixed(2)}</Text>
                        </View>
                    </View>
                </Card>
                <Card>
                    <View style={styles.addressSection}>
                        <View style={styles.addressInner}>
                            <Text style={styles.deliverTo}>Deliver To</Text>
                            <TouchableOpacity onPress={() => navigation.navigate("Address")} style={styles.addressDropdown}>
                                <Text style={styles.addressText}>H #32, Bright Avenue, California</Text>
                                <MaterialIcon size={20} color={colors.primary} name="chevron-down" />
                            </TouchableOpacity>
                        </View>
                        <MaterialIcon size={35} color={colors.primary} name="map-marker-outline" />
                    </View>
                    <Input
                        inputContainerStyle={styles.textInput}
                        inputStyle={styles.inputStyle}
                        placeholder='Email'
                        leftIconContainerStyle={styles.inputLeftIcon}
                        leftIcon={
                            <MaterialIcon
                                name='mail'
                                size={24}
                                color={colors.text_secondary}
                            />
                        }
                    />
                    <Input
                        inputContainerStyle={styles.textInput}
                        inputStyle={styles.inputStyle}
                        placeholder='Phone number'
                        leftIconContainerStyle={styles.inputLeftIcon}
                        leftIcon={
                            <MaterialIcon
                                name='phone-outline'
                                size={24}
                                color={colors.text_secondary}
                            />
                        }
                    />
                    <Input
                        inputContainerStyle={styles.textInput}
                        inputStyle={styles.inputStyle}
                        placeholder='Add a note of delivery address'
                        leftIconContainerStyle={styles.inputLeftIcon}
                        leftIcon={
                            <MaterialIcon
                                name='note-text-outline'
                                size={24}
                                color={colors.text_secondary}
                            />
                        }
                    />
                </Card>
                <Card>
                    <View style={styles.cart} >
                        <View style={styles.cartInner}>
                            <Text style={styles.cartTitle}>My Cart </Text>
                            <MaterialIcon style={styles.cartIcon} size={20} color={colors.secondary} name="cart-outline" />
                        </View>
                        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.addItemsContainer}>
                            <Text style={styles.addItemText}>+ Add items</Text>
                        </TouchableOpacity>
                    </View>
                    {cart.items.map((item, index) => (
                        <ItemListItem key={index}
                            title={item.title}
                            description={item.description}
                            price={item.price}
                            imageSource={item.image}
                            qty={item.qty}
                            onMinusQty={() => minusQty(index)}
                            onPlusQty={() => plusQty(index)}
                            onRemoveItem={() => removeItem(index)}
                        />
                    ))}
                </Card>
            </ScrollView>
            <BlockButton
                onPress={() => navigation.navigate("Order Detail")}
                checkoutButtonHeight={checkoutHeight}
                text1="Place order"
                text2={`${currencySymbol} ${cart.netTotal.toFixed(2)}`}

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

export default connect(mapStateToProps, mapDispatchToProps)(CartScreen);

const styles = StyleSheet.create({
  addItemText: {
    color: colors.primary,
    fontSize: 12,
  },
  addItemsContainer: {
    padding: 5,
  },
  cartIcon: {
    marginHorizontal: 5,
  },
  cartTitle: {
    color: colors.text_primary,
    fontSize: 24,
    fontWeight: 'bold',
  },
  cartInner: {
    justifyContent: "center",
    alignItems: 'center',
    flexDirection: "row",
  },
  cart: {
    margin: 15,
    marginBottom: 0,
    padding: 10,
    flexDirection: 'row',
    justifyContent: "space-between",
    alignItems: 'center',
  },
  inputLeftIcon: {
    marginBottom: 8,
  },
  inputStyle: {
    fontSize: 16,
  },
  textInput: {
    paddingLeft: 10,
    borderBottomWidth: 0,
    borderRadius: 5,
    marginTop: 5,
    backgroundColor: colors.background_primary,
  },
  addressText: {
    color: colors.primary,
    fontWeight: 'bold',
  },
  addressDropdown: {
    padding: 6,
    height: 30,
    backgroundColor: colors.background_primary,
    borderRadius: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  deliverTo: {
    fontWeight: 'bold',
    color: colors.text_tertiary,
  },
  addressInner: {
    margin: 10,
    width: 250,
  },
  addressSection: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  toPayValue: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.primary,
  },
  toPay: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.text_primary,
  },
  value: {
    color: colors.text_primary,
  },
  text: {
    fontSize: 16,
    color: colors.text_secondary,
  },
  row: {
    marginVertical: 5,
    flexDirection: 'row',
    justifyContent: "space-between",
    alignItems: 'center',
  },
  amountArea: {
    marginHorizontal: 20,
    marginBottom: 10,
  },
  paymentType: {
    color: colors.primary,
    fontWeight: 'bold',
  },
  paymentDropdown: {
    padding: 6,
    height: 30,
    backgroundColor: colors.background_primary,
    borderRadius: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  paymentIcon: {
    marginHorizontal: 5,
  },
  paymentLabel: {
    color: colors.text_primary,
    fontSize: 24,
    fontWeight: 'bold',
  },
  paymentInner: {
    justifyContent: "center",
    alignItems: 'center',
    flexDirection: "row",
  },
  paymentSection: {
    margin: 15,
    marginBottom: 0,
    padding: 5,
    flexDirection: 'row',
    justifyContent: "space-between",
    alignItems: 'center',
  },
})