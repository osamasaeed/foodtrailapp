import React, { useState } from 'react'
import { View, Text, Image, ImageBackground, StyleSheet, TouchableOpacity } from 'react-native';
import Logo from '../../assets/svgs/Logo.svg';
import { backImg1, itemImage1 } from '../../shared/staticAssets';
import { Form, Icon, Input, Item, Label } from 'native-base';
import colors from '../../shared/colors';
import { sharedStyles } from '../../shared/styles';
import RoundButton from '../../shared/components/RoundButton';
import { Formik } from 'formik';
import { AppName, RegisterFormValidation } from '../../shared/contants';
import CInput from '../../shared/components/CInput';


const RegisterForm = ({ moveToIndex, onRegisterSubmit }) => {
    const [data, setData] = useState({
        name: '',
        email: '',
        password: ''
    });

    return (
        <ImageBackground source={itemImage1} style={styles.container} imageStyle={styles.backgroundImageStyle} >
            <Image source={backImg1} style={styles.cornerImage} />
            <Logo width="150" height="150" />
            <Text style={styles.title}>{AppName}</Text>
            <Text style={styles.subTitle}>Register</Text>
            <Formik
                initialValues={data}
                onSubmit={onRegisterSubmit}
                validationSchema={RegisterFormValidation}
            >
                {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
                    <Form style={styles.formStyle}>
                        <CInput
                            iconName="person-circle-outline"
                            placeholder="Name"
                            onChangeText={handleChange('name')}
                            onBlur={handleBlur('name')}
                            value={values.name}
                            errorIconName='close-circle'
                            errorMsg={errors.name}
                        />
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
                        <RoundButton title="Register" onPress={handleSubmit} style={styles.fbBtnStyle} textStyle={styles.fbBtnText} leftIcon={<Icon name='rocket-outline' style={styles.fbBtnIcon} />} />
                    </Form>
                )}
            </Formik>
            <TouchableOpacity style={styles.signUpLinkContainer} onPress={() => moveToIndex(1)}>
                <Text style={styles.bottomLink}>Already have an account?<Text style={styles.signInLink}> Sign In</Text></Text>
            </TouchableOpacity>
        </ImageBackground>
    )
}

export default RegisterForm

const styles = StyleSheet.create({
  signInLink: {
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
    fbBtnStyle: {
        backgroundColor: colors.darkPrimary,
        padding: 10,
        marginTop: 30,
        width: '100%'
    },
    fbBtnText: {
        color: colors.white,
        fontWeight: 'normal',
        fontSize: 20,
        letterSpacing: 2,
        ...sharedStyles.fontRedressed

    },
    fbBtnIcon: {
        marginLeft: 5,
        color: colors.white,
        fontSize: 20
    },
    signUpLinkContainer: {
        padding: 10,
    },
    bottomLink: {
        color: colors.text_secondary,
        fontSize: 18,
        ...sharedStyles.fontRedressed
    }
})
