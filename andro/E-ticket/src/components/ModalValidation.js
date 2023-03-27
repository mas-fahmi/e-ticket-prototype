import { StyleSheet, Text, View, Modal, Image } from 'react-native';
import React from 'react';
import LinearGradient from "react-native-linear-gradient";
import moment from 'moment';
import { GlobalColors, GlobalWidths, kDefaultPadding } from '../constants/Styles';
import { GlobalImages } from '../constants/Images';
import ButtonText from './ButtonText';
import textStyles from '../constants/TextStyles';

export default function ModalValidation({
    showModal = false,
    onRequestClose,
    message,
    showDate = false,
    onPressSubmitOk,
    textSubmitOk = "OK"
}) {
    return (
        <Modal
            transparent={true}
            animationType={'fade'}
            visible={showModal}
            onRequestClose={onRequestClose}
            statusBarTranslucent
        >
            <View style={styles.container}>
                <View style={styles.formModal}>
                    <LinearGradient
                        style={styles.imageContainer}
                        colors={[GlobalColors.BGCOLOR2, GlobalColors.BGCOLOR3]}
                        start={{ x: 0.5, y: 0.1 }}
                    >
                        <Image style={styles.image} source={GlobalImages.LG_TELPRO} />
                    </LinearGradient>
                    <Text style={[textStyles.textMd13, styles.message]}>{message}</Text>
                    {showDate && <Text style={[textStyles.text10, styles.labelDate]}>{moment().format("DD MMMM YYYY, HH:mm:ss")}</Text>}
                    <View style={{ flexDirection: 'row', justifyContent: 'center', paddingHorizontal: 10 }}>
                        <ButtonText onPress={onPressSubmitOk} styleButton={{ width: '100%' }}>
                            {textSubmitOk}
                        </ButtonText>
                    </View>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0, 0, 0, .6)'
    },
    formModal: {
        width: GlobalWidths[90],
        borderRadius: 12,
        backgroundColor: GlobalColors.BGCOLOR1
    },
    imageContainer: {
        height: 75,
        backgroundColor: GlobalColors.BGCOLOR2,
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12,
        alignItems: 'center',
        justifyContent: 'center'
    },
    image: {
        resizeMode: "center",
        width: '100%',
        height: '80%'
    },
    message: {
        paddingTop: kDefaultPadding,
        paddingBottom: 10,
        paddingHorizontal: kDefaultPadding
    },
    labelDate: {
        margin: 10,
        marginBottom: 0,
        textAlign: 'right'
    }
})