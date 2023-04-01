import { Text, TouchableOpacity, View } from 'react-native';
import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { GlobalColors } from '../../constants/Styles';
import { InputText, ButtonText, ModalLoader, ModalInformation } from '../../components';
import textStyles from '../../constants/TextStyles';
//Redux
import { useSelector, useDispatch } from 'react-redux';
import { fetchLogin } from '../../redux/actions/userAction';
import { closeModal } from '../../redux/reducers/alertSlice';
import { Register } from '../register/register';
import { ROUTES } from '../../navigations';

export default function FormLogin() {
    const navigation = useNavigation()
    const [isShowPass, setIsShowPass] = useState(true)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const { isLoading, dataProfile } = useSelector(state => state.user)
    const { isInformation, alertMessage } = useSelector(state => state.alert)
    const dispatch = useDispatch()

    const onPressSignIn = () => {
        dispatch(fetchLogin({ email, password }))
    }

    useEffect(() => {
        if (dataProfile !== null) {
            navigation.navigate(ROUTES.TABSCREEN)
        } 
    }, [dataProfile])

    return (
        <>
            <ModalLoader isLoading={isLoading} />
            <Text style={[textStyles.textBold20, { color: GlobalColors.BGCOLOR2 }]}>Login</Text>
            <InputText
                title='Email'
                textInputConfig={{
                    placeholder: 'Enter your Email',
                    value: email,
                    onChangeText: (text) => setEmail(text),
                    returnKeyType: "next",
                    onSubmitEditing: () => this.passwordInput.focus()
                }}
            />
            <InputText
                title='Password'
                rightIcon={isShowPass ? 'eye' : 'eye-off'}
                onPressIcon={() => setIsShowPass(!isShowPass)}
                textInputConfig={{
                    placeholder: 'Enter your password',
                    secureTextEntry: isShowPass,
                    value: password,
                    onChangeText: (text) => setPassword(text),
                    returnKeyType: "go",
                    onSubmitEditing: onPressSignIn,
                    ref: (input) => (this.passwordInput = input)
                }}
            />
            <TouchableOpacity
                style={{ marginTop: 10, alignItems: 'flex-end' }}
                onPress={() => { }}
            >
                <Text style={[textStyles.textMd12, { color: GlobalColors.BGCOLOR2  }]}>Forgot Password?</Text>
            </TouchableOpacity>
            <View style={{ marginTop: 10 }}>
                <ButtonText onPress={onPressSignIn}>
                    Sign In
                </ButtonText>
            </View>
            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'flex-end' }}>
                <Text style={[textStyles.textMd12, { color: GlobalColors.TEXT_SECONDARY }]}>Don't have an account? </Text>
                <TouchableOpacity onPress={() => {}}>
                    <Text style={[textStyles.textBold12, { color: GlobalColors.BGCOLOR2 }]}>Sign Up</Text>
                </TouchableOpacity>
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