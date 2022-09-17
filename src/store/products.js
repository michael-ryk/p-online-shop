import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  productsList: [],
}

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addProductsToStore(state, action){
      state.productsList = action.payload.productsList;
    }
  }
});

export const productsActions = productsSlice.actions;
export default productsSlice.reducer;