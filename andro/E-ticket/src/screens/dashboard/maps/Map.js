import { StyleSheet, StatusBar, View} from 'react-native';
import React, { Component } from 'react';
import MapView,{Marker} from 'react-native-maps';

export default function Map() {

    return (
        <View style={styles.wrapper}>
            <MapView style={styles.maps} initialRegion={{
                latitude:-6.9023946,
                longitude: 107.5363542,
                latitudeDelta: 0.009,
                longitudeDelta: 0.009,
            }}>
                <Marker coordinate={{latitude: -6.902367941774071, longitude: 107.53853216788912}}/>
            </MapView>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        ...StyleSheet.absoluteFillObject
    },
    maps: {
        ...StyleSheet.absoluteFillObject
    }
});