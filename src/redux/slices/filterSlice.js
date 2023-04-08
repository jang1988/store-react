import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    searchValue: '',
    categoryId: 0,
    pageCount: 1,
    sort: {
        name: 'популярности',
        sort: 'rating',
    },
};

export const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setCategoryId: (state, action) => {
            state.categoryId = action.payload;
        },
        setSort: (state, action) => {
            state.sort = action.payload;
        },
        setCurrentPage: (state, action) => {
            state.pageCount = action.payload;
        },
        setFilters: (state, action) => {
            state.sortType = action.payload.sort;
            state.categoryId = Number(action.payload.categoryId);
            state.pageCount = Number(action.payload.currentPage);
        },
        setSearchValue: (state, action) => {
            state.searchValue = action.payload;
        },
    },
});

export const sortSelector = (state) => state.filter.sort

export const { setCategoryId, setSort, setCurrentPage, setFilters, setSearchValue } =
    filterSlice.actions;

export default filterSlice.reducer;
