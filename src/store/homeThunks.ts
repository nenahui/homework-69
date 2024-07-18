import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosApi from '../axiosApi';
import { ApiShows, Complete } from '../types';

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
