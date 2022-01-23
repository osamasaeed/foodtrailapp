import React from 'react'
import { View, Text, ScrollView, ImageBackground, StyleSheet } from 'react-native'
import colors from '../../shared/colors';
import CView from '../../shared/components/CView';
import MenuIcon from '../../shared/components/MenuIcon';
import { itemImage4 } from '../../shared/staticAssets';
import { sharedStyles } from '../../shared/styles';

const AboutScreen = (props) => {
    return (
        <CView header={false}>
            <MenuIcon fixed onPress={() => props.navigation.toggleDrawer()} style={styles.menuIcon} />
            <ScrollView contentContainerStyle={styles.container}>
                <ImageBackground source={itemImage4} style={styles.imageBG} >
                    <View style={styles.titleContainer}>
                        <Text style={styles.title}>We Know What? You Need</Text>
                    </View>
                </ImageBackground>
                <Text style={styles.ourMission} >OUR MISSION</Text>
                <Text style={styles.underLine} >______</Text>
                <Text style={styles.paras}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Text>
                <Text style={styles.paras}>
                    Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
                </Text>
            </ScrollView>
        </CView>
    )
}

export default AboutScreen;

const styles = StyleSheet.create({
    menuIcon: {
        color: colors.white
    },
    container: {
        justifyContent: "center",
        alignItems: "center"
    },
    imageBG: {
        flex: 1,
        width: '100%'
    },
    titleContainer: {
        flex: 1,
        height: 300,
        backgroundColor: "rgba(232,76,79,0.4)",
        justifyContent: "center",
        alignItems: "center"
    },
    title: {
        color: colors.white,
        fontSize: 40,
        textAlign: "center",
        padding: 20,
        ...sharedStyles.fontAkayaTeli
    },
    ourMission: {
        fontSize: 30,
        color: colors.text_primary,
        marginTop: -10,
        top: 30,
        ...sharedStyles.fontRedressed
    },
    underLine: {
        fontSize: 40,
        color: colors.secondary
    },
    paras: {
        paddingHorizontal: 20,
        textAlign: "justify",
        fontSize: 16,
        ...sharedStyles.fontPoppinsReg
    }
})