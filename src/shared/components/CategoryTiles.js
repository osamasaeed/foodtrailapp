import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { softButtonsHeight } from '../styles';
import CategoryTile from './CategoryTile';

const CategoryTiles = ({ listItems, onPressItem }) => {
    return (
        <View style={styles.categoryTiles}>
            {listItems.map((item, index) => (
                <CategoryTile
                    key={index}
                    source={item.image}
                    title={item.title}
                    onPress={() => onPressItem(item, index)} />
            ))}
        </View>
    )
}

export default CategoryTiles

const styles = StyleSheet.create({
  categoryTiles: {
    justifyContent: "center",
    flexDirection: 'row',
    flexWrap: "wrap",
    marginBottom: softButtonsHeight,
  },
})