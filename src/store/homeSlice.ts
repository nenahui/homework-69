import { ApiShow, Complete } from '../types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchShow, fetchShows } from './homeThunks';

interface HomeState {
  options: Complete[];
  show: ApiShow | null;
  isLoading: boolean;
  isShowFetching: boolean;
}

const initialState: HomeState = {
  options: [],
  show: null,
  isLoading: false,
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

    builder
      .addCase(fetchShow.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchShow.fulfilled, (state, action: PayloadAction<ApiShow | null>) => {
        state.isLoading = false;
        state.show = action.payload;
      })
      .addCase(fetchShow.rejected, (state) => {
        state.isLoading = false;
      });
  },
});
