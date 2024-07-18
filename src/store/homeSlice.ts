import { Complete } from '../types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchShows } from './homeThunks';

interface HomeState {
  options: Complete[];
  isShowFetching: boolean;
}

const initialState: HomeState = {
  options: [],
  isShowFetching: false,
};

export const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchShows.pending, (state) => {
        state.isShowFetching = true;
      })
      .addCase(fetchShows.fulfilled, (state, action: PayloadAction<Complete[]>) => {
        state.isShowFetching = false;
        state.options = action.payload;
      })
      .addCase(fetchShows.rejected, (state) => {
        state.isShowFetching = false;
      });
  },
});
