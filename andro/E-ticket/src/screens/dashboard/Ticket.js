import { StyleSheet, StatusBar, ScrollView, Text, View , Button, Image} from 'react-native';
import React, { useEffect, useState } from 'react';
import { ButtonText, Carousel, ContainerView, ModalLoader } from '../../components';
import textStyles from '../../constants/TextStyles';
//Navigation
import { useNavigation } from '@react-navigation/native';
import { ROUTES } from '../../navigations';
//Redux 
import { useDispatch, useSelector } from 'react-redux';
import { GlobalColors } from '../../constants/Styles';

export default function Ticket() {
    
    const navigation = useNavigation()
    const { dataProfile, isLoading } = useSelector(state => state.user)
    const dispatch = useDispatch()

    useEffect(() => {
        if (dataProfile === null) {
            navigation.navigate(ROUTES.LOGIN)
        }
    }, [dataProfile])

    useEffect(() => {
        // call api method get
        // fetch('http://192.168.1.10:3001/showBooking/')
        // .then(response => response.json())
        // .then(json => console.log(json))

        // call api method post
        // const dataForAPI = {
        //     name: "morpheus",
        //     job: "leader",
        // }

        // console.log('data object', dataForAPI);
        // console.log('data stringify', JSON.stringify(dataForAPI)),
        // fetch ('https://reqres.in/api/users/ /', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify(dataForAPI)
        // })
        // .then(response => response.json())
        // .then(json => {
        //     console.log('post response: ', json)
        // })

    }, []);


    const getData = () => {
        fetch('http://10.200.0.183:3001/showBooking/')
        .then(response => response.json())
        .then(json => console.log(json))
    }
    return (
        <ContainerView>
            <ModalLoader isLoading={isLoading} />
            <ScrollView contentContainerStyle={{ paddingBottom: 80 }} showsVerticalScrollIndicator={false}>
                <StatusBar hidden={true} />
                <Text style={[textStyles.textBold15, GlobalColors.white, { marginBottom: 20, marginTop: 50, textAlign: 'center' }]}>Ini Ticket Screen</Text>
                
{/* Read */}
                <Button title="GET DATA" onPress={getData}/>
                <Text>response GET DATA</Text> 
                {/* <Image source={{uri: dataUser.avatar}} style={styles.avatar}/>
                <Text style={[textStyles.textBold15, GlobalColors.white]}>{`${dataUser.first_name} ${dataUser.last_name}`}</Text>
                <Text style={[textStyles.textMd15, GlobalColors.white]}>{dataUser.email}</Text> */}
                <View style={styles.line}/>
            </ScrollView>
        </ContainerView>
    )
}

const styles = StyleSheet.create({
    container: {padding: 20},
    textTitle: {textAlign: 'center'},
    line: {height: 2, backgroundColor: 'black', marginVertical: 20},
    avatar: {width: 100, height: 100, borderRadius: 100}
})