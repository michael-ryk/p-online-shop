import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  filteredItems: [],
}

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    // reducers
    }
});

export const filterActions = filterSlice.actions;
export default filterSlice.reducer;