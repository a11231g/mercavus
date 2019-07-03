import React, {Component} from 'react';
import {createAppContainer, createSwitchNavigator, createStackNavigator} from 'react-navigation';
import {
    Splash,
    Intro,
    Products,
} from '../screens';


const productNavigation = createStackNavigator({
    Product: {
        screen: Products,
        navigationOptions: () => ({headerTitle: 'Products'})

    },
}, {gesturesEnabled: true,});



const NavigationStack = createSwitchNavigator({
    Splash: {
        screen: Splash,
    },
    Intro: {
       screen: Intro
    },
    Products: {
        screen: productNavigation
    },
}, {gesturesEnabled: true,});
export default createAppContainer(NavigationStack);

