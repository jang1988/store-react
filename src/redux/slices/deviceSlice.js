import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: [],
};

export const deviceSlice = createSlice({
    name: 'device',
    initialState,
    reducers: {
        setItems(state, action) {
            state.items = action.payload
        }
    },
});

export const { setItems } = filterSlice.actions;

export default deviceSlice.reducer;

