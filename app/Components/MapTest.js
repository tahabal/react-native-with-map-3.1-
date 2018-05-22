import React, { Component } from 'react';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { View, StyleSheet } from 'react-native';
import { Header, Left, Body, Title, Right } from 'native-base';
class MapTest extends Component {
    render () {
        return (
            <View style={styles.container}>
                <Header>
                    <Left />
                    <Body>
                        <Title>Header</Title>
                    </Body>
                    <Right />
                </Header>
                <MapView
                    provider={PROVIDER_GOOGLE}
                    style={styles.map}
                    region={{
                        latitude: 37.78825,
                        longitude: -122.4324,
                        latitudeDelta: 0.015,
                        longitudeDelta: 0.0121,
                    }}
                >
                    <MapView.Marker coordinate=
                        {
                            {
                                latitude: 37.78,
                                longitude: -11.43
                            }
                        }
                    title={"Deneme"}
                    description={"Test"}
                    />
                </MapView>
            </View>
        );   
    }
}
const styles = StyleSheet.create({
    container: { ... StyleSheet.absoluteFillObject },
    map: { ...StyleSheet.absoluteFillObject }
});
export default MapTest;