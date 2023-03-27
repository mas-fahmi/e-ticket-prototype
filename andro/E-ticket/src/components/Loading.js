import React from 'react';
import { View } from 'react-native';
import Spinner from 'react-native-spinkit';
import { GlobalColors, GlobalFontSizes } from '../constants/Styles';

export default function Loading({
    isLoad = false,
    size = GlobalFontSizes[20],
    color = GlobalColors.BGCOLOR2,
    type
}) {

    const typesSpinner = [
        'CircleFlip',       // 0
        'Bounce',           // 1
        'Wave',             // 2
        'WanderingCubes',   // 3
        'Pulse',            // 4
        'ChasingDots',      // 5
        'ThreeBounce',      // 6
        'Circle',           // 7
        '9CubeGrid',        // 8
        'WordPress',        // 9 IOS Only
        'FadingCircle',     // 10
        'FadingCircleAlt',  // 11
        'Arc',              // 12 IOS Only
        'ArcAlt'            // 13 IOS Only
    ]

    return (
        <View style={{ alignSelf: 'center' }}>
            <Spinner isVisible={isLoad} size={size} type={typesSpinner[type]} color={color} />
        </View>
    )
}