import React, {Component} from 'react';
import { View, ImageBackground, Image,Alert } from 'react-native';

import { Container, Button, Text, Item, Input, Icon } from "native-base";
import Modal from 'react-native-modal';

import NewUser from '../NewUser';
import Activation from '../Activation';

import styles from "./styles";

const loginBackground = require("../../../assets/loginBg.png");
const logoImage = require('../../../assets/logo.png');

export default class Login extends Component {

    constructor(props) {
        super(props);
        this.modalControl = this.modalControl.bind(this);
        this.state = {
            visibleModal: null
        };
    }

    modalControl(e) {
        this.setState({visibleModal: e});
    }

    
    render() {
        return (
            <Container>
                <ImageBackground
                    source={loginBackground}
                    style={styles.imageContainer}>

                    <View style={{alignItems:'center',flex:2}}>
                        <Image 
                            style={styles.logo}
                            resizeMode='contain'
                            source={logoImage}/>
                    </View>

                    <View style={styles.loginBox}>
                        <Item  style={styles.input} rounded>
                            <Input placeholder='Kullanıcı Adı' 
                                placeholderTextColor='#fff'  
                                style={styles.inputText}/>
                        </Item>
                        <Item  style={styles.input} rounded>
                            <Input placeholder='Şifre' 
                                secureTextEntry 
                                placeholderTextColor='#fff' 
                                style={styles.inputText}/>
                        </Item>
                        <Text style={styles.text}>
                            Şifremi Unuttum? 
                        </Text>
                    </View>


                    <View style={{flex:1}}>
                        <Button 
                            rounded 
                            info 
                            style={styles.buttonLogin}
                            onPress={() => this.props.navigation.navigate('Main')}>
                            <Text style={{
                                fontSize: 15,fontFamily: 'Varela Round Regular'}}>
                                Giriş Yap
                            </Text>
                        </Button>
                    </View>


                    <View style={styles.footer}>
                        <Text style={styles.text}>
                            Henüz kaydolmadınız mı?
                        </Text>
                        <Text style={styles.text}>
                            Kayıt olmak çok kolay ve hızlıdır.
                        </Text>
                        <Button 
                            rounded 
                            danger 
                            style={styles.buttonUye}
                            onPress={() => this.setState({visibleModal: 1})}>
                            <Text style={{
                                fontSize: 15,fontFamily:'Varela Round Regular'}}>
                                Üye Ol!
                            </Text>
                        </Button>
                    </View>
                </ImageBackground>



                <Modal 
                    isVisible={this.state.visibleModal === 1}
                    style={styles.modalContent}>
                    <NewUser
                        modalControl={this.modalControl}
                    />
                </Modal>



                <Modal 
                    isVisible={this.state.visibleModal === 2}
                    style={styles.modalContent}>
                    <Activation
                        modalControl={this.modalControl}
                    />
                </Modal>
            </Container>
        );
    }
}