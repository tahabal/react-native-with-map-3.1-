
import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';

import Home from './app/Components/Home';
import Login from './app/Components/Login';
import MapTest from './app/Components/MapTest.js';
import Main from './app/Components/Main';

const AppNavigator = createStackNavigator(
    {
        Home: { screen: Home },
        Login: { screen: Login },
        Map: { screen: MapTest },
        Main: { screen: Main }
    },
    {
        initialRouteName: 'Home',
        headerMode: 'none'
    }
);


export default() => <AppNavigator />;


