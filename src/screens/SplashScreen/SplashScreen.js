import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, Animated, ActivityIndicator, Dimensions } from 'react-native';
import Logo from '../../assets/svgs/Logo.svg';
import colors from '../../shared/colors';
import { sharedStyles } from '../../shared/styles';
import LottieView from 'lottie-react-native';
import { AppName } from '../../shared/contants';
const WIDTH = Dimensions.get('window').width;
const SplashScreen = ({ onSplashFinished }) => {
    const [animatedValue] = useState(new Animated.Value(0));
    useEffect(() => {
        let timeout = null;
        Animated.spring(animatedValue, {
            toValue: 1,
            friction: 5,
            useNativeDriver: true
        }).start(() => {
            timeout = setTimeout(() => {
                onSplashFinished()
            }, 2000)
        });
        return () => timeout;
    }, []);

    const opacity = animatedValue.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 1],
    })
    const scale = animatedValue.interpolate({
        inputRange: [0, 1],
        outputRange: [4, 1],
    })
    return (
        <Animated.View style={[styles.container, { opacity, transform: [{ scale: scale }] }]}>
            <Logo width="150" height="150" />
            <Text style={styles.title}>{AppName}</Text>
            <LottieView autoPlay style={styles.lottiePlayer} source={require('../../assets/lottiefiles/loading.json')} />
        </Animated.View>
    )
}

export default SplashScreen;

const styles = StyleSheet.create({
    lottiePlayer: {
        width: WIDTH,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 50,
        color: colors.primary,
        marginTop: 20,
        ...sharedStyles.fontAlexBrush
    }
})
