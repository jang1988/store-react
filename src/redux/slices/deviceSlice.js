import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchDevice = createAsyncThunk('device/fetchDeviceStatus', async (params) => {
    const { currentPage, category, sortType, search } = params;

    const { data } = await axios.get(
        `https://63ed0caae6ee53bbf5901b77.mockapi.io/devices?page=${currentPage}&limit=4&${category}&sortBy=${sortType.sort}&order=asc${search}`,
    );
    return data;
});

const initialState = {
    items: [],
    status: 'loading',
};

export const deviceSlice = createSlice({
    name: 'device',
    initialState,
    reducers: {
        setItems(state, action) {
            state.items = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchDevice.pending, (state) => {
                state.status = 'loading';
                state.items = [];
            })
            .addCase(fetchDevice.fulfilled, (state, action) => {
                state.items = action.payload;
                state.status = 'success';
            })
            .addCase(fetchDevice.rejected, (state) => {
                state.status = 'error';
                state.items = [];
            });
    },
});

export const { setItems } = deviceSlice.actions;

export default deviceSlice.reducer;
