import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  filteredItems: [],
  viewType: 'grid-view',
}

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setGridView(state){
      state.viewType = 'grid-view';
    },
    setListView(state){
      state.viewType = 'list-view';
    },
    }
});

export const filterActions = filterSlice.actions;
export default filterSlice.reducer;