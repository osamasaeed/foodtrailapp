import React from 'react'
import { View, Text, FlatList, TouchableOpacity, Dimensions, StyleSheet } from 'react-native';
import { Badge } from 'native-base';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../colors';
import { sharedStyles } from '../styles';
import { PillsCategories } from '../data';
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const categoryListPadding = WIDTH / 4;

const ItemPill = ({ item, index, selected, changeCategory }) => (
    <TouchableOpacity activeOpacity={0.6} onPress={() => changeCategory(index)} key={index} style={styles.itemPill}>
        <Badge style={[{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginHorizontal: 6, backgroundColor: selected ? colors.primary : "white", borderWidth: 0.6, borderColor: colors.primary }, sharedStyles.boxShadow]} key={index}>
            {(item.icon) ? <MaterialIcon color={selected ? "white" : colors.primary} size={20} name={item.icon} /> : null}
            {(item.title) ? <Text style={[styles.itemTitle, { color: selected ? "white" : colors.primary }]}>{item.title}</Text> : null}
        </Badge>
    </TouchableOpacity>
)


const HorizontalCategoryList = ({ flatListRef, selectedCategoryIndex, changeCategory }) => {
    return (
        <View style={styles.catListContainer}>
            <FlatList
                ref={flatListRef}
                horizontal={true}
                data={PillsCategories}
                keyExtractor={(item, i) => i.toString()}
                getItemLayout={(data, index) => (
                    { length: WIDTH, offset: (categoryListPadding * index), index: index }
                )}
                renderItem={
                    ({ item, index }) =>
                        <ItemPill
                            index={index}
                            item={item}
                            changeCategory={changeCategory}
                            selected={(selectedCategoryIndex === index)} />}
            />
        </View>
    )
}

export default HorizontalCategoryList

const styles = StyleSheet.create({
    catListContainer: {
        marginTop: 10,
    },
    itemTitle: {
        margin: 5,
        ...sharedStyles.fontPoppinsReg,
        fontSize: 15,
    },
    itemPill: {
        padding: 5,
    },
})