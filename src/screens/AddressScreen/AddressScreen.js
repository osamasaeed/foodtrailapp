import React, { useState } from 'react';
import { View, Text, ImageBackground, ScrollView, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { CheckBox, Divider } from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../../shared/colors';
import FabButton from '../../shared/components/FabButton';
import { sharedStyles } from '../../shared/styles';

const AddressScreen = (props) => {
    const [selected, setSelected] = useState(0);
    const [addresses, setAddresses] = useState([
        {
            title: "Home",
            state: "California",
            city: "San Diego",
            address1: "H #32, Bright Avenue,",
            address2: "North California"
        },
        {
            title: "Office",
            state: "California",
            city: "San Diego",
            address1: "H #32, Bright Avenue,",
            address2: "North California"
        },
    ])
    return (
        <>
            <SafeAreaView>
                <FlatList
                    data={addresses}
                    keyExtractor={(item, i) => i.toString()}
                    renderItem={({ item, index }) => (
                        <TouchableOpacity onPress={() => setSelected(index)} style={[styles.itemContainer, sharedStyles.boxShadow]}>
                            <View style={styles.itemInnerView} >
                                <View style={styles.titleContainer}>
                                    <Text style={styles.title}>{item.title} </Text>
                                    <MaterialIcon style={styles.titleIcon} size={20} color={colors.secondary} name="map-marker-outline" />
                                </View>
                                <CheckBox checked={index === selected}
                                    size={30}
                                    containerStyle={styles.checkboxContainer}
                                    checkedIcon='dot-circle-o'
                                    uncheckedIcon='circle-o'
                                    checkedColor={colors.primary} />
                            </View>
                            <View style={styles.addressContainer}>
                                <View style={styles.addressLine}>
                                    <Text style={styles.label}>State/Province</Text>
                                    <Text style={styles.value}>{item.state}</Text>
                                </View>
                                <View style={styles.addressLine}>
                                    <Text style={styles.label}>City</Text>
                                    <Text style={styles.value}> {item.city}</Text>
                                </View>
                                <View style={styles.addressLine}>
                                    <Text style={styles.label}>Address 1 </Text>
                                    <Text style={styles.value}> {item.address1}</Text>
                                </View>
                                <View style={styles.addressLine}>
                                    <Text style={styles.label}>Address 2 </Text>
                                    <Text style={styles.value}> {item.address2}</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    )}
                />
            </SafeAreaView>
            <FabButton
                style={styles.fabBtn}
                backgroundColor={colors.primary}
                size={20}
                onPress={() => props.navigation.navigate("AddressPopup")}
                icon="plus"
            />
        </>
    )
}

export default AddressScreen

const styles = StyleSheet.create({
  fabBtn: {
    right: 30,
    bottom: 80,
    width: 40,
    height: 40,
  },
  value: {
    color: colors.text_primary,
  },
  label: {
    fontSize: 16,
    color: colors.text_secondary,
  },
  addressLine: {
    marginVertical: 5,
    flexDirection: 'row',
    justifyContent: "space-between",
    alignItems: 'center',
  },
  addressContainer: {
    marginHorizontal: 20,
    marginBottom: 10,
  },
  checkboxContainer: {
    padding: 0,
  },
  titleIcon: {
    marginHorizontal: 5,
  },
  title: {
    color: colors.text_primary,
    fontSize: 24,
    fontWeight: 'bold',
  },
  titleContainer: {
    justifyContent: "center",
    alignItems: 'center',
    flexDirection: "row",
  },
  itemInnerView: {
    marginLeft: 15,
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