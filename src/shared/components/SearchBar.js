import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Icon, Input, Item } from 'native-base';
import colors from '../colors';

const SearchBar = ({ onChangeText, value, onClose }) => {
    return (
        <Item style={styles.itemStyle} bordered>
            <Icon name="search-outline" style={styles.searchIcon} />
            <Input onChangeText={onChangeText} value={value} />
            <Icon name="close-outline" onPress={onClose} style={styles.closeIcon} />
        </Item>
    )
}

export default SearchBar

const styles = StyleSheet.create({
    closeIcon: {
        color: colors.darkPrimary,
    },
    searchIcon: {
        color: colors.darkPrimary,
    },
    itemStyle: {
        paddingHorizontal: 10
    }
})