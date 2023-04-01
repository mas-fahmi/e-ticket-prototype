import { Text, View, StatusBar , StyleSheet, Button} from 'react-native';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import textStyles from '../../constants/TextStyles';
import { GlobalColors } from '../../constants/Styles';
import { ModalLoader } from '../../components';
//Redux
import { useDispatch, useSelector } from 'react-redux';
//Navigation
import { useNavigation } from '@react-navigation/native';
import { ROUTES } from '../../navigations';
import { TextInput } from 'react-native-gesture-handler';

export default function FormRegister() {

    const navigation = useNavigation()
    const { isLoading, dataProfile } = useSelector(state => state.user)
    const dispatch = useDispatch()   

    useEffect(() => {
        if (dataProfile !== null) {
            navigation.navigate(ROUTES.LOGIN)
        } 
    }, [dataProfile])

    const [name, setName] = useState("");
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confPassword, setconfPassword] = useState("")

    const submit = () => {
        const data = {
            name,
            email,
            password,
            confPassword
        }
        axios.post('http://10.0.2.2:3001/registerUser', data)
        .then(res => {
            console.log('res : ', res);
            setName("");
            setEmail("");
            setPassword("");
            setconfPassword("");
        })
    }
    return (
        <>
            <ModalLoader isLoading={isLoading} />
            <StatusBar hidden={true} />
            <Text style={[textStyles.textBold20, { color: GlobalColors.BGCOLOR2 }]}>Register</Text>
            
            <View style={styles.container}>
                    <Text style={{color: 'white'}}>Masukan Data User</Text>
                    <TextInput placeholder='Name'  style={styles.input} value={name} onChangeText={(value) => setName(value)}/>
                    <TextInput placeholder='Email'  style={styles.input} value={email} onChangeText={(value) => setEmail(value)}/>
                    <TextInput placeholder='password'  style={styles.input} value={password} onChangeText={(value) => setPassword(value)}/>
                    <TextInput placeholder='Confirm password'  style={styles.input} value={confPassword} onChangeText={(value) => setconfPassword(value)}/>
                    <Button title='Simpan' onPress={submit}/>
                </View>
        </>
            
    )
}

const styles = StyleSheet.create({
    container: {padding: 20, },
    input: {borderWidth: 1,marginBottom: 12, borderRadius:25, paddingHorizontal: 18, color: 'white', borderColor: 'white'},

})