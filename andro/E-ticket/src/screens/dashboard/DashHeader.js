import { StyleSheet, Text, View, TouchableOpacity, StatusBar } from 'react-native';
import React, { useEffect } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { ProfileImage, ContainerView, ModalLoader} from '../../components';
import { GlobalColors, GlobalHeights, GlobalWidths, kDefaultPadding } from '../../constants/Styles';
import { fetchLogout } from '../../redux/actions/userAction';
import { useDispatch, useSelector } from 'react-redux';
import textStyles from '../../constants/TextStyles';
import Dashboard from './Dashboard';

export default function DashHeader() {
    const dispatch = useDispatch()
    const { isLoading } = useSelector(state => state.user)

    const logout = () => {
        dispatch(fetchLogout())
    }
    return (
        <ContainerView>
            <ModalLoader isLoading={isLoading} />
                <StatusBar hidden={true} />
                    <View style={styles.header}>
                        <ProfileImage size={GlobalWidths[15]} />
                        <View style={{ flex: 1, marginLeft: 10}}>
                            <Text style={[textStyles.textMd14]}>Welcome to Ticketing Apps</Text>
                            <Text style={textStyles.textBold20}>Hekall</Text>
                        </View>
                        <TouchableOpacity style={styles.setting} onPress={logout}>
                            <Icon name='sign-out' size={GlobalWidths[10] / 2} color={GlobalColors.BUTTON1} />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.Dashboard}>
                        <Dashboard />
                    </View>
            </ContainerView>
        
    )
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: kDefaultPadding,
        backgroundColor: '#537885',
        borderBottomLeftRadius: GlobalHeights[5],
        borderBottomRightRadius: GlobalHeights[5],
    },
    setting: {
        width: GlobalWidths[10],
        height: GlobalWidths[10],
        borderRadius: GlobalWidths[10] / 2,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center'
    },
    Dashboard: {
        borderTopLeftRadius: GlobalHeights[5],
        borderTopRightRadius: GlobalHeights[5],
        paddingHorizontal: kDefaultPadding,
        paddingVertical: GlobalHeights[5],
    }
})