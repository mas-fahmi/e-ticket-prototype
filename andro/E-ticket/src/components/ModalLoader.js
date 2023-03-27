import { View, Modal, StyleSheet } from 'react-native';
import React from 'react';
import { GlobalFontSizes, GlobalColors } from '../constants/Styles';
import Loading from './Loading';

export default function ModalLoader({ isLoading, frame = true, type = 1, color = GlobalColors.BGCOLOR2 }) {
    return (
        <Modal
            transparent={true}
            animationType={'none'}
            visible={isLoading}
            onRequestClose={() => { console.log('close modal') }}
            statusBarTranslucent
        >
            <View style={styles.container}>
                <View style={frame && styles.frame}>
                    <Loading isLoad={isLoading} size={GlobalFontSizes[40]} type={type} color={color} />
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgba(0, 0, 0, .3)',
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    frame: {
        width: 75,
        height: 75,
        borderRadius: 10,
        backgroundColor: "#ffffff",
        alignItems: 'center',
        justifyContent: 'center'
    }
})