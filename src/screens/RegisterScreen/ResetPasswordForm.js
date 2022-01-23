import React from 'react'
import { View, Text, Image, ImageBackground, StyleSheet, TouchableOpacity } from 'react-native';
import Logo from '../../assets/svgs/Logo.svg';
import { backImg1, itemImage1 } from '../../shared/staticAssets';
import { Form, Icon, Input, Item, Label } from 'native-base';
import colors from '../../shared/colors';
import { sharedStyles } from '../../shared/styles';
import RoundButton from '../../shared/components/RoundButton';
import { Formik } from 'formik';
import { AppName, ForgotPasswordValidation, ResetPasswordValidation } from '../../shared/contants';
import CInput from '../../shared/components/CInput';


const ResetPasswordForm = ({ moveToIndex, onResetPassword }) => {

    return (
        <ImageBackground source={itemImage1} style={styles.container} imageStyle={styles.backgroundImageStyle} >
            <Image source={backImg1} style={styles.cornerImage} />
            <Logo width="150" height="150" />
            <Text style={styles.title}>{AppName}</Text>
            <Text style={styles.subTitle}>Reset Password</Text>
            <Formik
                initialValues={{ password: '' }}
                onSubmit={onResetPassword}
                validationSchema={ResetPasswordValidation}
            >
                {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
                    <Form style={styles.formStyle}>
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
                        <RoundButton title="Send" onPress={handleSubmit} style={styles.fbBtnStyle} textStyle={styles.fbBtnText} leftIcon={<Icon name='rocket-outline' style={styles.fbBtnIcon} />} />
                    </Form>
                )}
            </Formik>
            <TouchableOpacity style={styles.signUpLinkContainer} onPress={() => moveToIndex(0)}>
                <Text style={styles.bottomLink}>Do not have an account? <Text style={styles.signUpLink}> Sign Up</Text></Text>
            </TouchableOpacity>
        </ImageBackground>
    )
}

export default ResetPasswordForm;

const styles = StyleSheet.create({
  signUpLink: {
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
    inputStyle: {
        paddingHorizontal: 15,
        marginBottom: 20,
        borderRadius: 50,
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: colors.darkPrimary,
        backgroundColor: 'white',
        ...sharedStyles.boxShadow
    },
    textField: {
        letterSpacing: 2,
        ...sharedStyles.fontRedressed
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
        alignSelf: 'flex-end',
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
