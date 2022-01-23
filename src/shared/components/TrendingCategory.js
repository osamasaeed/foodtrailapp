import React from 'react'
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { sharedStyles } from '../styles';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import colors, { getColorByIndex } from '../colors';
import { StyleSheet } from 'react-native';

const colorKeys = [
    "primary",
    "secondary",
    "tertiary",
    "accent",
    "primary",
    "secondary",
    "tertiary",
    "accent",
    "primary",
    "secondary",
    "tertiary",
    "accent",
    "primary",
    "secondary",
    "tertiary",
    "accent",
]

// List's Item component 
const Item = ({ item, index, listItems, onPress }) => (
    <TouchableOpacity onPress={() => onPress(item, index)} key={index} >
        <View style={[styles.iconContainer, { backgroundColor: colors[colorKeys[index]] + "20" }]}>
            <MaterialIcon size={25} color={colors[colorKeys[index]]} name={item.icon} />
        </View>
        <Text style={styles.itemLabel}>{item.title}</Text>
    </TouchableOpacity >
)
// List component
const TrendingCategory = ({ listItems, onPressItem }) => {
    return (
        <FlatList
            horizontal={true}
            data={listItems}
            keyExtractor={(item, i) => i.toString()}
            contentContainerStyle={styles.flatlistContainer}

            // list item component are being use in renderItem property of flatlist component 
            renderItem={({ item, index }) => <Item item={item} listItems={listItems} index={index} onPress={onPressItem} />}
        />
    )
}

export default TrendingCategory;


// styles for all components in this block 
const styles = StyleSheet.create({
    flatlistContainer: {
        marginTop: 20,
        width: "100%",
        alignItems: "center",
        justifyContent: "center"
    },
    iconContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 50,
        height: 50,
        borderRadius: 5,
        marginHorizontal: 18,
        backgroundColor: 'white'
    },
    itemLabel: {
        marginTop: 5,
        fontSize: 10,
        textAlign: "center",
        color: colors.text_secondary,
        ...sharedStyles.fontPoppinsReg
    }
})