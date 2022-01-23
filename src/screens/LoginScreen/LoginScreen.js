import React, { useEffect, useState } from 'react'
import { View, Text, TouchableOpacity, Dimensions, Animated, StyleSheet } from 'react-native'
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Form, Input, Item, Label } from 'native-base';
import { connect } from 'react-redux';
import { AccessToken, LoginManager, GraphRequest, GraphRequestManager } from 'react-native-fbsdk';
import colors from '../../shared/colors'
import LinkButton from '../../shared/components/LinkButton';
import RoundButton from '../../shared/components/RoundButton';
import BackgroundSVG from './BackgroundSVG';
import { AppName } from '../../shared/contants';
import { userActions } from '../../config/redux';
import { sharedStyles } from '../../shared/styles';

const { width, height } = Dimensions.get('window');

const LoginScreen = (props) => {
    const [animatedValue, setAnimatedValue] = useState(0)
    const [Width, setWidth] = useState(width);
    const [Height, setHeight] = useState(height);
    const onTapSignIn = () => {
        setAnimatedValue(1);
    }
    const onTapClose = () => {
        setAnimatedValue(0);
    }
    const onSignInWithEmail = (user) => {
        console.log("onSignInWithEmail",
            user
        )
        props.login(user);
    }
    const onSignInWithFB = (user) => {
        console.log("onSignInWithFB",
            user
        )
        props.login(user);
    }
    const handleOnLayout = event => {
        setWidth(event.nativeEvent.layout.width);
        setHeight(event.nativeEvent.layout.height);
    };
    return (
        <View style={styles.mainContainer}
            onLayout={handleOnLayout}
        >
            <AnimatedForm value={animatedValue} Width={Width} Height={Height} onTapSignIn={onSignInWithEmail} />
            <AnimatedBackground value={animatedValue} Width={Width} Height={Height} />
            <AnimatedSgnInButton value={animatedValue} Width={Width} Height={Height} onTapSignInWithFB={onSignInWithFB} onTapNewAccount={onTapSignIn} onTapSignIn={onTapSignIn} />
            <AnimatedCloseButton value={animatedValue} Width={Width} Height={Height} onTapClose={onTapClose} />
        </View>
    )
}


const AnimatedForm = ({ value, Width, Height, onTapSignIn }) => {
    const [animatedValue] = useState(new Animated.Value(value));
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordInput, setPasswordInput] = useState(null);
    useEffect(() => {
        Animated.timing(animatedValue, {
            toValue: value,
            duration: 1000,
            useNativeDriver: true
        }).start()
    }, [value]);
    const handleRef = (input) => {
        if (input)
            setPasswordInput(input._root)
    }
    const translateY = animatedValue.interpolate({
        inputRange: [0, 1],
        outputRange: [-270, 0],
    })
    const opacity = animatedValue.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 1],
    })
    return (
        <Animated.View
            style={[styles.formStyle, {
                width: Width,
                transform: [{ translateY }],
                opacity
            }]}>
            <Form style={styles.formInner}>
                <Item stackedLabel>
                    <Label>Email</Label>
                    <Input onChangeText={(text) => setEmail(text)} keyboardType="email-address"
                        returnKeyType="next"
                        onSubmitEditing={() => passwordInput.focus()}
                        blurOnSubmit={false}
                    />
                </Item>
                <Item stackedLabel>
                    <Label>Password</Label>
                    <Input secureTextEntry={true}
                        onChangeText={(text) => setPassword(text)}
                        returnKeyType="send"
                        onSubmitEditing={() => onTapSignIn(email, password)}
                        ref={(input) => handleRef(input)}
                    />
                </Item>
                <Item style={styles.signInBtn}>
                    <RoundButton title="SIGN IN" onPress={() => onTapSignIn({ email, password, type: "email" })} />
                </Item>
            </Form>
        </Animated.View>
    )
}

const AnimatedBackground = ({ value, Width, Height }) => {
    const [animatedValue] = useState(new Animated.Value(value));
    useEffect(() => {
        Animated.timing(animatedValue, {
            toValue: value,
            duration: 1000,
            useNativeDriver: true
        }).start()
    }, [value]);

    const translateY = animatedValue.interpolate({
        inputRange: [0, 1],
        outputRange: [0, -400],
    })
    return (
        <Animated.View style={[styles.mainFlap, { transform: [{ translateY }] }]}   >
            <Text style={[styles.title, sharedStyles.fontAkayaTeli, sharedStyles.boxShadow]}>{AppName}
                {'\n'} <Text style={[styles.desc, sharedStyles.fontPoppinsReg]}>A Delicious Food Resort</Text>
            </Text>
            <BackgroundSVG Width={Width} Height={Height} />
        </Animated.View>
    )
}

const AnimatedSgnInButton = ({ value, Width, Height, onTapSignIn, onTapSignInWithFB, onTapNewAccount }) => {
    const [animatedValue] = useState(new Animated.Value(value));
    useEffect(() => {
        Animated.timing(animatedValue, {
            toValue: value,
            duration: 1000,
            useNativeDriver: true
        }).start()
    }, [value]);



    const translateY = animatedValue.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 220],
    })
    const opacity = animatedValue.interpolate({
        inputRange: [0, 1],
        outputRange: [1, 0],
    })
    const onTapFBLogin = () => {
        LoginManager.logInWithPermissions(["public_profile", "email"]).then(
            (result) => {
                if (result.isCancelled) {
                    console.log("Login cancelled");
                } else {
                    AccessToken.getCurrentAccessToken().then(
                        (data) => {
                            //Create response callback.
                            const _responseInfoCallback = (error, result) => {
                                if (error) {
                                    console.log('Error fetching data: ' + error.toString());
                                } else {
                                    const { id, name, first_name, last_name, email } = result;
                                    const user = {
                                        type: "fblogin",
                                        fbid: id,
                                        name,
                                        first_name,
                                        last_name,
                                        email,
                                        password: data.accessToken.toString() // token
                                    }
                                    onTapSignInWithFB(user);
                                }
                            }
                            // Create a graph request asking for user information with a callback to handle the response.
                            const infoRequest = new GraphRequest(
                                '/me?fields=id,name,first_name,last_name,email&token=' + data.accessToken.toString(),
                                null,
                                _responseInfoCallback,
                            );
                            // Start the graph request.
                            new GraphRequestManager().addRequest(infoRequest).start();
                            // console.log(
                            //     "Login success with permissions: " +
                            //     result.grantedPermissions.toString()
                            // );
                        })
                }
            },
            (error) => {
                console.log("Login fail with error: " + error);
            }
        );
    }
    return (
        <Animated.View style={[styles.mainBtns, {
            width: Width,
            transform: [{ translateY }],
            opacity
        }]}>
            <RoundButton title="SIGN IN" onPress={onTapSignIn} />
            <RoundButton title="SIGN IN WITH FACEBOOK" onPress={onTapFBLogin} style={styles.fbBtn} textStyle={styles.fbBtnText} />
            <LinkButton title="NEW ACCOUNT?" onPress={onTapNewAccount} textStyle={styles.newAccount} />
        </Animated.View>
    )
}

const AnimatedCloseButton = ({ value, Width, Height, onTapClose }) => {
    const [animatedValue] = useState(new Animated.Value(value));
    useEffect(() => {
        Animated.timing(animatedValue, {
            toValue: value,
            duration: 1000,
            useNativeDriver: true
        }).start()
    }, [value]);

    const translateY = animatedValue.interpolate({
        inputRange: [0, 1],
        outputRange: [0, -328],
    })
    const opacity = animatedValue.interpolate({
        inputRange: [0, 0.4],
        outputRange: [0, 1],
    })
    const rotate = animatedValue.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '90deg'],
    })
    return (
        <Animated.View style={[styles.closeBtnContainer, {
            transform: [{ translateY }, { rotate }],
            opacity
        }]}>
            <TouchableOpacity
                onPress={onTapClose}
                style={styles.closeBtn}>
                <MaterialIcon name="close" size={24} color="black" />
            </TouchableOpacity>
        </Animated.View>
    )
}

const mapDispatchToProps = {
    login: userActions.login
};
export default connect(null, mapDispatchToProps)(LoginScreen)

const styles = StyleSheet.create({
    newAccount: {
        color: colors.text_tertiary,
    },
    fbBtnText: {
        color: colors.text_tertiary,
    },
    fbBtn: {
        backgroundColor: colors.fb_primary,
    },
    closeBtn: {
        backgroundColor: "white",
        borderRadius: 50,
        padding: 10,
    },
    closeBtnContainer: {
        position: "absolute",
        bottom: 0,
        borderRadius: 50,
        alignSelf: "center",
        justifyContent: "center",
        alignItems: "center",
        ...sharedStyles.boxShadow,
    },
    mainBtns: {
        justifyContent: "center",
        alignItems: "center",
        position: 'absolute',
        bottom: 20,
    },
    desc: {
        fontSize: 25,
        fontWeight: 'bold',
    },
    title: {
        position: 'absolute',
        textAlign: 'center',
        color: 'white',
        fontSize: 50,
        zIndex: 1,
    },
    mainFlap: {
        position: 'absolute',
        top: 0,
        justifyContent: 'center',
        alignItems: 'center',
    },
    signInBtn: {
        justifyContent: 'center',
    },
    formInner: {
        width: 350,
    },
    formStyle: {
        position: 'absolute',
        bottom: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    mainContainer: {
        flex: 1,
    },
})