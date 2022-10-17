import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { apiKey, mySteamUserID } from '../../apiKey';

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
  if (action.type === 'show') {
    return action.payload;
  }
};

export default wishlistReducer;

export { getWishList };
