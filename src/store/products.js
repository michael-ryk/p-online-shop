import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialState = {
  productsList: [],
}

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    // Future functions
  }
});

const store = configureStore({ reducer: productsSlice.reducer});

export const productsActions = productsSlice.actions;
export default store;