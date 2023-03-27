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
    async ({ userName, userPass }, thunkAPI) => {
        try {
            if (userName.trim() === "fest" && userPass.trim() === "123") {
                let profile = {
                    userName: userName.trim(),
                    userPass: userPass.trim(),
                    id: 1,
                    member_name: "Telkom Property",
                    member_address: "Bandung",
                    member_profil: null,
                    member_email: "telkomproperty@telkom.id",
                    member_nip: "1234567890",
                    member_phone: "081211122234",
                    member_role: "Teknisi",
                    member_gender: "L",
                    member_jabatan: "Teknisi",
                    status_martial: "Married",
                    blood_type: "B",
                    token: "-",
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