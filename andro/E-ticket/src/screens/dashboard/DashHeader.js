import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { ButtonText, ProfileImage } from '../../components';
import { GlobalColors, GlobalWidths, kDefaultPadding } from '../../constants/Styles';
import { fetchLogout } from '../../redux/actions/userAction';
import { useDispatch, useSelector } from 'react-redux';
import textStyles from '../../constants/TextStyles';

export default function DashHeader() {
    const dispatch = useDispatch()

    const logout = () => {
        dispatch(fetchLogout())
    }
    return (
        <View style={styles.header}>
            <ProfileImage size={GlobalWidths[15]} />
            <View style={{ flex: 1, marginLeft: 10 }}>
                <Text style={[textStyles.textMd13, { color: GlobalColors.TEXT_SECONDARY }]}>Welcome to Ticketing Apps</Text>
                <Text style={textStyles.textBold20}>Hekall</Text>
            </View>
            <TouchableOpacity style={styles.setting} onPress={logout}>
                <Icon name='sign-out' size={GlobalWidths[10] / 2} color={GlobalColors.BUTTON1} />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: kDefaultPadding
    },
    setting: {
        width: GlobalWidths[10],
        height: GlobalWidths[10],
        borderRadius: GlobalWidths[10] / 2,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center'
    }
})