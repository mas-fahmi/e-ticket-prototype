import { Text, TouchableOpacity, View } from 'react-native';
import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { GlobalColors } from '../../constants/Styles';
import { InputText, ButtonText, ModalLoader, ModalInformation } from '../../components';
import textStyles from '../../constants/TextStyles';
//Redux
import { useSelector, useDispatch } from 'react-redux';
import { fetchRegister } from '../../redux/actions/userAction';
import { closeModal } from '../../redux/reducers/alertSlice';
import { ROUTES } from '../../navigations';

export default function FormRegister(){
    const navigation = useNavigation()
    const [isShowPass, setIsShowPass] = useState(true)
    const [userName, setUserName] = useState('')
    const [userPass, setUserPass] = useState('')

    const { isLoading, dataProfile } = useSelector(state => state.user)
    const { isInformation, alertMessage } = useSelector(state => state.alert)
    const dispatch = useDispatch()

    return (
        <>
        <ModalLoader isLoading={isLoading} />
            <Text style={[textStyles.textBold20, { color: GlobalColors.BGCOLOR2 }]}>Login</Text>
            <InputText
                title='User Name'
                textInputConfig={{
                    placeholder: 'Enter your user name',
                    value: userName,
                    onChangeText: (text) => setUserName(text),
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
                    value: userPass,
                    onChangeText: (text) => setUserPass(text),
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
                    Sign Up
                </ButtonText>
            </View>
            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'flex-end' }}>
                <Text style={[textStyles.textMd12, { color: GlobalColors.TEXT_SECONDARY }]}>Don't have an account? </Text>
                <TouchableOpacity onPress={() => {}} >
                    <Text style={[textStyles.textBold12, { color: GlobalColors.BGCOLOR2 }]}>Sign in</Text>
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