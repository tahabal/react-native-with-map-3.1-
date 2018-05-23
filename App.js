
import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';

import Home from './app/Components/Home';
import Login from './app/Components/Login';
import MapTest from './app/Components/MapTest.js';

const AppNavigator = createStackNavigator(
    {
        Home: { screen: Home },
        Login: { screen: Login },
        Map: { screen: MapTest }
    },
    {
        initialRouteName: 'Home',
        headerMode: 'none'
    }
);


export default() => <AppNavigator />;


