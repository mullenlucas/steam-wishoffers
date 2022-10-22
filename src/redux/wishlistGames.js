import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { mySteamUserID } from '../../apiKey';

// Actions
const FETCH_WISHLIST = 'steam-data/FETCH_WISHLIST';

const userWishlistUrl = `https://store.steampowered.com/wishlist/profiles/${mySteamUserID}/wishlistdata/`;
const wishlistInitialState = [];

const getWishlist = createAsyncThunk(FETCH_WISHLIST, async () => {
  const response = await axios.get(userWishlistUrl);
  return response.data;
});

const wishlistReducer = (state = wishlistInitialState, action) => {
  switch (action.type) {
    case `${FETCH_WISHLIST}/pending`:
      return [];
    case `${FETCH_WISHLIST}/fulfilled`:
      return action.payload;
    default:
      return state;
  }
};

export default wishlistReducer;

export { getWishlist };
