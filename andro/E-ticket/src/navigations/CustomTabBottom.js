import { StyleSheet, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome'
import { GlobalColors, GlobalFontSizes } from '../constants/Styles';
import { GlobalImages } from '../constants/Images';
import { GradientView } from '../components';

const CustomTabBottom = ({ onPress, selected }) => {

    if (selected) {
        return (
            <TouchableOpacity onPress={onPress} >
                <GradientView style={styles.container}>
                    <Icon name='Home' size={GlobalFontSizes[30]} color={GlobalColors.BGCOLOR1} />
                    {/* <Image source={GlobalImages.IC_TELPRO} style={styles.image} resizeMode='contain' /> */}
                </GradientView>
            </TouchableOpacity>
        )
    }
    else {
        return (
            <TouchableOpacity onPress={onPress} >
                <GradientView style={styles.container} colors={["#ffffff", GlobalColors.BUTTON1]}>
                    <Icon name='ticket' size={GlobalFontSizes[30]} color={GlobalColors.TEXT_PRIMARY} />
                </GradientView>
            </TouchableOpacity>
        )
    }
}

export default CustomTabBottom

const styles = StyleSheet.create({
    container: {
        bottom: 20,
        width: 65,
        height: 65,
        borderRadius: 65 / 2,
        alignItems: 'center',
        justifyContent: 'center'
    },
    gradientView: {
        width: 65,
        height: 65,
        borderRadius: 65 / 2,
        alignItems: 'center',
        justifyContent: 'center'
    }
})