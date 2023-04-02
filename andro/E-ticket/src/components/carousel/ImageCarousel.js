import { StyleSheet, Text, View, Image, useWindowDimensions } from 'react-native';
import React, { useState, useEffect, useRef } from 'react';
import Animated, {
    useSharedValue,
    useAnimatedStyle,
    useAnimatedScrollHandler,
    interpolate,
    useAnimatedRef
} from 'react-native-reanimated';
import textStyles from '../../constants/TextStyles';
import Pagination from './Pagination';

export default function ImageCarousel({ data, autoPlay, pagination }) {
    const { width } = useWindowDimensions();
    const SIZE = width * 0.7;
    const SPACER = (width - SIZE) / 2;
    const x = useSharedValue(0);
    const offSet = useSharedValue(0);
    const onScroll = useAnimatedScrollHandler({
        onScroll: event => {
            x.value = event.contentOffset.x;
        },
    });

    //Ref
    const scrollViewRef = useAnimatedRef(null);
    const interval = useRef();

    //State
    const [newData] = useState([
        { key: 'spacer-left' },
        ...data,
        { key: 'spacer-right' }
    ])
    const [isAutoPlay, setIsAutoPlay] = useState(autoPlay);

    //Effetc
    useEffect(() => {
        if (isAutoPlay === true) {
            let _offSet = offSet.value;
            interval.current = setInterval(() => {
                if (_offSet >= Math.floor(SIZE * (data.length - 1) - 10)) {
                    _offSet = 0;
                } else {
                    _offSet = Math.floor(_offSet + SIZE);
                }
                scrollViewRef.current.scrollTo({ x: _offSet, y: 0 });
            }, 2000);
        } else {
            clearInterval(interval.current);
        }
    }, [SIZE, SPACER, isAutoPlay, data.length, offSet.value, scrollViewRef]);

    return (
        <View>
            <Animated.ScrollView
                ref={scrollViewRef}
                onScroll={onScroll}
                onScrollBeginDrag={() => {
                    setIsAutoPlay(false);
                }}
                onMomentumScrollEnd={e => {
                    offSet.value = e.nativeEvent.contentOffset.x;
                    setIsAutoPlay(autoPlay);
                }}
                horizontal
                showsHorizontalScrollIndicator={false}
                bounces={false}
                scrollEventThrottle={16}
                snapToInterval={SIZE}
                decelerationRate="fast"
            >
                {newData.map((item, index) => {
                    const style = useAnimatedStyle(() => {
                        const scale = interpolate(
                            x.value,
                            [(index - 2) * SIZE, (index - 1) * SIZE, index * SIZE],
                            [0.8, 1, 0.8],
                        );
                        return {
                            transform: [{ scale }],
                        };
                    })
                    if (!item.image) {
                        return <View style={{ width: SPACER }} key={index} />
                    }
                    return (
                        <View style={{ width: SIZE }} key={index}>
                            <Animated.View style={[styles.imageContainer, style]}>
                                <Image source={item.image} style={styles.image} />
                                <View style={styles.descContainer}>
                                    <Text style={[textStyles.textMd12, { color: '#ffffff', textAlign: 'justify' }]} numberOfLines={3}>{item.description}</Text>
                                </View>
                            </Animated.View>
                        </View>
                    )
                })}
            </Animated.ScrollView>
            {pagination && <Pagination data={data} x={x} size={SIZE} />}
        </View>
    )
}

const styles = StyleSheet.create({
    imageContainer: {
        borderRadius: 12,
        height: 175,
        overflow: 'hidden'
    },
    image: {
        width: '100%',
        height: undefined,
        aspectRatio: 1
    },
    descContainer: {
        position: 'absolute',
        bottom: 0,
        padding: 10,
        width: '100%',
        height: 60,
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        borderBottomLeftRadius: 12,
        borderBottomRightRadius: 12
    }
})