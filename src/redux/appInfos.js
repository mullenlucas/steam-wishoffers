import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

// Actions
const FETCH_NEWS = 'steam-data/FETCH_NEWS';
const appnewsInitialState = [];

// Search: https://steamdb.info/apps/
const appIds = {
  Zomboid: 108600,
};

const appInfoUrl = (appid) => {
  const url = `http://api.steampowered.com/ISteamNews/GetNewsForApp/v0002/?appid=${appid}&count=3&maxlength=300&format=json`;
  return url;
};

export const fetchAppnews = (news) => ({
  type: FETCH_NEWS,
  payload: news,
});

const getAppNews = createAsyncThunk(FETCH_NEWS, async (dispatch) => {
  // const response = await axios.get(appInfoUrl(app));
  const response = await axios.get(appInfoUrl(appIds.Zomboid));
  const obj = response.data.appnews.newsitems;

  dispatch(fetchAppnews(obj));
});

const appNewsReducer = (state = appnewsInitialState, action) => {
  switch (action.type) {
    case FETCH_NEWS:
      return action.payload;
    default:
      return state;
  }
};

export default appNewsReducer;

export { getAppNews };
