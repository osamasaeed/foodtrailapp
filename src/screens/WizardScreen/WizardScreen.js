import React from 'react';
import { StyleSheet } from 'react-native';
import colors from '../../shared/colors';
import Swiper from 'react-native-swiper';
import { Slide1, Slide2, Slide3, Slide4, Slide5, Slide6 } from './Slides';


const WizardScreen = ({ navigation }) => {
    const onSkip = () => {
        navigation.navigate('RegisterScreen');
    }
    const onIndexChanged = (index) => {
        // index of slide
    }
    return (
        <Swiper 
            
            onIndexChanged={onIndexChanged} 
            style={styles.wrapper} 
            loadMinimal={true} 
            paginationStyle={styles.paginationStyle} 
            autoplay={false} loop={false} 
            dotColor={colors.text_secondary} 
            activeDotStyle={styles.activeDotStyle} 
            activeDotColor={colors.primary}
            
            >

            <Slide1 onSkipPress={onSkip} />
            <Slide2 onSkipPress={onSkip} />
            <Slide3 onSkipPress={onSkip} />
            <Slide4 onSkipPress={onSkip} />
            <Slide5 onSkipPress={onSkip} />
            <Slide6 onSkipPress={onSkip} />
        </Swiper>

    )
}

export default WizardScreen;



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
        flex: 1
    },
    paginationStyle: {
        top: '30%',
    },
    activeDotStyle: {
        width: 20,
        height: 4
    }
})