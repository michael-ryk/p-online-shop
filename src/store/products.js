import { createSlice, configureStore } from '@reduxjs/toolkit';

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

const store = configureStore({ reducer: productsSlice.reducer});

export const productsActions = productsSlice.actions;
export default store;