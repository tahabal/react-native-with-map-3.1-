import React, { Component } from 'react';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';

export default class Main extends Component {

    render() {
        return(
            <Header>
                <Left>
                    <Button
                        transparent
                        onPress={() => this.props.navigation.openDrawer()}
                    >
                        <Icon name="ios-menu" />
                    </Button>
                </Left>
                <Body />
                <Right />
            </Header>
        );
    }
}