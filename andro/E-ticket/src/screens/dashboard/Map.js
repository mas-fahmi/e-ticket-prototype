import { StyleSheet, StatusBar, ScrollView, Text } from 'react-native';
import React, { useEffect } from 'react';
import { ButtonText, Carousel, ContainerView, ModalLoader } from '../../components';
import textStyles from '../../constants/TextStyles';
import { dataCarousel } from '../../constants/Api';
//Navigation
import { useNavigation } from '@react-navigation/native';
import { ROUTES } from '../../navigations';
//Redux
import { useDispatch, useSelector } from 'react-redux';
import { fetchLogout } from '../../redux/actions/userAction';
import { GlobalColors } from '../../constants/Styles';

export default function Map() {
    const navigation = useNavigation()
    const { dataProfile, isLoading } = useSelector(state => state.user)
    const dispatch = useDispatch()
    
    useEffect(() => {
        if (dataProfile === null) {
            navigation.navigate(ROUTES.LOGIN)
        }
    }, [dataProfile])

    return (
        <ContainerView>
            <ModalLoader isLoading={isLoading} />
            <ScrollView contentContainerStyle={{ paddingBottom: 80 }} showsVerticalScrollIndicator={false}>
            <StatusBar hidden={true} />
            <Text style={[textStyles.textBold15, GlobalColors.white, { marginBottom: 20, marginTop: 50, textAlign: 'center' }]}>Ini Map Screen</Text>


            </ScrollView>
        </ContainerView>
    )
}