import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { ListItem, Left, Body, Right } from 'native-base';
import colors, { getColorByIndex } from '../../shared/colors';
import { FlatList } from 'react-native';
import CView from '../../shared/components/CView';

const HistoryScreen = (props) => {
    const goToDetail = (index) => {
        props.navigation.navigate("Order Detail");
    }
    return (
        <CView headerTitle="Orders History" navigation={props.navigation}>
            <FlatList
                keyExtractor={(item, i) => i.toString()}
                data={[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]}
                renderItem={({ data, index }) => (
                    <ListItem avatar key={index} onPress={() => goToDetail(index)} >
                        <Left style={styles.itemLeft}>
                            <Text style={styles.itemYear}>2021</Text>
                            <View style={[styles.itemBG, { backgroundColor: getColorByIndex(index) }]}>
                                <Text style={styles.itemDate}>13</Text>
                            </View>
                            <Text style={styles.itemMonth}>Mar</Text>
                        </Left>
                        <Body>
                            <Text>Order <Text style={styles.orderId}>#34242</Text></Text>
                            <Text style={styles.title}>Home | Credit Card</Text>
                            <Text style={styles.menuItems} note>Hamburger, Fries, Pepsi...</Text>
                        </Body>
                        <Right>
                            <Text note>3:43 pm</Text>
                            <Text style={[{ color: (index == 1) ? colors.secondary : (index == 4) ? colors.primary : (index == 3) ? colors.text_primary : "green" }]} >{(index == 1) ? "Pending" : (index == 4) ? "on Hold" : (index == 3) ? "Cancelled" : "Completed"}</Text>
                            <Text note></Text>
                        </Right>
                    </ListItem>
                )}
            />
        </CView>
    )
}

export default HistoryScreen
const styles = StyleSheet.create({
  menuItems: {
    color: colors.text_secondary,
    fontStyle: "italic",
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
  },
  orderId: {
    color: colors.secondary,
  },
  itemMonth: {
    color: colors.text_secondary,
  },
  itemDate: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    fontStyle: "italic",
  },
    itemBG: {
        borderRadius: 100,
        padding: 8,
        margin: 2,
        height: 40,
        width: 40,
    },
    itemYear: {
        color: colors.text_secondary,
    },
    itemLeft: {
        paddingTop: 0,
        flexDirection: "column",
        alignItems: "center",
    },
})