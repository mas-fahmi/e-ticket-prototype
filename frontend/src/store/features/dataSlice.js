import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

//Get Data Transaksi/Booking
export const getData = createAsyncThunk(
  "posts/GetData",
  async (arg, { rejectWithValue }) => {
    try {
      const { data } = await axios.get("http://localhost:3001/showBooking");
      return data;
    } catch (error) {
      rejectWithValue(error.response.data);
    }
  }
);

const dataSlice = createSlice({
  name: "posts",
  initialState: {
    data: [],
    isSuccess: false,
    message: "",
    loading: false,
  },
  reducers: {},
  extraReducers: {
    [getData.pending]: (state, { payload }) => {
      state.loading = true;
    },
    [getData.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.data = payload;
    //   console.log(payload)
      state.isSuccess = false;
    },
    [getData.rejected]: (state, { payload }) => {
      state.message = payload;
      state.loading = false;
      state.isSuccess = false;
    },
  },
});

export default dataSlice;
