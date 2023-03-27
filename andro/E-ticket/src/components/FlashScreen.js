import { StyleSheet, Text, View, Image, StatusBar, ImageBackground } from 'react-native';
import React from 'react';
// import LinearGradient from "react-native-linear-gradient";
import { GlobalColors, GlobalFontSizes } from '../constants/Styles';
import { GlobalImages } from '../constants/Images';
import textStyles from '../constants/TextStyles';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function FlashScreen() {
    return (
        <ImageBackground source={GlobalImages.BG} style={{flex: 1}}>
                <View style={[styles.container]}>
                    <StatusBar hidden={true} />
                    <Icon name='ticket' size={GlobalFontSizes[40]} color={GlobalColors.BUTTON1} />
                </View>
            </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#121527'
    },
    imageZ: {
        position: 'absolute',
        bottom: 10,
        height: "10%",
        width: "40%"
    },
})