import { createAsyncThunk } from "@reduxjs/toolkit";
import { openModal } from "../reducers/alertSlice";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const generateCaptcha = () => {
    // Generate Random of Captcha
    let charsArray = "0123456789abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let captcha = [];
    let textCaptcha = ""
    for (let i = 0; i < 4; i++) {
        let index = Math.floor(Math.random() * charsArray.length + 1); //get the next character from the array

        // Generate Random of Captcha Color
        let letters = "0123456789ABCDEF";
        let color = "#";
        for (let j = 0; j < 6; j++) {
            color += letters[Math.floor(Math.random() * 16)];
        }

        textCaptcha += charsArray[index];
        captcha.push({
            text: charsArray[index],
            textColor: color
        });
    }
    return ({
        arrCaptcha: captcha,
        captcha: textCaptcha
    })
}

export const initLogin = createAsyncThunk(
    'user/initLogin',
    async () => {
        const profile = await AsyncStorage.getItem('profileAsync')
        return JSON.parse(profile)
    }
)

export const fetchLogin = createAsyncThunk(
    'user/fetchLogin',
    async ({ email, password }, thunkAPI) => {
        try {
            const response = await fetch(
                'http://10.200.0.183:3001/loginUser',{
                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        email: email.trim(),
                        password: password.trim(),
                    }),
                }
            );

            if (response.status === 200) {
                const json = await response.json();
                let profile = {
                    email: email.trim(),
                    password: password.trim(),
                    id: 1,
                    member_name: "-",
                    member_address: "-",
                    member_profil: '-',
                    member_email: "-",
                    member_nip: "-",
                    member_phone: "-",
                    member_role: "-",
                    member_gender: "-",
                    member_jabatan: "-",
                    status_martial: "-",
                    blood_type: "-",
                    token: json.token,
                };
                await AsyncStorage.setItem('profileAsync', JSON.stringify(profile));
                return profile
            }
            else {
                thunkAPI.dispatch(openModal({ type: "Information", message: "Nama Pengguna / Sandi Salah" }))
                return null
            }
        } catch (err) {
            thunkAPI.dispatch(openModal({ type: "Information", message: "Nama Pengguna / Sandi Salah" }))
            // return thunkAPI.rejectWithValue("Nama Pengguna / Sandi Salah")
            return null
        }
    }
)

export const fetchLogout = createAsyncThunk(
    'user/fetchLogout',
    async () => {
        await AsyncStorage.removeItem('profileAsync');
        return null
    }
)