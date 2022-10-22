import { configureStore } from '@reduxjs/toolkit';
// import wishlistReducer from './wishlistGames';
import appNewsReducer from './appInfos';

const store = configureStore({
  reducer: {
    // wishlist: wishlistReducer,
    appnews: appNewsReducer,
  },
});

export default store;
