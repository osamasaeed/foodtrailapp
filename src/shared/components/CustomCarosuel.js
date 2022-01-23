import * as React from 'react';
import {
  View,
  ImageBackground,
  StyleSheet
} from 'react-native';
import Swiper from 'react-native-swiper';
import colors from '../colors';
// Custom Component
const CustomCarousel = ({ style, paginationStyle, activeDotStyle, slides }) => {
  return (
    <View style={[styles.container, style]}>
      <Swiper style={styles.wrapper} paginationStyle={[paginationStyle]} activeDotStyle={[activeDotStyle]} autoplay={true} loop={true} activeDotColor={colors.primary}>
        {slides.map((item, index) => (
          <View key={index} style={styles.slide}>
            <ImageBackground
              style={styles.slideBackgroundImage}
              source={item.image}
            >
            </ImageBackground>
          </View>
        ))}
      </Swiper>
    </View>
  )
}

export default CustomCarousel

const styles = StyleSheet.create({
  container: {
    height: 300
  },
  wrapper: {
    height: 300
  },
  slide: {
    height: 300
  },
  slideBackgroundImage: {
    width: '100%',
    flex: 1
  }
})

