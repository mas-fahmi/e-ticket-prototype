import { StyleSheet, View } from 'react-native';
import React from 'react';
import ImageCarousel from './ImageCarousel';

export default function Carousel({ data, autoPlay }) {
    return (
        <View style={styles.container}>
            <ImageCarousel data={data} autoPlay={autoPlay} pagination={true} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})