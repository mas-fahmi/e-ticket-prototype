import { StyleSheet, StatusBar, ScrollView, Text, View , Button } from 'react-native';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {ContainerView, ModalLoader } from '../../../components';
import textStyles from '../../../constants/TextStyles';
//Navigation
import { useNavigation } from '@react-navigation/native';
import { ROUTES } from '../../../navigations';
//Redux 
import { useDispatch, useSelector } from 'react-redux';
import { GlobalColors } from '../../../constants/Styles';

const Item = ({fest_name, name, id_ticket, payments}) => {
    return (
        <View style={styles.itemContainer}>
            <Text style={styles.itemContainer}>{fest_name}</Text>
            <Text style={styles.itemContainer}>SMK Negeri 1 Cimahi</Text>
            <Text style={styles.itemContainer}>{name}</Text>
            <Text style={styles.itemContainer}>{id_ticket}</Text>
            <Text style={styles.itemContainer}>{payments}</Text>
            <Text style={styles.delete}>X</Text>
        </View>
    )
}

export default function Ticket() {    

    const [payloads, setPayloads] = useState([]);

    useEffect(() => {
        getData();  
    }, []);
    

    const getData = async () => {
        // axios.get('http://10.200.0.183:3001/showBooking')
        // .then(res => {
        //     console.log('res get data: ', res);
        //     setPayloads(res.payload)
        //     console.log(res[0].payload)
        // })

        const response = await fetch('http://10.200.0.183:3001/showBooking', { method: 'GET' });
        const responseJson = await response.json();
        setPayloads(responseJson[0].payload)
        // console.log(responseJson[0].payload)

    }
    return (
        <ContainerView>
            <ScrollView contentContainerStyle={{ paddingBottom: 80 }} showsVerticalScrollIndicator={false}>
                <StatusBar hidden={true} />
                <Text style={[textStyles.textBold15, GlobalColors.white, { marginBottom: 20, marginTop: 50, textAlign: 'center' }]}>Ini Ticket Screen</Text>
                {payloads.map((data,index) => 
                    <Item key={data.id} fest_name={data.fest_name} name={data.name} id_ticket={data.id_ticket} payments={data.payments}/>
                )}

            </ScrollView>
        </ContainerView>
    )
}

const styles = StyleSheet.create({
    container: {padding: 20, },
    textTitle: {textAlign: 'center'},
    line: {height: 2, backgroundColor: 'black', marginVertical: 20},
    avatar: {width: 100, height: 100, borderRadius: 100},
    input: {borderWidth: 1,marginBottom: 12, borderRadius:25, paddingHorizontal: 18, color: 'white', borderColor: 'white'},
    delete: {fontSize: 20, fontWeight: 'bold', color: 'red',  marginBottom: 15},
    itemContainer: {color: 'white', fontSize: 18},

})