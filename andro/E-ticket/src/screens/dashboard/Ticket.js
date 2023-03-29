import { StyleSheet, StatusBar, ScrollView, Text, View , Button } from 'react-native';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {ContainerView, ModalLoader } from '../../components';
import textStyles from '../../constants/TextStyles';
//Navigation
import { useNavigation } from '@react-navigation/native';
import { ROUTES } from '../../navigations';
//Redux 
import { useDispatch, useSelector } from 'react-redux';
import { GlobalColors } from '../../constants/Styles';
import { TextInput } from 'react-native-gesture-handler';

const Item = ({nik, name, alamat}) => {
    return (
        <View style={styles.itemContainer}>
            <Text style={styles.itemContainer}>{nik}</Text>
            <Text style={styles.itemContainer}>{name}</Text>
            <Text style={styles.itemContainer}>{alamat}</Text>
            <Text style={styles.delete}>X</Text>
        </View>
    )
}

export default function Ticket() {
    
    const navigation = useNavigation()
    const { dataProfile, isLoading } = useSelector(state => state.user)
    const dispatch = useDispatch()

    useEffect(() => {
        if (dataProfile === null) {
            navigation.navigate(ROUTES.LOGIN)
        }
    }, [dataProfile])
    
    const [nik, setNIK] = useState("");
    const [name, setName] = useState("");
    const [alamat, setAlamat] = useState("");
    const [users, setUsers] = useState([])

    useEffect(() => {
        getData();  
    }, []);

    const submit = () => {
        const data = {
            nik,
            name,
            alamat,
        }
        axios.post('http://10.200.0.183:3004/users', data)
        .then(res => {
            console.log('res : ', res);
            setNIK("");
            setName("");
            setAlamat("");
            getData();
        })
    }

    const getData = () => {
        axios.get('http://10.200.0.183:3004/users')
        .then(res => {
            console.log('res get data: ', res);
            setUsers(res.data)
        })
    }
    return (
        <ContainerView>
            <ModalLoader isLoading={isLoading} />
            <ScrollView contentContainerStyle={{ paddingBottom: 80 }} showsVerticalScrollIndicator={false}>
                <StatusBar hidden={true} />
                <Text style={[textStyles.textBold15, GlobalColors.white, { marginBottom: 20, marginTop: 50, textAlign: 'center' }]}>Ini Ticket Screen</Text>
                <View style={styles.container}>
                    <Text style={styles.textTitle}>Local Api (JSON SERVER)</Text>
                    <Text style={{color: 'white'}}>Masukan Data User</Text>
                    <TextInput placeholder='NIK' style={styles.input} value={nik} onChangeText={(value) => setNIK(value)}/>
                    <TextInput placeholder='Nama'  style={styles.input} value={name} onChangeText={(value) => setName(value)}/>
                    <TextInput placeholder='Alamat'  style={styles.input} value={alamat} onChangeText={(value) => setAlamat(value)}/>
                    <Button title='Simpan' onPress={submit}/>
                    <View style={styles.line}/>
                        {users.map(user => {
                            return <Item key={user.id} nik={user.nik} name={user.name} alamat={user.alamat}  />
                        })}
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
    input: {borderWidth: 1,marginBottom: 12, borderRadius:25, paddingHorizontal: 18, color: 'white', borderColor: 'white'},
    delete: {fontSize: 20, fontWeight: 'bold', color: 'red',  marginBottom: 15},
    itemContainer: {color: 'white', fontSize: 18},

})