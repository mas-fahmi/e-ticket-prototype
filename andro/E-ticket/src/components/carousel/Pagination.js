import { StyleSheet, View } from 'react-native';
import React from 'react';
import Animated, {
    useAnimatedStyle,
    interpolate,
    Extrapolate,
} from 'react-native-reanimated';
import { GlobalColors } from '../../constants/Styles';

export default function Pagination({ data, x, size }) {
    return (
        <View style={styles.paginationContainer}>
            {data.map((_, i) => {
                // eslint-disable-next-line react-hooks/rules-of-hooks
                const animatedDotStyle = useAnimatedStyle(() => {
                    const widthAnimation = interpolate(
                        x.value,
                        [(i - 1) * size, i * size, (i + 1) * size],
                        [10, 14, 10],
                        Extrapolate.CLAMP,
                    );
                    const heightAnimation = interpolate(
                        x.value,
                        [(i - 1) * size, i * size, (i + 1) * size],
                        [10, 14, 10],
                        Extrapolate.CLAMP,
                    );
                    const radiusAnimation = interpolate(
                        x.value,
                        [(i - 1) * size, i * size, (i + 1) * size],
                        [5, 7, 5],
                        Extrapolate.CLAMP,
                    );
                    const opacityAnimation = interpolate(
                        x.value,
                        [(i - 1) * size, i * size, (i + 1) * size],
                        [0.2, 1, 0.2],
                        Extrapolate.CLAMP,
                    );
                    return {
                        width: widthAnimation,
                        height: heightAnimation,
                        opacity: opacityAnimation,
                        borderRadius: radiusAnimation
                    };
                });
                return (
                    <Animated.View style={[styles.dots, animatedDotStyle]} key={i} />
                );
            })}
        </View>
    );
}

const styles = StyleSheet.create({
    paginationContainer: {
        flexDirection: 'row',
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
    dots: {
        height: 10,
        backgroundColor: GlobalColors.BGCOLOR2,
        marginHorizontal: 10,
        borderRadius: 5,
    },
});