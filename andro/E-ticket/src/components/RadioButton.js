import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { GlobalColors, kDefaultPadding } from '../constants/Styles';
import textStyles from '../constants/TextStyles';

export default function RadioButton({
    dataRadio,
    title,
    style,
    formHorizontal = false,
    activeColor = GlobalColors.BGCOLOR2,
    inActiveColor = GlobalColors.TEXT_SECONDARY,
    onPress,
    initialValue = ''
}) {
    const [radioButton, setRadioButton] = useState(initialValue)

    const onPressHandler = value => {
        setRadioButton(value)
        onPress(value)
    }

    return (
        <View style={[{ marginTop: kDefaultPadding }, style]}>
            <Text style={[textStyles.text13, { color: GlobalColors.TEXT_SECONDARY }]}>{title}</Text>
            <View style={{ flexDirection: formHorizontal ? 'row' : 'column' }}>
                {dataRadio.map((data, key) => {
                    return (
                        <TouchableOpacity
                            style={{ flexDirection: 'row', marginRight: kDefaultPadding, alignItems: 'center' }}
                            onPress={() => onPressHandler(data.value)}
                            disabled={radioButton == data.value ? true : false}
                            key={"rdbtn1_" + key}
                        >
                            {radioButton == data.value ?
                                <View style={[styles.buttonOuter, { borderColor: activeColor }]}>
                                    <View style={[styles.buttonInner, { backgroundColor: activeColor }]} />
                                </View>
                                :
                                <View style={[styles.buttonOuter, { borderColor: inActiveColor }]} />
                            }
                            <Text style={textStyles.text13}>{data.label}</Text>
                        </TouchableOpacity>
                    )
                })}
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    buttonOuter: {
        width: 20,
        height: 20,
        borderRadius: 20 / 2,
        borderWidth: 20 / 7,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 7,
        marginVertical: 3
    },
    buttonInner: {
        width: 10,
        height: 10,
        borderRadius: 10 / 2,
    },
})