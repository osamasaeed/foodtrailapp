import React, { useState } from 'react';
import { Text, View, Dimensions, TouchableOpacity, FlatList, ScrollView, StyleSheet } from 'react-native';
import { CheckBox } from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../../shared/colors';
import FabButton from '../../shared/components/FabButton';
import { sharedStyles } from '../../shared/styles';
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const PaymentScreen = (props) => {
    const [selected, setSelected] = useState(0);
    const [paymentModes, setPaymentModes] = useState([
        { title: "Cash", card_number: "", ccv: "", expire_date: "" },
        { title: "Osama Saeed", card_number: "7222-XXXX-XXXX-XXXX", ccv: "XXX", expire_date: "02/22" },
    ])
    return (
        <>
            <SafeAreaView>
                <FlatList
                    data={paymentModes}
                    keyExtractor={(item, i) => i.toString()}
                    renderItem={({ item, index }) => (
                        <TouchableOpacity onPress={() => setSelected(index)} style={[styles.itemContainer, sharedStyles.boxShadow]}>
                            <View>
                                <View style={styles.Inner} >
                                    <View style={styles.itemTitleContainer}>
                                        <Text style={styles.itemTitle}>{item.title}</Text>
                                        <MaterialIcon style={styles.itemTitleIcon} size={20} color={colors.secondary} name="credit-card-multiple-outline" />
                                    </View>
                                    <CheckBox checked={index===selected}
                                        size={30}
                                        checkedIcon='dot-circle-o'
                                        uncheckedIcon='circle-o'
                                        checkedColor={colors.primary} />
                                </View>
                                {(!!item.card_number && <View style={styles.cardNumber}>
                                    <Text>{item.card_number}</Text>
                                    <Text>{item.ccv}</Text>
                                    <Text>{item.expire_date}</Text>
                                </View>)}
                            </View>
                        </TouchableOpacity>
                    )}
                />
            </SafeAreaView>
            <FabButton
                style={styles.fabButton}
                backgroundColor={colors.primary}
                size={20}
                onPress={() => props.navigation.navigate("PaymentPopup")}
                icon="plus"
            />
        </>
    );
}

export default PaymentScreen;
const styles = StyleSheet.create({
  fabButton: {
    right: 30,
    bottom: 80,
    width: 40,
    height: 40,
  },
  cardNumber: {
    padding: 10,
    marginHorizontal: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  itemTitleIcon: {
    marginHorizontal: 5,
  },
  itemTitle: {
    color: colors.text_primary,
    fontSize: 24,
    fontWeight: 'bold',
  },
  itemTitleContainer: {
    justifyContent: "center",
    alignItems: 'center',
    flexDirection: "row",
  },
  Inner: {
    marginLeft: 15,
    marginBottom: 0,
    padding: 5,
    flexDirection: 'row',
    justifyContent: "space-between",
    alignItems: 'center',
  },
  itemContainer: {
    margin: 10,
    borderRadius: 10,
    backgroundColor: "white",
  },
})