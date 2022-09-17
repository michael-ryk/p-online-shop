import { configureStore } from '@reduxjs/toolkit';

import productsReducer from './products';
import filterReducer from './filter';

const store = configureStore({
  reducer: { products: productsReducer, filter: filterReducer}
});

export default store;