import React from 'react'
import { ScrollView, StyleSheet } from 'react-native'
import { View, Text } from 'react-native'
import { sharedStyles } from '../styles'

const DetailsTab = () => {
    return (
        <ScrollView style={styles.scrollview} contentContainerStyle={styles.contentContainerStyle} >
            <Text style={styles.text}>
                Sed nunc mauris, tempor at felis sit amet, imperdiet luctus est. Phasellus dapibus augue ac felis finibus tincidunt. Nulla finibus tincidunt velit, sit amet dignissim orci aliquam non. Proin congue, quam sed feugiat imperdiet, mauris risus semper diam, et consequat risus nibh quis tellus. Aenean ac accumsan quam. Morbi in bibendum turpis. Sed fermentum nulla nec leo porttitor dignissim. Maecenas vestibulum, nisi sed rutrum laoreet, ligula sem hendrerit velit, in pulvinar tortor velit non purus.
            </Text>
        </ScrollView>
    )
}

export default DetailsTab

const styles = StyleSheet.create({
  text: {
    fontSize: 14,
    fontFamily: sharedStyles.fontPoppinsReg.fontFamily,
    color: colors.text_primary,
    textAlign: 'justify',
  },
  contentContainerStyle: {
    marginTop: 20,
  },
  scrollview: {
    flex: 1,
  },
})