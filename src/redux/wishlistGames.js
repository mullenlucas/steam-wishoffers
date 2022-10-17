import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { apiKey, mySteamUserID } from '../../apiKey';

// Actions
const FETCH_WISHLIST = 'steam-data/getWishList/FETCH_WISHLIST';

const userWishlistUrl = `https://store.steampowered.com/wishlist/profiles/${mySteamUserID}/wishlistdata/`;
const wishlistInitialState = [];

const getWishList = createAsyncThunk('steam-data/getWishList', async () => {
  const response = await axios.get(userWishlistUrl);
  return response.data;
});

// const wishListSlice = createSlice({
//   name: 'wishlist',
//   initialState: wishlistInitialState
// })

const wishlistReducer = (state = wishlistInitialState, action) => {
  switch (action.type) {
    case FETCH_WISHLIST:
      return action.payload;
    default:
      return state;
  }
};

export default wishlistReducer;

export { getWishList };
