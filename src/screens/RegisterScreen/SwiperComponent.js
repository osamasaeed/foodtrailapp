import React, { useRef } from 'react'
import { View, Text, StyleSheet } from 'react-native';
import Swiper from 'react-native-swiper';
import ForgotPasswordForm from './ForgotPasswordForm';
import RegisterForm from './RegisterForm';
import ResetPasswordForm from './ResetPasswordForm';
import SignInForm from './SignInForm';

const SwiperComponent = ({ onRegisterSubmit, onLoginSubmit, onFBLogin, onFingerTap, onForgotPassword, onResetPassword }) => {

    const swiper = useRef(null);

    const moveToIndex = (index) => {
        swiper.current.scrollTo(index);
    }

    return (
        <Swiper ref={swiper} style={styles.wrapper} showsPagination={false} loop={false} index={1}>

            <RegisterForm
                moveToIndex={moveToIndex}
                onRegisterSubmit={onRegisterSubmit} />

            <SignInForm
                moveToIndex={moveToIndex}
                onLoginSubmit={onLoginSubmit}
                onFBLogin={onFBLogin}
                onFingerTap={onFingerTap}
            />

            <ForgotPasswordForm
                moveToIndex={moveToIndex}
                onForgotPassword={onForgotPassword} />

            <ResetPasswordForm
                moveToIndex={moveToIndex}
                onResetPassword={onResetPassword} />

        </Swiper>
    )
}

export default SwiperComponent;


const styles = StyleSheet.create({
    container: {
        height: '100%'
    },
    wrapper: {
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    slide: {
        height: '100%'
    },
    slideBackgroundImage: {
        width: '100%',
        height: '60%',
        flex: 1
    }
})
