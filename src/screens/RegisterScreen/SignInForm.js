import React from 'react'
import { View, Text, Image, ImageBackground, StyleSheet, TouchableOpacityBase, TouchableOpacity } from 'react-native'
import Logo from '../../assets/svgs/Logo.svg';
import { backImg1, itemImage1 } from '../../shared/staticAssets';
import { Form, Icon, Input, Item, Label } from 'native-base';
import colors from '../../shared/colors';
import { sharedStyles } from '../../shared/styles';
import RoundButton from '../../shared/components/RoundButton';
import FingerPrintButton from '../../shared/components/FingerPrintButton';
import { useState } from 'react';
import { Formik } from 'formik';
import { AppName, LoginFormValidtion } from '../../shared/contants';
import CInput from '../../shared/components/CInput';
const SignInForm = ({ moveToIndex, onLoginSubmit, onFingerTap, onFBLogin }) => {
    const [data, setData] = useState({
        email: '',
        password: ''
    });

    return (
        <ImageBackground source={itemImage1} style={styles.container} imageStyle={styles.backgroundImageStyle} >
            <Image source={backImg1} style={styles.cornerImage} />
            <Logo width="150" height="150" />
            <Text style={styles.title}>{AppName}</Text>
            <Text style={styles.subTitle}>Login</Text>
            <Formik
                initialValues={data}
                onSubmit={onLoginSubmit}
                validationSchema={LoginFormValidtion}
            >
                {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
                    <Form style={styles.formStyle}>
                        <CInput
                            iconName="mail-outline"
                            placeholder="Email"
                            onChangeText={handleChange('email')}
                            onBlur={handleBlur('email')}
                            value={values.email}
                            errorIconName='close-circle'
                            errorMsg={errors.email}
                            keyboardType="email-address"
                        />
                        <CInput
                            iconName="lock-closed-outline"
                            placeholder="Password"
                            onChangeText={handleChange('password')}
                            onBlur={handleBlur('password')}
                            value={values.password}
                            errorIconName='close-circle'
                            errorMsg={errors.password}

                            secureTextEntry={true}
                        />
                        <View style={styles.loginBtnContainer}>
                            <FingerPrintButton onPress={onFingerTap} />
                            <TouchableOpacity onPress={handleSubmit} style={styles.loginBtn}>
                                <Text style={styles.loginBtnText}>LOGIN</Text>
                                <Icon name="arrow-forward-outline" style={styles.loginBtnIcon} />
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity style={[styles.signUpLinkContainer, { alignSelf: 'flex-end' }]} onPress={() => moveToIndex(2)}>
                            <Text style={styles.forgotPassword}>Forgot Password?</Text>
                        </TouchableOpacity>
                        <RoundButton title="SIGN IN WITH FACEBOOK" onPress={onFBLogin} style={styles.fbBtnStyle} textStyle={styles.fbBtnText} />
                    </Form>
                )}
            </Formik>
            <TouchableOpacity style={styles.signUpLinkContainer} onPress={() => moveToIndex(0)}>
                <Text style={styles.bottomLink}>Don’t have an account? <Text style={styles.SignUpLink}> Sign Up</Text></Text>
            </TouchableOpacity>
        </ImageBackground>
    )
}

export default SignInForm

const styles = StyleSheet.create({
  SignUpLink: {
    color: colors.darkPrimary,
    fontWeight: 'bold',
  },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    backgroundImageStyle: {
        opacity: 0.05,
        resizeMode: "cover"
    },
    cornerImage: {
        position: 'absolute',
        top: 0, left: 0
    },
    title: {
        fontSize: 50,
        color: colors.primary,
        marginTop: 20,
        ...sharedStyles.fontAlexBrush
    },
    subTitle: {
        fontSize: 30,
        color: colors.text_primary,
        ...sharedStyles.fontAlexBrush
    },
    formStyle: {
        width: '80%',
        marginVertical: 20
    },
    loginBtnContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginTop: 30
    },
    loginBtn: {
        flexDirection: 'row',
        backgroundColor: colors.darkPrimary,
        width: 100,
        borderRadius: 50,
        paddingHorizontal: 10,
        paddingVertical: 5,
        alignItems: 'center',
        justifyContent: 'space-between',
        ...sharedStyles.boxShadow
    },
    loginBtnText: {
        color: colors.white,
        ...sharedStyles.fontRedressed
    },
    loginBtnIcon: {
        fontSize: 20,

        color: 'white'
    },
    fbBtnStyle: {
        backgroundColor: colors.fb_primary,
        marginTop: 20,
        padding: 10,
        width: '100%'
    },
    fbBtnText: {
        color: colors.white
    },
    signUpLinkContainer: {
        padding: 10,
    },
    forgotPassword: {
        color: colors.text_tertiary,
        textDecorationLine: 'underline',
        marginTop: 10,
        fontSize: 16,
        ...sharedStyles.fontRedressed
    },
    bottomLink: {
        color: colors.text_secondary,
        fontSize: 18,
        ...sharedStyles.fontRedressed
    }
})