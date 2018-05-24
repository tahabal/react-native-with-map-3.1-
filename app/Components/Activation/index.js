import React, { Component } from 'react';
import { View } from 'react-native';
import {  Button, Text, Item, Input, Icon } from 'native-base';

import styles from "./styles";

export default class Activation extends Component {

    render() {
        var modalControl = this.props.modalControl;
        return(
            <View style={{ flex: 1 }}>
                <Text style={styles.modalHeader}>Aktivasyon</Text>
                <Text style={styles.text}>
                    Lütfen 4 haneli SMS kodunuzu giriniz.
                </Text>
                <Item  style={styles.inputNew} rounded>
                    <Input placeholder='Onay Kodu'
                        secureTextEntry
                        placeholderTextColor='#333' 
                        style={styles.inputText}/>
                </Item>
                <Button rounded success style={styles.button}
                    onPress={() => modalControl(null)}>
                    <Text style={{
                        fontSize: 15,}}>
                        Onayla
                    </Text>
                </Button>
                <Text style={styles.text}>
                    Aktivasyon kodunu tekrar yolla.
                </Text>
            </View>
        );
    }
}