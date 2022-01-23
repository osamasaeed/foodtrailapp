import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import colors from '../colors';
import { ListItem } from 'native-base';

const Note = ({ text }) => {
    return (
        <ListItem >
            <Text style={styles.noteText}>{text}</Text>
        </ListItem>
    )
}

export default Note

const styles = StyleSheet.create({
  noteText: {
    fontStyle: "italic",
    color: colors.text_secondary,
  },
})