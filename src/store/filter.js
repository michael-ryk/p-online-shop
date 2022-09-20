import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  allProducts: [],
  filteredProducts: [],
  viewType: 'grid',
}

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setViewMode(state, action){
      state.viewType = action.payload;
    },
    addProductsToStoreFirstTime(state, action){
      state.allProducts = action.payload;
      state.filteredProducts = action.payload;
    },
    }
});

export const filterActions = filterSlice.actions;
export default filterSlice.reducer;