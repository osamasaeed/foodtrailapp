import { Button } from 'native-base';
import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { CreditCardInput } from "react-native-credit-card-input";
import { SafeAreaView } from 'react-native-safe-area-context'
import colors from '../../shared/colors';

const PaymentPopup = () => {
    const _onChange = () => {

    }
    return (
        <SafeAreaView style={styles.safeAreaView}>
            <CreditCardInput onChange={_onChange} />
            <Button block style={styles.button} >
                <Text style={styles.buttonText}>Submit</Text>
            </Button>
        </SafeAreaView>
    )
}

export default PaymentPopup

const styles = StyleSheet.create({
  buttonText: {
    color: colors.background_primary,
    fontWeight: 'bold',
  },
  button: {
    borderRadius: 5,
    backgroundColor: colors.primary,
    margin: 20,
    marginTop: 40,
  },
  safeAreaView: {
    marginTop: 30,
  },
})