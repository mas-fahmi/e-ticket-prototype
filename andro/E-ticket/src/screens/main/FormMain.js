import { Text, View } from 'react-native'
import React, { useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native';
import { GlobalColors } from '../../constants/Styles';
import { GlobalColors, GlobalFontSizes, GlobalHeights, GlobalWidths, kDefaultPadding } from '../../constants/Styles';
import textStyles from '../../constants/TextStyles';
import { ContainerView } from '../../components';
import { ScrollView } from 'react-native-gesture-handler';
import { Icon } from 'react-native-vector-icons/Icon';

export default function FormMain() {
    return (
        <ContainerView>
            <ScrollView>
                <Statusbar hidden={true}/>
                <View style={{flex: 1}}>
                    <View style={styles.parentForm}>
                        <FormMain/>
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