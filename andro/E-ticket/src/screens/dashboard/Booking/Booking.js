import { StyleSheet, StatusBar, ScrollView, Text, View , Button } from 'react-native';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {ContainerView, InputText, ModalLoader, ButtonText } from '../../../components';
import textStyles from '../../../constants/TextStyles';
//Navigation
import { useNavigation } from '@react-navigation/native';
import { ROUTES } from '../../../navigations';
//Redux 
import { useDispatch, useSelector } from 'react-redux';
import { GlobalColors } from '../../../constants/Styles';
import { TextInput } from 'react-native-gesture-handler';

export default function Booking() {
    
    const navigation = useNavigation()
    const { dataProfile, isLoading } = useSelector(state => state.user)
    const dispatch = useDispatch()
    
    const [nik, setNik] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [fest_name, setFestName] = useState("");
    const [payments, setPayments] = useState("");

    const submit = () => {
        const data = {
            nik,
            name,
            email,
            fest_name,
            payments
        }
        axios.post('http://10.0.2.2:3001/addBooking', data)
        .then(res => {
            console.log('res : ', res);
            setNik("");
            setName("");
            setEmail("");
            setFestName("");
            setPayments("");
        })
    }
    return (
        <ContainerView>
            <ModalLoader isLoading={isLoading} />
            <ScrollView contentContainerStyle={{ paddingBottom: 80 }} showsVerticalScrollIndicator={false}>
                <StatusBar hidden={true} />
                <Text style={[textStyles.textBold15, GlobalColors.white, { marginBottom: 20, marginTop: 50,marginLeft: 30 }]}>Detail pesanan</Text>
                <View style={styles.container}>
                    <InputText 
                        title='NIK'
                        textInputConfig={{
                            placeholder: 'Nik',
                            value: {nik},
                            onChangeText: (value) => setNik(value),
                        }}/>
                    <InputText 
                        title='Name'
                        textInputConfig={{
                            placeholder: 'name',
                            value: {name},
                            onChangeText: (value) => setName(value),
                        }}/>
                    <InputText 
                        title='Email'
                        textInputConfig={{
                            placeholder: 'Email',
                            value: {email},
                            onChangeText: (value) => setEmail(value),
                        }}/>
                    <InputText 
                        title='Fest_Name'
                        textInputConfig={{
                            placeholder: 'FEST NAME',
                            value: {fest_name},
                            onChangeText: (value) => setFestName(value),
                        }}/>
                    <InputText 
                        title='Payments'
                        textInputConfig={{
                            placeholder: 'Payments',
                            value: {payments},
                            onChangeText: (value) => setPayments(value),
                        }}/>
                    <ButtonText onPress={submit}>
                        Order
                    </ButtonText>
                </View>
            </ScrollView>
        </ContainerView>
    )
}

const styles = StyleSheet.create({
    container: {padding: 20, },
    textTitle: {textAlign: 'center'},
    line: {height: 2, backgroundColor: 'black', marginVertical: 20},
    avatar: {width: 100, height: 100, borderRadius: 100},
    input: {borderWidth: 1,marginBottom: 12, borderRadius:10, paddingHorizontal: 18, color: 'white', borderColor: 'white'},
    delete: {fontSize: 20, fontWeight: 'bold', color: 'red',  marginBottom: 15},
    itemContainer: {color: 'white', fontSize: 18},

})