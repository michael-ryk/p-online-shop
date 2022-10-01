import { createSlice, current } from '@reduxjs/toolkit';

const initialState = {
  fetchedProducts: [],
  filteredProducts: [],
  NumberOfFilteredProducts: 0,
  viewType: 'grid',
  sortValue: 'price-lowest',
  filters: {
    search_text: '',
    category: 'כל הקטגוריות',
    color: 'all',
    min_price: 0,
    max_price: 0,
    price: 0,
    discount: false,
  },
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setViewMode(state, action) {
      state.viewType = action.payload;
    },
    addProductsToStoreFirstTime(state, action) {
      // console.log(':: Reducer - addProductsToStoreFirstTime')
      state.fetchedProducts = action.payload;
      state.filteredProducts = action.payload;
      state.NumberOfFilteredProducts = state.filteredProducts.length;
      // console.log('fetchedProducts = ')
      // console.log(state.fetchedProducts)
    },
    editSortValue(state, action) {
      state.sortValue = action.payload;
    },
    sortProducts(state) {
      // console.log(':: Reducer - sortProducts')
      let tmpProducts = [...current(state.filteredProducts)];
      // console.log('Current state of filteredProducts: ')
      // console.log(tmpProducts)
      switch (state.sortValue) {
        case 'price-lowest':
          // console.log('If else - price-lowest');
          state.filteredProducts = tmpProducts.sort((a, b) => {
            if (a.price < b.price) {
              return -1;
            }
            if (a.price > b.price) {
              return 1;
            }
            return 0;
          });
          break;
        case 'price-highers':
          // console.log('If else - price-highers');
          state.filteredProducts = tmpProducts.sort(
            (a, b) => b.price - a.price
          );
          break;
        case 'name-a':
          // console.log('If else - name-a');
          state.filteredProducts = tmpProducts.sort((a, b) =>
            a.name.localeCompare(b.name)
          );
          break;
        case 'name-z':
          // console.log('If else - name-z');
          state.filteredProducts = tmpProducts.sort((a, b) =>
            b.name.localeCompare(a.name)
          );
          break;
        default:
          console.log('Switch - no match found');
          break;
      }
    },
    updateFilters(state, action) {
      const  {name, value} = action.payload
      // console.log(name)
      if ( name === 'search_text' ) state.filters.search_text = value;
      if ( name === 'category') state.filters.category = value;
    },
    filterProducts(state) {
      const products = state.filteredProducts;
      const { search_text, category } = state.filters;

      if ( search_text ) state.filteredProducts = products.filter( item => item.name.startsWith(search_text) );
      if ( category !== 'כל הקטגוריות') state.filteredProducts = products.filter( item => item.category === category );

    },
    clearFilters(state) {
      state.filters = {
        search_text: '',
        category: 'all',
        color: 'all',
        min_price: 0,
        max_price: 0,
        price: 0,
        discount: false,
      }
      state.filteredProducts = state.fetchedProducts;
    }
  },
});

export const filterActions = filterSlice.actions;
export default filterSlice.reducer;
