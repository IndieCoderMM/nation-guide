import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import CountriesService from '../services/CountiresService';

export const getAllCountries = createAsyncThunk(
  'countries/getAll',
  async () => {
    const res = await CountriesService.getAll();
    const data = await res.data;

    return data.map((country) => ({
      ...country,
      flag: country.flags.png,
      flagAlt: country.flags.alt,
      // Fixing data error from API
      area: country.area > 0 ? country.area : 61022,
      capital: country.capital[0] || 'No capital',
    }));
  },
);

const initialState = {
  status: 'idle',
  data: [],
  error: '',
};

const countriesSlice = createSlice({
  name: 'countries',
  initialState,
  extraReducers(builder) {
    builder
      .addCase(getAllCountries.fulfilled, (state, action) => ({
        ...state,
        data: action.payload,
        status: 'success',
      }))
      .addCase(getAllCountries.pending, (state) => ({
        ...state,
        status: 'loading',
      }))
      .addCase(getAllCountries.rejected, (state, action) => ({
        ...state,
        status: 'error',
        error: action.error.message,
      }));
  },
});

export default countriesSlice.reducer;
