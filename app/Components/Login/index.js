import React, {Component} from 'react';
import { View, ImageBackground } from 'react-native';

import { Container, Button, H3, Text } from "native-base";
import Modal from 'react-native-modal';

import styles from "./styles";

const loginBackground = require("../../../assets/loginbg.png");

export default class Login extends Component {
    state = {
        isModalVisible: false
      };
    
    _toggleModal = () =>
        this.setState({ isModalVisible: !this.state.isModalVisible });

    render() {
        return (
            <Container>
                <Modal isVisible={this.state.isModalVisible}>
                    <View style={{ flex: 1 }}>
                        <Text>Hello!</Text>
                        <Button rounded info style={styles.mb15,{alignSelf: 'center',width:200,height:50,alignItems: 'center',justifyContent: 'center',}}
                                onPress={() => this._toggleModal()}>
                                <Text style={{
                                    fontSize: 15,}}>
                                    Lets Go!
                                </Text>
                            </Button>
                        <Text>Hide me!</Text>
                    </View>
                </Modal>



                <ImageBackground
                    source={loginBackground}
                    style={styles.imageContainer}>

                </ImageBackground>
                <View style={{flex: 1, backgroundColor: '#fff'}}>
                    <Text style={styles.text}>
                        Stuff
                    </Text>
                    <Button 
                    rounded 
                    info 
                    style={styles.mb15,{alignSelf:'center',width:200,height:50,alignItems: 'center',justifyContent: 'center',}}
                    onPress={() => this._toggleModal()}>
                        <Text style={{
                            fontSize: 15,}}>
                            Lets Go!
                        </Text>
                </Button>
                </View>
            </Container>
        );
    }
}