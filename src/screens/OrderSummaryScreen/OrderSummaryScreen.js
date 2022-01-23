import { Button, Textarea } from 'native-base'
import React from 'react'
import { ScrollView, StyleSheet } from 'react-native';
import { Dimensions, Image, ImageBackground, View, Text, TouchableOpacity } from 'react-native'
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import LottieView from 'lottie-react-native';
import colors from '../../shared/colors';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;
const checkoutHeight = 60;
const OrderSummaryScreen = (props) => {

    return (
        <ScrollView contentContainerStyle={styles.scrollView}>

            <LottieView style={styles.lottiePlayer} source={require('../../assets/lottiefiles/food-delivery-services-animation.json')} autoPlay />
            <Text style={styles.thankyou}>Thank You <MaterialIcon name="checkbox-multiple-marked-circle" size={30} /> {'\n'}Order Successfully Placed</Text>
            <MaterialIcon name="progress-clock" size={50} />
            <Text style={styles.estimatedDeliverTime}>Estimated Delivery Time{'\n'} <Text style={styles.estimatedtimeText}>45 Minutes</Text></Text>
            <MaterialIcon name="credit-card-multiple-outline" size={50} />
            <Text style={styles.paymentMethod}>Paymeny Method{'\n'}<Text style={styles.paymentMethodText}>CASH ON DELIVERY</Text></Text>

            <View style={[styles.backToHomeContainer]}>
                <TouchableOpacity onPress={() => props.navigation.navigate("Home")} activeOpacity={0.6} style={styles.backToHomeBtn}>
                    <View style={styles.backToHomeInner}>
                        <Text style={styles.backToHomeText}>BACK TO HOME</Text>
                    </View>
                </TouchableOpacity>
            </View>

        </ScrollView>
    )
}
export default OrderSummaryScreen
const styles = StyleSheet.create({
  estimatedtimeText: {
    fontStyle: "italic",
    color: colors.secondary,
    fontWeight: "bold",
  },
  backToHomeText: {
    color: "white",
    fontWeight: 'bold',
  },
  backToHomeBtn: {
    width: WIDTH - 20,
  },
  backToHomeInner: {
    padding: 15,
    borderRadius: 5,
    backgroundColor: colors.primary,
    flexDirection: 'row',
    justifyContent: "center",
    alignItems: 'center',
  },
  backToHomeContainer: {
    padding: 10,
    width: WIDTH,
    height: checkoutHeight,
    justifyContent: 'center',
    alignItems: 'center',
  },
  paymentMethodText: {
    fontStyle: "italic",
    color: colors.secondary,
    fontWeight: "bold",
  },
  paymentMethod: {
    textAlign: "center",
    marginVertical: 10,
    fontSize: 18,
    color: colors.text_primary,
  },
  estimatedDeliverTime: {
    textAlign: "center",
    marginVertical: 10,
    fontSize: 18,
    color: colors.text_primary,
  },
  thankyou: {
    textAlign: "center",
    marginVertical: 10,
    fontSize: 20,
    fontWeight: "bold",
  },
  lottiePlayer: {
    width: WIDTH,
  },
  scrollView: {
    justifyContent: "center",
    alignItems: "center"
  },
})