import { StyleSheet, Text, View, Pressable } from 'react-native';
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import RNDateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';
import textStyles from '../constants/TextStyles';
import { GlobalColors, GlobalFontSizes, kDefaultPadding } from '../constants/Styles';

export default function InputDate({
    title,
    onDateChange = () => { },
    formatDate = "DD MMMM YYYY",
    minDate = new Date(),
    maxDate = null
}) {
    const [date, setDate] = useState(new Date())
    const [textDate, setTextDate] = useState('')
    const [show, setShow] = useState(false);
    const propsRNDate = {}
    if (maxDate != null) propsRNDate.maximumDate = maxDate

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate
        setShow(false)
        if (event.type === 'set') {
            setDate(currentDate)
            setTextDate(moment.parseZone(selectedDate).local().format(formatDate))
            onDateChange(selectedDate)
        }
    };

    return (
        <View style={[{ marginTop: kDefaultPadding, flex: 1 }]}>
            <Text
                style={{
                    ...textStyles.text13,
                    color: GlobalColors.GREY_BORDER,
                    marginBottom: 0
                }}
            >
                {title}
            </Text>
            <Pressable style={styles.inputContainer} onPress={() => setShow(true)}>
                <Text style={{ ...textStyles.text13, flex: 1, marginRight: 6 }}>{textDate}</Text>
                <Icon name="calendar-alt" size={GlobalFontSizes[20]} color={GlobalColors.GREY_BORDER} />
            </Pressable>
            {show && (
                <RNDateTimePicker
                    testID="dateTimePicker"
                    value={date}
                    mode='date'
                    onChange={onChange}
                    minimumDate={minDate}
                    {...propsRNDate}
                />
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        height: 40,
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: GlobalColors.GREY_BORDER,
        borderWidth: 1,
        borderRadius: 6,
        paddingHorizontal: 6
    }
})