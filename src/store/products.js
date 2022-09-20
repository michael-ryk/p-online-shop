import { createSlice } from '@reduxjs/toolkit';

const initialState = {
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
  }
});

export const productsActions = productsSlice.actions;
export default productsSlice.reducer;