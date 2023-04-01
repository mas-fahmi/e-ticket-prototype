import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

//Get Data Transaksi/Booking
export const getData = createAsyncThunk(
  "posts/getData",
  async (arg, { rejectWithValue }) => {
    try {
      const { data } = await axios.get("http://localhost:3001/showBooking");
      // console.log(data);
      return data;
    } catch (error) {
      rejectWithValue(error.response.data);
    }
  }
);

// export const editData = createAsyncThunk(
//   "payload/edit",
//   async (data, thunkAPI) => {
//     console.log(data);
//     const response = await fetch(
//       "http://localhost:3001/updateTiket/:id_ticket=${id_ticket}",
//       {
//         method: "PUT",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: "Bearer " + data.token,
//         },
//         body: JSON.stringify(data.data),
//       }
//     );
//     if (response.status === 200) {
//       thunkAPI.dispatch(getData(data));
//     } else {
//     }
//   }
// );

//Edit Data
export const editData = createAsyncThunk('site/update', async (param, thunkAPI) => {
  const requestoptions = {
    method: 'PUT',
    headers: {
      Authorization: 'Bearer' + param.token,
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': 'true',
    },
    body: JSON.stringify(param.data)
  };
  let response = await fetch ("http://localhost:3001/updateTiket/"+param.data.id, requestoptions);
  console.log(param.data.id);
  if(response.status === 200){
    thunkAPI.dispatch(getData(param))
  }
})


//Get Data Penukaran Tiket
export const getDataTiket = createAsyncThunk(
  "posts/getData",
  async (arg, { rejectWithValue }) => {
    try {
      const { data } = await axios.get("http://localhost:3001/showTiket");
      // console.log(data);
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
      state.isLoading = true;
    },
    [getData.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.data = payload[0].payload;
      console.log(payload[0].payload);
      state.isSuccess = false;
    },
    [getData.rejected]: (state, { payload }) => {
      state.message = payload;
      state.isLoading = false;
      state.isSuccess = false;
    },
    [getDataTiket.pending]: (state, { payload }) => {
      state.isLoading = true;
    },
    [getDataTiket.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.data = payload[0].payload;
      console.log(payload[0].payload);
      state.isSuccess = false;
    },
    [getDataTiket.rejected]: (state, { payload }) => {
      state.message = payload;
      state.isLoading = false;
      state.isSuccess = false;
    },

    [editData.fulfilled]: (state, { payload }) => {
      state.data = payload;
      // console.log(payload);
    },

  },
});

export default dataSlice;
