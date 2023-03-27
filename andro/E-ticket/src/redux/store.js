import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducers/userSlice";
import alertReducer from "./reducers/alertSlice";

export const store = configureStore({
    reducer: {
        user: userReducer,
        alert: alertReducer
    }
});