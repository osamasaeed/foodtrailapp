import React from 'react'
import { View, Text, useWindowDimensions, StyleSheet } from 'react-native';
import colors from '../colors';
import { TabView, TabBar, SceneMap } from 'react-native-tab-view';
import { useState } from 'react';

// Custom Tab View Component
const CTabView = ({ children }) => {
    const layout = useWindowDimensions();

    const [index, setIndex] = useState(0);

    const scenesObj = {};
    children.forEach((child, index) => {
        scenesObj[child.key] = () => child;
    })

    const renderScene = SceneMap(scenesObj);

    const [routes] = useState(children.map(child => ({ key: child.key, title: child.props.title })))

    return (
        <TabView
            style={styles.tabView}
            renderTabBar={props => <TabBar
                {...props}
                indicatorContainerStyle={styles.indicatorContainerStyle}
                inactiveColor={colors.text_secondary}
                activeColor={colors.primary}
                indicatorStyle={styles.indicatorStyle}
                labelStyle={styles.labelStyle}
            />}
            navigationState={{ index, routes }}
            renderScene={renderScene}
            onIndexChange={setIndex}

            initialLayout={{ width: layout.width }}
        />
    )
}

export default CTabView

const styles = StyleSheet.create({
  labelStyle: {
    fontWeight: 'bold',
  },
  indicatorStyle: {
    backgroundColor: colors.primary,
  },
  indicatorContainerStyle: {
    backgroundColor: 'white',
  },
  tabView: {
    marginTop: 20,
  },
})