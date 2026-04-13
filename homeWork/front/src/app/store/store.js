import { configureStore } from '@reduxjs/toolkit';
import bookReducer from '../../features/book/store/bookSlice';
import productReducer from '../../features/product/store/productSlice';

const store = configureStore({
  reducer: {
    book: bookReducer,
    product: productReducer,
  },
});

export default store;
