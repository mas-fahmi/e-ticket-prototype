// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import axios from "axios";

// //Get Data Transaksi/Booking
// export const getData = createAsyncThunk(
//     "posts/getData",
//     async (arg, { rejectWithValue }) => {
//       try {
//         const { data } = await axios.get("http://10.200.0.183:3001/showBooking");
//         // console.log(data);
//         return data;
//       } catch (error) {
//         rejectWithValue(error.response.data);
//       }
//     }
//   );

//   //Get Data Penukaran Tiket
// export const getDataTiket = createAsyncThunk(
//     "posts/getData",
//     async (arg, { rejectWithValue }) => {
//       try {
//         const { data } = await axios.get("http://10.200.0.183:3001/showTiket/");
//         // console.log(data);
//         return data;
//       } catch (error) {
//         rejectWithValue(error.response.data);
//       }
//     }
//   );

//   const dataSlice = createSlice({
//     name: "posts",
//     initialState: {
//       data: [],
//       isSuccess: false,
//       message: "",
//       loading: false,
//     },
//     reducers: {},
//     extraReducers: {
//       [getData.pending]: (state, { payload }) => {
//         state.loading = true;
//       },
//       [getData.fulfilled]: (state, { payload }) => {
//         state.loading = false;
//         state.data = payload[0].payload;
//         console.log(payload[0].payload)
//         state.isSuccess = false;
//       },
//       [getData.rejected]: (state, { payload }) => {
//         state.message = payload;
//         state.loading = false;
//         state.isSuccess = false;
//       },
//       [getDataTiket.pending]: (state, { payload }) => {
//         state.loading = true;
//       },
//       [getDataTiket.fulfilled]: (state, { payload }) => {
//         state.loading = false;
//         state.data = payload[0].payload;
//         console.log(payload[0].payload)
//         state.isSuccess = false;
//       },
//       [getDataTiket.rejected]: (state, { payload }) => {
//         state.message = payload;
//         state.loading = false;
//         state.isSuccess = false;
//       },
//     },
//   });

// export default dataSlice;
