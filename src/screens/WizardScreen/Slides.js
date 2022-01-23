import React, { useEffect, useState } from 'react';
import { View, Text, ImageBackground, StyleSheet, useWindowDimensions } from 'react-native';
import colors from '../../shared/colors';
import LinearGradient from 'react-native-linear-gradient';
import { restImg1, restImg2, restImg3, restImg4, restImg5, restImg6 } from '../../shared/staticAssets';
import Svg1 from '../../assets/svgs/svg1.svg';
import Svg2 from '../../assets/svgs/svg2.svg';
import Svg3 from '../../assets/svgs/svg3.svg';
import Svg4 from '../../assets/svgs/svg4.svg';
import Svg5 from '../../assets/svgs/svg5.svg';
import Svg6 from '../../assets/svgs/svg6.svg';
import FabButton from '../../shared/components/FabButton';
import { sharedStyles } from '../../shared/styles';

export const Slide1 = ({ onSkipPress }) => {

    return (
        <View style={styles.slide}>
            <FabButton onPress={onSkipPress} style={styles.fabButton} backgroundColor="transparent" title="SKIP >>" />
            <LinearGradient colors={["transparent", "black"]} style={styles.linGrad} />
            <ImageBackground
                style={styles.slideBackgroundImage}
                source={restImg3}
            />
            <Text style={styles.titleHeading}>Lorem Ipsum</Text>
            <Text style={styles.details}>
                Vestibulum cursus diam at dapibus consequat. Maecenas non nisi posuere, cursus dolor vel, tincidunt neque.
            </Text>
            <Svg4 width="100%" height={200} style={styles.svg} />
        </View>
    )
}

export const Slide2 = ({ onSkipPress }) => {
    return (
        <View style={styles.slide}>
            <FabButton onPress={onSkipPress} style={styles.fabButton} backgroundColor="transparent" title="SKIP >>" />
            <LinearGradient colors={["transparent", "black"]} style={styles.linGrad} />
            <ImageBackground
                style={styles.slideBackgroundImage}
                source={restImg6}
            />
            <Text style={[styles.titleHeading]}>
                Duis at gravida dui
            </Text>
            <Text style={styles.details}>
                Integer auctor velit ut justo viverra hendrerit. Vestibulum augue nibh, tempor gravida porta ac, porta sit amet augue
            </Text>
            <Svg2 width="100%" height={200} style={styles.svg} />
        </View>
    )
}

export const Slide3 = ({ onSkipPress }) => {
    return (
        <View style={styles.slide}>
            <FabButton onPress={onSkipPress} style={styles.fabButton} backgroundColor="transparent" title="SKIP >>" />
            <LinearGradient colors={["transparent", "black"]} style={styles.linGrad} />
            <ImageBackground
                style={styles.slideBackgroundImage}
                source={restImg5}
            />
            <Text style={styles.titleHeading}>
                Phasellus
            </Text>
            <Text style={styles.details}>
                Aliquam rutrum euismod pulvinar. Proin blandit feugiat gravida.
            </Text>
            <Svg1 width="100%" height={200} style={styles.svg} />
        </View>
    )
}

export const Slide4 = ({ onSkipPress }) => {
    return (
        <View style={styles.slide}>
            <FabButton onPress={onSkipPress} style={styles.fabButton} backgroundColor="transparent" title="SKIP >>" />
            <LinearGradient colors={["transparent", "black"]} style={styles.linGrad} />
            <ImageBackground
                style={styles.slideBackgroundImage}
                source={restImg4}
            />
            <Text style={styles.titleHeading}>
                Nulla scelerisque
            </Text>
            <Text style={styles.details}>
                scelerisque pretium. Vestibulum ultricies vehicula sapien, sollicitudin rhoncus metus cursus eu. Duis dolor nibh, fringilla in tristique.
            </Text>
            <Svg6 width="100%" height={200} style={styles.svg} />
        </View>
    )
}

export const Slide5 = ({ onSkipPress }) => {
    return (
        <View style={styles.slide}>
            <FabButton onPress={onSkipPress} style={styles.fabButton} backgroundColor="transparent" title="SKIP >>" />
            <LinearGradient colors={["transparent", "black"]} style={styles.linGrad} />
            <ImageBackground
                style={styles.slideBackgroundImage}
                source={restImg1}
            />
            <Text style={styles.titleHeading}>
                Nam elementum
            </Text>
            <Text style={styles.details}>
                Donec bibendum est nisi, et pretium nisl vehicula at. Etiam ac gravida neque, in laoreet nisi. Integer molestie sem quis ex vestibulum fermentum.
            </Text>
            <Svg3 width="100%" height={200} style={styles.svg} />
        </View>
    )
}

export const Slide6 = ({ onSkipPress }) => {
    return (
        <View style={styles.slide}>
            <LinearGradient colors={["transparent", "black"]} style={styles.linGrad} />
            <ImageBackground
                style={styles.slideBackgroundImage}
                source={restImg2}
            />
            <Text style={styles.titleHeading}>
                Nam elementum
            </Text>
            <Text style={styles.details}>
                Donec bibendum est nisi, et pretium nisl vehicula at. Etiam ac gravida neque, in laoreet nisi. Integer molestie sem quis ex vestibulum fermentum.
            </Text>
            <FabButton onPress={onSkipPress} style={styles.getStartBtn} color={colors.primary} backgroundColor="transparent" title="Get Started" />
            <Svg5 width="100%" height={130} style={styles.svg} />
        </View>
    )
}











const styles = StyleSheet.create({
    container: {
        height: '100%'
    },
    wrapper: {
        backgroundColor: 'black',
        height: '100%'
    },
    slide: {
        height: '100%'
    },
    slideBackgroundImage: {
        width: '100%',
        height: '60%',
        justifyContent: 'center',
        flex: 1
    },
    fabButton: {
        top: 50,
        right: 20,
        alignSelf: 'flex-end',
    },
    linGrad: {
        flex: 1,
        position: 'absolute',
        width: '100%',
        height: '60%',
        zIndex: 2
    },
    titleHeading: {
        color: colors.white,
        fontSize: 40,
        textDecorationLine: 'underline',
        fontFamily: sharedStyles.fontRedressed.fontFamily,
        position: 'absolute',
        top: '30%',
        marginHorizontal: 20,
        zIndex: 2,
    },
    details: {
        color: colors.white,
        fontSize: 16,
        textTransform: 'capitalize',
        lineHeight: 30,
        letterSpacing: 5,
        position: 'absolute',
        top: '30%',
        marginTop: 80,
        marginHorizontal: 20,
        zIndex: 2,
    },
    getStartBtn: {
        top: '30%',
        marginTop: 300,
        borderWidth: 1,
        borderColor: colors.primary,
        elevation: 0,
        alignSelf: 'center',
        width: '80%',
    },
    svg: {
        position: 'absolute',
        bottom: 50,
        zIndex: 1,
        alignSelf: "center"
    }
})
