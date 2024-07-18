import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosApi from '../axiosApi';
import { ApiShow, ApiShows, Complete } from '../types';

export const fetchShows = createAsyncThunk<Complete[], string>(
  'home/fetchShows',
  async (query: string) => {
    try {
      const { data: shows } = await axiosApi.get<ApiShows[]>(`/search/shows?q=${query}`);

      return shows.map(
        (show): Complete => ({
          value: show.show.name,
          key: show.show.id,
        })
      );
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
);

export const fetchShow = createAsyncThunk<ApiShow | null, string>(
  'home/fetchShow',
  async (showId: string) => {
    try {
      const { data: show } = await axiosApi.get<ApiShow>(`/shows/${showId}`);

      if (show.status === 404) {
        return null;
      }

      return show;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
);
