import { Text, View, StatusBar , StyleSheet, Button} from 'react-native';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import textStyles from '../../constants/TextStyles';
import { GlobalColors } from '../../constants/Styles';
import { InputText, ButtonText, ModalLoader, ModalInformation } from '../../components';
//Redux
import { useDispatch, useSelector } from 'react-redux';
//Navigation
import { useNavigation } from '@react-navigation/native';
import { ROUTES } from '../../navigations';
import { TextInput } from 'react-native-gesture-handler';

export default function FormRegister() {

    const navigation = useNavigation()
    const [isShowPass, setIsShowPass] = useState(true)
    const { isInformation, alertMessage } = useSelector(state => state.alert)
    const { isLoading, dataProfile } = useSelector(state => state.user)
    const dispatch = useDispatch()   

    const [name, setName] = useState("");
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confPassword, setconfPassword] = useState("")

    useEffect(() => {
        if (dataProfile !== null) {
            navigation.navigate(ROUTES.LOGIN)
        } 
    }, [dataProfile])

    

    const submit = () => {
        const data = {
            name,
            email,
            password,
            confPassword
        }
        axios.post('http://10.200.0.1:3001/registerUser', data)
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
            
                <View>
                    <InputText 
                        title='Name'
                        textInputConfig={{
                            placeholder: 'Enter your Name',
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
                        title='password'
                        rightIcon={isShowPass ? 'eye' : 'eye-off'}
                        onPressIcon={() => setIsShowPass(!isShowPass)}
                        textInputConfig={{
                            placeholder: 'Password',
                            secureTextEntry: isShowPass,
                            value: {password},
                            onChangeText: (value) => setPassword(value),
                        }}/>
                    <InputText 
                        title='Password'
                        rightIcon={isShowPass ? 'eye' : 'eye-off'}
                        onPressIcon={() => setIsShowPass(!isShowPass)}
                        textInputConfig={{
                            placeholder: 'Confirm Password',
                            secureTextEntry: isShowPass,
                            value: {confPassword},
                            onChangeText: (value) => setconfPassword(value),
                        }}/>
                    <View style={{ marginTop: 20 }}>
                        <ButtonText onPress={submit}>
                            Sign Up
                        </ButtonText>
                    </View>
                </View>
                <ModalInformation
                showModal={isInformation}
                message={alertMessage}
                onPressSubmitOk={() => dispatch(closeModal("Information"))}
                onRequestClose={() => dispatch(closeModal("Information"))}
            />
        </>
            
    )
}

const styles = StyleSheet.create({
    input: {borderWidth: 1,marginBottom: 12, borderRadius:25, paddingHorizontal: 18, color: 'white', borderColor: 'white'},

})