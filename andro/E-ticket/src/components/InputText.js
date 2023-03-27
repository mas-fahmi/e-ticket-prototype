import { StyleSheet, Text, View, TextInput } from 'react-native';
import React from 'react';
import { GlobalFontSizes, GlobalColors, kDefaultPadding } from '../constants/Styles';
import Icon from 'react-native-vector-icons/Ionicons';
import textStyles from '../constants/TextStyles';

export default function InputText({
    fullBorder = false,
    title,
    rightIcon = '',
    onPressIcon = () => { },
    textInputConfig,
    style,
    multiline = false
}) {
    return (
        <View style={[{ marginTop: kDefaultPadding }, style]}>
            <Text style={[textStyles.textMd13, { color: GlobalColors.TEXT_SECONDARY }]}>{title}</Text>
            {multiline ?
                <TextInput
                    multiline={true}
                    numberOfLines={3}
                    style={[textStyles.textMd13, styles.multilineText]}
                    textAlignVertical="top"
                    {...textInputConfig}
                />
                :
                <View style={[styles.inputContainer, fullBorder ? styles.fullBorderInput : styles.bottomBorderInput]}>
                    <TextInput style={[textStyles.textMd13, styles.textInput]} {...textInputConfig} />
                    {rightIcon == '' ? null :
                        <Icon
                            name={rightIcon}
                            size={GlobalFontSizes[20]}
                            color={GlobalColors.TEXT_SECONDARY}
                            style={{ marginHorizontal: 10 }}
                            onPress={onPressIcon}
                        />
                    }
                </View>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        height: 40,
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: GlobalColors.TEXT_SECONDARY,
    },
    fullBorderInput: {
        borderWidth: 1,
        borderRadius: 6,
        paddingHorizontal: 6
    },
    bottomBorderInput: {
        borderBottomWidth: 1,
    },
    textInput: {
        flex: 1,
        padding: 0
    },
    multilineText: {
        borderWidth: 1,
        borderRadius: 6,
        paddingHorizontal: 6,
        borderColor: GlobalColors.TEXT_SECONDARY,
    }
})