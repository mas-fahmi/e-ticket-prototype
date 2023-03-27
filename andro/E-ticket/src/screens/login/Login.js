import { StyleSheet, View, ScrollView, StatusBar, Image } from 'react-native';
import React from 'react';
import { ContainerView } from '../../components';
import { GlobalColors, GlobalFontSizes, GlobalHeights, GlobalWidths, kDefaultPadding } from '../../constants/Styles';
import FormLogin from './FormLogin';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Login() {
    return (
        <ContainerView>
            <ScrollView>
                <StatusBar hidden={true} />
                <View style={{ flex: 1 }}>
                    <View style={styles.parentLogo}>
                        <Icon name='ticket' size={GlobalFontSizes[40]} color={GlobalColors.BUTTON1} />
                    </View>
                    <View style={styles.parentForm}>
                        <FormLogin />
                    </View>
                </View>
            </ScrollView>
        </ContainerView>
    )            
}

const styles = StyleSheet.create({
    parentLogo: {
        height: GlobalHeights[40],
        paddingTop: GlobalHeights[2],
        alignItems: 'center',
        justifyContent: 'center'
    },
    parentForm: {
        height: GlobalHeights[60],
        width: GlobalWidths[100],
        borderTopLeftRadius: GlobalHeights[5],
        borderTopRightRadius: GlobalHeights[5],
        paddingHorizontal: kDefaultPadding,
        paddingVertical: GlobalHeights[5],
        backgroundColor: 'white'
    }
})