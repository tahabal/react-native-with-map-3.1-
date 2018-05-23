
import React, { Component } from 'react';
import { View } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import Home from './app/Components/Home';
import Login from './app/Components/Login';

const AppNavigator = createStackNavigator(
    {
        Home: { screen: Home },
        Login: { screen: Login }
    },
    {
        initialRouteName: 'Home',
        headerMode: 'none'
    }
);


export default() => <AppNavigator />;


