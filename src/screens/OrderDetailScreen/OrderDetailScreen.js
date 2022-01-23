import React from 'react'
import { Dimensions, ScrollView, TouchableOpacity, View, Text, StyleSheet } from 'react-native'
import { Divider } from 'react-native-elements';
import colors from '../../shared/colors';
import { sharedStyles, softButtonsHeight } from '../../shared/styles';
import { Body, Left, List, ListItem, Right } from 'native-base';
import { connect } from 'react-redux';
import { userActions } from '../../config/redux';
import OrderNumberAndDate from '../../shared/components/OrderNumberAndDate';
import OrderAddressView from '../../shared/components/OrderAddressView';
import Note from '../../shared/components/Note';
import ListHeader from '../../shared/components/ListHeader';
import OrderDetailsItems from '../../shared/components/OrderDetailsItems';
import { currencySymbol } from '../../shared/contants';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;
const checkoutHeight = 60;
const OrderDetailScreen = ({ cart, navigation }) => {
    return (
        <>
            <ScrollView>
                <View style={styles.upperPortion}>
                    <OrderNumberAndDate orderNumber={23323} orderDate={"15/03/2021"} />
                    <OrderAddressView type="Home" address="H #32, Street 4 , Bright Avenue, North California" />
                </View>
                <Note text="Note: Your order will confirm via phone call. After confirmation order will be deliver in 45 minutes.  " />
                <View style={styles.listView}>
                    <List>
                        <ListHeader left="Name" center="Quantity X Price" right="Total Price" />
                        <Divider />
                        {cart.items.map((item, index) => (
                            <OrderDetailsItems key={index} item={item} index={index} length={cart.items} />
                        ))}
                        <Divider />
                        <ListItem>
                            <Left style={styles.flexColumn}>
                                <Text>Sub Total</Text>
                            </Left>
                            <Body style={styles.styleFlex}></Body>
                            <Right style={styles.styleFlex}>
                                <Text >{currencySymbol}{cart.total.toFixed(2)}</Text>
                            </Right>
                        </ListItem>
                        <ListItem>
                            <Left style={styles.flexColumn}>
                                <Text>Discount ({cart.discountPercent}%)</Text>
                            </Left>
                            <Body style={styles.styleFlex}></Body>
                            <Right style={styles.styleFlex}>
                                <Text >{cart.discount.toFixed(2)}</Text>
                            </Right>
                        </ListItem>
                        <ListItem>
                            <Left style={styles.flexColumn}>
                                <Text>Tax ({cart.taxPercent}%)</Text>
                            </Left>
                            <Body style={styles.styleFlex}></Body>
                            <Right style={styles.styleFlex}>
                                <Text >{cart.tax.toFixed(2)}</Text>
                            </Right>
                        </ListItem>
                        <ListItem>
                            <Left style={styles.flexColumn}>
                                <Text style={styles.netAmount}>Net Amount</Text>
                            </Left>
                            <Body style={styles.styleFlex}></Body>
                            <Right style={styles.styleFlex}>
                                <Text style={styles.netTotal}>{currencySymbol}{cart.netTotal.toFixed(2)}</Text>
                            </Right>
                        </ListItem>
                    </List>
                </View>
            </ScrollView>
            <View style={[{ padding: 10, width: WIDTH, height: checkoutHeight + softButtonsHeight, justifyContent: 'flex-start', alignItems: 'center', backgroundColor: 'white' }, sharedStyles.boxShadow]}>
                <TouchableOpacity onPress={() => navigation.navigate("Order Summary")} activeOpacity={0.6} style={styles.confirmOrder}>
                    <View style={styles.confirmOrderInner}>
                        <Text style={styles.confirmText}>CONFIRM ORDER ?</Text>
                    </View>
                </TouchableOpacity>
            </View>
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

export default connect(mapStateToProps, mapDispatchToProps)(OrderDetailScreen)


const styles = StyleSheet.create({
  confirmText: {
    color: "white",
    fontWeight: 'bold',
  },
  confirmOrderInner: {
    padding: 10,
    borderRadius: 5,
    backgroundColor: colors.primary,
    flexDirection: 'row',
    justifyContent: "center",
    alignItems: 'center',
  },
  confirmOrder: {
    width: WIDTH - 20,
  },
  netTotal: {
    color: colors.text_primary,
    fontSize: 20,
    fontWeight: "bold",
  },
  netAmount: {
    color: colors.text_primary,
    fontWeight: "bold",
  },
  flexColumn: {
    flex: 1,
    flexDirection: "column",
  },
  styleFlex: {
    flex: 1,
  },
    upperPortion: {
        margin: 10,
        borderRadius: 10,
        backgroundColor: "white",
        ...sharedStyles.boxShadow,
    },
    listView: {
        margin: 10,
        borderRadius: 10,
        backgroundColor: "white",
        ...sharedStyles.boxShadow
    }
})