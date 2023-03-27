import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isConfirmation: false,
    isInformation: false,
    isValidation: false,
    alertMessage: '',
    loadTakePicture: false
};

const alertSlice = createSlice({
    name: 'alert',
    initialState,
    reducers: {
        openModal: (state, action) => {
            if (action.payload.type === "Confirmation")
                state.isConfirmation = true;
            else if (action.payload.type === "Information")
                state.isInformation = true;
            else if (action.payload.type === "Validation")
                state.isValidation = true;

            state.alertMessage = action.payload.message;
        },
        closeModal: (state, action) => {
            if (action.payload === "Confirmation")
                state.isConfirmation = false;
            else if (action.payload === "Information")
                state.isInformation = false;
            else if (action.payload === "Validation")
                state.isValidation = false;
        },
        openLoadTakePicture: (state, action) => {
            state.loadTakePicture = true;
        },
        closeLoadTakePicture: (state, action) => {
            state.loadTakePicture = false;
        }
    },
});

export const { openModal, closeModal, openLoadTakePicture, closeLoadTakePicture } = alertSlice.actions;
export default alertSlice.reducer;