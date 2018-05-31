
import React, { Component } from 'react';
import { Root } from 'native-base';
import { createStackNavigator, createDrawerNavigator } from 'react-navigation';



import Home from './app/Components/Home';
import Login from './app/Components/Login';
import MapTest from './app/Components/MapTest.js';
import Main from './app/Components/Main';
import SideBar from './app/Components/Sidebar';

const Drawer = createDrawerNavigator(
    {
        Home: { screen: Home },
        Main: { screen: Main },
        Login: { screen: Login },
        MapTest: { screen: MapTest }
    },
    {
        initialRouteName: 'Home',
        contentComponent: props => <SideBar {...props} />
    }
);

const AppNavigator = createStackNavigator(

    {
        Drawer: { screen: Drawer },
        Home: { screen: Home },
        Login: { screen: Login },
        Map: { screen: MapTest },
        Main: { screen: Main }
    },
    {
        initialRouteName: 'Drawer',
        headerMode: 'none'
    }
);


export default () => <Root><AppNavigator /></Root>;


