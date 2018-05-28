import React, { Component } from "react";
import { ImageBackground, View, StatusBar } from "react-native";
import { Container, Button, H3, Text } from "native-base";
import OneSignal from 'react-native-onesignal'; // Import package from node modules

import styles from "./styles";

const launchscreenLogo = require("../../../assets/slider.png");

export default class Home extends Component {
    componentWillMount() {
      	OneSignal.init("2fe0b6e5-bdd6-4d7c-b5c6-c54f35e1df9c");
      
        OneSignal.addEventListener('received', this.onReceived);
        OneSignal.addEventListener('opened', this.onOpened);
        OneSignal.addEventListener('ids', this.onIds);
    }

    componentWillUnmount() {
        OneSignal.removeEventListener('received', this.onReceived);
        OneSignal.removeEventListener('opened', this.onOpened);
        OneSignal.removeEventListener('ids', this.onIds);
    }

    onReceived(notification) {
        console.log("Notification received: ", notification);
    }

    onOpened(openResult) {
      console.log('Message: ', openResult.notification.payload.body);
      console.log('Data: ', openResult.notification.payload.additionalData);
      console.log('isActive: ', openResult.notification.isAppInFocus);
      console.log('openResult: ', openResult);
    }

    onIds(device) {
		console.log('Device info: ', device);
    }


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
                    
                    <ImageBackground source={launchscreenLogo} style={styles.logo} />
                    
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
                        <Button rounded info style={styles.mb15,{alignSelf: 'center',width:150,height:50,alignItems: 'center',justifyContent: 'center',}}
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
  