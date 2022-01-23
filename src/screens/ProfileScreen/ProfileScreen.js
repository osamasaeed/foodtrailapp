import React, { useState } from 'react'
import { Text, ImageBackground, Keyboard, StyleSheet } from 'react-native'
import { Form, Item, Input, Icon, Button } from 'native-base';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import colors from '../../shared/colors';
import { ScrollView } from 'react-native';
import { KeyboardAvoidingView } from 'react-native';
import Avatar from '../../shared/components/Avatar';
import MenuIcon from '../../shared/components/MenuIcon';
import { profileImage, itemImage4 } from '../../shared/staticAssets';

const EditAndSave = ({ ifTrue, onPress }) => ifTrue ? (
    <Button onPress={onPress} iconRight block style={styles.buttonStyle} >
        <Text style={styles.buttonTitle}>SAVE</Text>
        <Icon name='checkmark-done-outline' />
    </Button>
) : (
    <Button onPress={onPress} iconRight block style={styles.buttonStyle} >
        <Text style={styles.buttonTitle}>EDIT</Text>
        <Icon name='create-outline' />
    </Button>
);

const ProfileScreen = (props) => {
    const [avatarUri, setavatarUri] = useState(null)
    const [isEdit, setIsEdit] = useState(false);
    const changePassword = () => {
        alert("do Password change")
    }
    const ChangeAvatar = () => {
        launchCamera({
            mediaType: 'photo',
            cameraType: 'back'
        }, (res) => {
            if (res.assets) {
                setavatarUri(res.assets[0].uri);
            }
        });
    }
    return (
        <ScrollView contentContainerStyle={styles.scrollview}>
            <MenuIcon fixed onPress={() => props.navigation.toggleDrawer()} />
            <ImageBackground source={itemImage4}
                style={styles.profileImageBG}
                imageStyle={styles.imageStyle}
            />
            <Avatar style={styles.avatar} name="Osama S." source={avatarUri ? { uri: avatarUri } : profileImage} onPress={ChangeAvatar} />
            <KeyboardAvoidingView style={styles.KeyboardAvoidingView} >
                <Form>
                    <Item>
                        <Icon active name='person-outline' />
                        <Input placeholder='First Name' disabled={!isEdit} />
                    </Item>
                    <Item>
                        <Icon name='people-outline' />
                        <Input placeholder='Last Name' disabled={!isEdit} />
                    </Item>
                    <Item>
                        <Icon name='mail-outline' />
                        <Input placeholder='Email Address' disabled={!isEdit} />
                    </Item>
                    <Item>
                        <Icon name='call-outline' />
                        <Input placeholder='Phone Number' disabled={!isEdit} />
                    </Item>
                    {!isEdit &&
                        (<Item>
                            <Icon name='lock-closed-outline' />
                            <Input placeholder='***********' disabled />
                            <Icon active name='create-outline' onPress={changePassword} />
                        </Item>)}
                </Form>
            </KeyboardAvoidingView>
            <EditAndSave ifTrue={isEdit} onPress={() => setIsEdit(!isEdit)} />

        </ScrollView>
    );
}

export default ProfileScreen

const styles = StyleSheet.create({
  KeyboardAvoidingView: {
    flex: 1,
    width: "90%",
    justifyContent: "flex-end",
    marginBottom: 0,
  },
  avatar: {
    top: -50,
  },
  imageStyle: {
    borderBottomRightRadius: 200,
    borderBottomLeftRadius: 200,
  },
  profileImageBG: {
    width: "100%",
    flex: 1,
  },
  scrollview: {
    flex: 1,
    flexGrow: 1,
    paddingBottom: 50,
    alignItems: "center",
  },
  buttonTitle: {
    color: "white",
    margin: 10,
  },
  buttonStyle: {
    backgroundColor: colors.primary,
    marginTop: 30,
  },
})