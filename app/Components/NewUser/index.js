import React, { Component } from 'react';
import { View } from 'react-native';
import {  Button, Text, Item, Input, Icon } from 'native-base';

import styles from './styles';

export default class NewUser extends Component {

    render() {
        var modalControl = this.props.modalControl;
        return(
            <View style={styles.subBox}>
                <Text style={styles.modalHeader}>Yeni Üyelik</Text>
                <Item  style={styles.inputNew} rounded>
                    <Input placeholder='Kullanıcı Adı'
                        secureTextEntry
                        placeholderTextColor='#333' 
                        style={styles.inputText}/>
                </Item>
                <Item  style={styles.inputNew} rounded>
                    <Input placeholder='Email' 
                        secureTextEntry
                        placeholderTextColor='#333' 
                        style={styles.inputText}/>
                </Item>
                <Item  style={styles.inputNew} rounded>
                    <Input placeholder='Cep Telefonu' 
                        secureTextEntry
                        placeholderTextColor='#333' 
                        style={styles.inputText}/>
                </Item>
                <Item  style={styles.inputNew} rounded success>
                    <Input placeholder='Şifre' 
                        secureTextEntry
                        placeholderTextColor='#333' 
                        style={styles.inputText}/>
                    <Icon name='checkmark-circle' />
                </Item>
                <Button rounded success style={styles.button}
                    onPress={() => modalControl(2)}>
                    <Text style={{
                        fontSize: 15,}}>
                            Kayıt Ol
                    </Text>
                </Button>
            </View>
        );
    }
}

