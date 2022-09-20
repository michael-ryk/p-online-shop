import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  productsList: [],
  showSidebar: false,
}

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    openSidebar(state){
      state.showSidebar = true;
    },
    closeSidebar(state){
      state.showSidebar = false;
    },
    addProductsToStore(state, action){
      state.productsList = action.payload.productsList;
    },
  }
});

export const productsActions = productsSlice.actions;
export default productsSlice.reducer;