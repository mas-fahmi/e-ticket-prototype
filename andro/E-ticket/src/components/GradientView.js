import React from 'react';
import LinearGradient from "react-native-linear-gradient";
import { GlobalColors } from '../constants/Styles';

export default function GradientView({
    children,
    style,
    colors = [GlobalColors.BGCOLOR2, GlobalColors.BGCOLOR3],
    start = { x: 0.5, y: 0 },
    end = null,
    locations = null
}) {
    let thisProps = {}
    if (end !== null) thisProps.end = end
    if (locations !== null) thisProps.locations = locations

    return (
        <LinearGradient
            style={style}
            colors={colors}
            start={start}
            {...thisProps}
        >
            {children}
        </LinearGradient>
    )
}