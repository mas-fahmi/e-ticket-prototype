import { Image, View, StyleSheet, Text } from 'react-native';
import React from 'react';
import GradientView from './GradientView';
import { GlobalImages } from '../constants/Images';
import { GlobalColors, GlobalFont } from '../constants/Styles';

export default function ProfileImage({ size }) {
    const sizeBadge = size / 3
    return (
        <View style={{ width: size, height: size }}>
            <Image
                style={{
                    width: size,
                    height: size,
                    borderRadius: size / 2,
                    borderWidth: size <= 35 ? 1 : 3,
                    borderColor: "#ffffff"
                }}
                source={GlobalImages.IMG_ACCOUNTDEFAULT}
            />
            <GradientView
                style={[styles.container, { width: sizeBadge, height: sizeBadge, borderRadius: sizeBadge / 2 }]}
                colors={[GlobalColors.BGCOLOR2, GlobalColors.BUTTON1]}
            >
                <Text style={[styles.text, { fontSize: sizeBadge - 8 }]}>m</Text>
            </GradientView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        borderColor: 'white',
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        fontFamily: GlobalFont.Gotham.bold,
        color: '#ffffff'
    }
})