import React from 'react'
import { Text, ImageBackground, ViewPropTypes, StyleSheet } from 'react-native'
import PropTypes from 'prop-types';
import colors from '../colors';
import MenuIcon from './MenuIcon';
import { itemImage4 } from '../staticAssets';
import { Body, Header, Left, Right, Title } from 'native-base';
// Custom Component
function CView({
    backgroundImageContainerStyle,
    backgroundImageStyle,
    header,
    navigation,
    headerTitle,
    children
}) {

    return (
        <ImageBackground
            source={itemImage4}
            style={backgroundImageContainerStyle}
            imageStyle={backgroundImageStyle}>
            {(header !== false) ? (
                <Header style={styles.headerStyle}
                    androidStatusBarColor={'transparent'} >
                    <Left>
                        <MenuIcon onPress={() => navigation.toggleDrawer()}
                            style={styles.menuIcon} />
                    </Left>
                    <Body>
                        <Title>{headerTitle}</Title>
                    </Body>
                    <Right />
                </Header>
            ) : null}
            {children}
        </ImageBackground>
    )
}
export default CView;

CView.defaultProps = {
    header: true,
    headerBackgroundColor: colors.primary,
    backgroundImageContainerStyle: {
        height: "100%",
        width: "100%"
    },
    backgroundImageStyle: {
        resizeMode: "cover",
        opacity: 0.1
    }
}

CView.propTypes = {
    header: PropTypes.bool,
    headerTitle: PropTypes.string,
    headerProps: PropTypes.object,
    headerStyle: ViewPropTypes.style,
    backgroundImageContainerStyle: ViewPropTypes.style,
    backgroundImageStyle: PropTypes.object,
};
const styles = StyleSheet.create({
  menuIcon: {
    color: colors.white,
  },
  headerStyle: {
    marginTop: 30,
    backgroundColor: colors.primary,
  },
})