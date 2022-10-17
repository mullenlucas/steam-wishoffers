import { configureStore } from '@reduxjs/toolkit';
import wishlistReducer from './wishlistGames';

const store = configureStore({
  reducer: {
    wishlist: wishlistReducer,
  },
});

export default store;
