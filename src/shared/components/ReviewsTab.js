import React from 'react'
import { View, ScrollView, StyleSheet } from 'react-native';
import colors from '../colors';
import { Body, Left, Text, List, ListItem, Right, Thumbnail } from 'native-base';
const ReviewsTab = () => {
    return (
        <ScrollView style={styles.scrollview} contentContainerStyle={styles.contentContainerStyle} >
            <List>
                <ListItem avatar>
                    <Left>
                        <Thumbnail source={{ uri: "https://i.pravatar.cc/300?img=60" }} />
                    </Left>
                    <Body>
                        <Text style={styles.name}>AB. Harry</Text>
                        <Text note>Doing what you like will always keep you happy . .</Text>
                    </Body>
                    <Right>
                        <Text note>yesterday</Text>
                    </Right>
                </ListItem>
                <ListItem avatar>
                    <Left>
                        <Thumbnail source={{ uri: "https://i.pravatar.cc/300?img=43" }} />
                    </Left>
                    <Body>
                        <Text style={styles.name}>Kathrein K.</Text>
                        <Text note>Doing what you like will always keep you happy . .</Text>
                    </Body>
                    <Right>
                        <Text note>2 days ago</Text>
                    </Right>
                </ListItem>
                <ListItem avatar>
                    <Left>
                        <Thumbnail source={{ uri: "https://i.pravatar.cc/300?img=11" }} />
                    </Left>
                    <Body>
                        <Text style={styles.name}>Garrix.</Text>
                        <Text note>Doing what you like will always keep you happy . .</Text>
                    </Body>
                    <Right>
                        <Text note>an month ago</Text>
                    </Right>
                </ListItem>
                <ListItem avatar>
                    <Left>
                        <Thumbnail source={{ uri: "https://i.pravatar.cc/302" }} />
                    </Left>
                    <Body>
                        <Text style={styles.name}>Unknown</Text>
                        <Text note>Doing what you like will always keep you happy . .</Text>
                    </Body>
                    <Right>
                        <Text note>an month ago</Text>
                    </Right>
                </ListItem>
            </List>
        </ScrollView>
    )
}

export default ReviewsTab

const styles = StyleSheet.create({
  name: {
    fontSize: 12,
    fontWeight: 'bold',
    color: colors.text_secondary,
  },
  contentContainerStyle: {
    marginTop: 20,
  },
  scrollview: {
    flex: 1,
  },
})