import React, { Component } from "react";
import { ImageBackground, View, StatusBar } from "react-native";
import { Container, Button, H3, Text } from "native-base";

import styles from "./styles";

const launchscreenLogo = require("../../../assets/slider.png");

export default class Home extends Component {
    state = {
        isModalVisible: false
      };
    
      _toggleModal = () =>
        this.setState({ isModalVisible: !this.state.isModalVisible });

    render() {
        return (
            <Container  style={{ backgroundColor: "#ffffff"}}>

                <StatusBar barStyle="light-content" />
                <ImageBackground style={styles.imageContainer}>
                    <View style={styles.headerText}>
                        <Text
                            style={{
                                color:'#44C3D4',
                                fontSize: 26,
                                textAlign:'center',
                            }}
                        >Welcome To AnadoluPASS</Text>
                    </View>
                    <View style={styles.slider}>
                        <ImageBackground source={launchscreenLogo} style={styles.logo} />
                    </View>
                    <View style={styles.sliderText}>
                        <Text
                            style={{
                                color:'#A4B2BF',
                                fontSize: 15,
                                textAlign:'center',
                            }}
                        >AnadoluPASS kartınız olmadan da karekod ile 
                        ödemelerinizi kolayca yapabilirsiniz
                        </Text>
                    </View>
                    <View style={styles.buttonContent}>
                        <Button rounded info style={styles.mb15,{alignSelf: 'center',width:200,height:50,alignItems: 'center',justifyContent: 'center',}}
                            onPress={() => this.props.navigation.navigate('Login')}>
                            <Text style={{
                                fontSize: 15,
                            }}>Giriş Yap</Text>
                        </Button>
                    </View>
                </ImageBackground>
            </Container>
        );
    }
}
  