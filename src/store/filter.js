import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  filteredItems: [],
  viewType: 'grid',
}

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setViewMode(state, action){
      state.viewType = action.payload;
    },
    }
});

export const filterActions = filterSlice.actions;
export default filterSlice.reducer;