import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

//Get Data Transaksi/Transaksi
export const getData = createAsyncThunk(
  "posts/getData",
  async (arg, { rejectWithValue }) => {
    try {
      const { data } = await axios.get("http://localhost:3001/showBooking");
      console.log(data);
      return data;
    } catch (error) {
      rejectWithValue(error.response.data);
    }
  }
);


// add data
export const postCluster = createAsyncThunk(
  "cluster/post",
  async (params, thunkAPI) => {
    console.log(params);
    const response = await fetch("http://localhost:3001/addTiket/" + params.data.id_ticket, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + params.token,
      },
      body: JSON.stringify(params.data),
    });
    if (response.status === 200) {
      thunkAPI.dispatch(getData(params));
    } else {
    }
  }
);

//Edit Data Transaksi
export const editData = createAsyncThunk(
  "site/update",
  async (param, thunkAPI) => {
    console.log(param);
    const requestoptions = {
      method: "PUT",
      headers: {
        Authorization: "Bearer" + param.token,
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": "true",
      },
      body: JSON.stringify(param.data),
    };
    let response = await fetch(
      "http://localhost:3001/updateBooking/" + param.data.id_ticket,
      requestoptions
    );
    console.log(response);
    if (response.status === 200) {
      thunkAPI.dispatch(getData(param));
    }
  }
);

//Get Data Penukaran Tiket
export const getDataTiket = createAsyncThunk(
  "posts/getDataTiket",
  async (arg, { rejectWithValue }) => {
    try {
      const { data } = await axios.get("http://localhost:3001/showTiket");
      console.log(data);
      return data;
    } catch (error) {
      rejectWithValue(error.response.data);
    }
  }
);

//Edit Data Penukaran
export const editDataTiket = createAsyncThunk(
  "site/update",
  async (param, thunkAPI) => {
    console.log(param);
    const requestoptions = {
      method: "PUT",
      headers: {
        Authorization: "Bearer" + param.token,
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": "true",
      },
      body: JSON.stringify(param.data),
    };
    let response = await fetch(
      "http://localhost:3001/updateTiket/" + param.data.id_ticket,
      requestoptions
    );
    console.log(response);
    if (response.status === 200) {
      thunkAPI.dispatch(getData(param));
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
    [editDataTiket.fulfilled]: (state, { payload }) => {
      state.data = payload;
      console.log(payload);
    },
  },
});

export default dataSlice;
