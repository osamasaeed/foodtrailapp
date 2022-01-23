import React from 'react'
import { ScrollView, StyleSheet } from 'react-native'
import CustomCarosuel from '../../shared/components/CustomCarosuel';
import SubLabel from '../../shared/components/SubLabel';
import NotificationIcon from '../../shared/components/NotificationIcon';
import MenuIcon from '../../shared/components/MenuIcon';
import TrendingCategory from '../../shared/components/TrendingCategory';
import FeaturedItems from '../../shared/components/FeaturedItems';
import CategoryTiles from '../../shared/components/CategoryTiles';
import { Categories, Dishes, FeaturedTags, PopularDishes } from '../../shared/data';
import { SafeAreaView } from 'react-native-safe-area-context';
import colors from '../../shared/colors';
import { connect } from 'react-redux';
import { userActions } from '../../config/redux';

const MainScreen = (props) => {

    return (
        <SafeAreaView edges={['left', 'right']}>
            <ScrollView style={styles.container}>
                {/* Image Slider component for show showing dishes image in carosuel manner  */}
                <CustomCarosuel slides={Dishes} />

                {/* Sidebar/drawer open/close button */}
                <MenuIcon fixed onPress={() => props.navigation.toggleDrawer()} />

                {/* Notification button, passes badge true will show a small dot on bell icon */}
                <NotificationIcon badge={props.notifications.length ? true : false} onPress={() => props.navigation.navigate("Notification")} />
                {/* Few Featured categories titles with icons */}
                <TrendingCategory listItems={FeaturedTags} onPressItem={(data) => props.navigation.navigate("Category", { category: data.category })} />

                {/* Label with icon for the popular items and `see all` button on the right  */}
                <SubLabel title="Popular" titleIcon="bullhorn-outline" viewAllText="See all" onPress={() => { }} />
                {/* List component to show some of the popular items. onPressItem return the item on which user tapped
                    onPressHeart is will return item,index and item.isFavorite value of the item which is tapped.
                */}
                <FeaturedItems listItems={PopularDishes} onPressItem={(item) => props.navigation.navigate('ItemDetail', { item })} onPressHeart={(item, index) => { }} />


                {/* Label with icon for the list of categories tiles */}
                <SubLabel title="Category" titleIcon="tag" viewAllText="See all" onPress={() => { }} />
                {/* It is the list component for the category tiles */}
                {/* Here we are navigating to the Category page and passing index as parameter will manage the selected category when page shows up */}
                <CategoryTiles listItems={Categories} onPressItem={(data, index) => props.navigation.navigate("Category", { index: index })} />


            </ScrollView>
        </SafeAreaView>
    )
}


const mapStateToProps = (props) => {
    return {
        notifications: props.global.notifications,
    };
};

const mapDispatchToProps = {
    setNotifications: userActions.setNotifications
};

export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.cardsBackground
    }
})