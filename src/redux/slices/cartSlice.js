import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    totalPrice: 0,
    items: [],
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem(state, action) {
            state.items.push(action.payload)
        },
        removeItem(state, action) {
            state.items.filter(obj => obj.id !== action.payload)
        },
        clearItem(state) {
            state.items = []
        },
    },
});

export const { addItem, removeItem, clearItem } = cartSlice.actions;

export default cartSlice.reducer;