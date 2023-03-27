import { Text, View } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { GlobalColors } from '../constants/Styles';
import textStyles from '../constants/TextStyles';

export default function DataNotFound() {
    return (
        <View style={{ alignItems: 'center', paddingVertical: 15 }}>
            <Icon name='hand-left' size={70} color={GlobalColors.BUTTON1} />
            <Text style={[textStyles.textMd13, { color: GlobalColors.BUTTON1 }]}>Data tidak ditemukan!</Text>
        </View>
    )
}