import { Button, Container, Content, Form, Input, Item, Label } from 'native-base'
import React from 'react'
import { View, Text, ImageBackground, ScrollView, StyleSheet } from 'react-native'
import { addressImage } from '../../shared/staticAssets';
const AddressPopup = () => {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.banner}>
                <ImageBackground
                    style={styles.imageBG} source={addressImage} />
            </View>
            <Form>
                <Item stackedLabel>
                    <Label>Address Title</Label>
                    <Input />
                </Item>
                <Item stackedLabel >
                    <Label>Address Line 1</Label>
                    <Input />
                </Item>
                <Item stackedLabel >
                    <Label>Address Line 2</Label>
                    <Input />
                </Item>
                <Item stackedLabel >
                    <Label>City</Label>
                    <Input />
                </Item>
                <Item stackedLabel >
                    <Label>State/Province</Label>
                    <Input />
                </Item>
                <Button block style={styles.submit} >
                    <Text style={styles.submitText}>Submit</Text>
                </Button>
            </Form>
        </ScrollView>
    )
}

export default AddressPopup;

const styles = StyleSheet.create({
    container: {
        paddingBottom: 60
    },
    banner: {
        height: 300,
        width: "100%"
    },
    imageBG: {
        width: '100%',
        flex: 1,
    },
    submit: {
        borderRadius: 5,
        backgroundColor: colors.primary,
        margin: 20,
        marginTop: 40
    },
    submitText: {
        color: colors.background_primary,
        fontWeight: 'bold'
    }
})
