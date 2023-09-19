import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import CountriesService from '../services/CountiresService';

export const getAllCountries = createAsyncThunk(
  'countries/getAll',
  async () => {
    const res = await CountriesService.getAll();
    const data = await res.data;

    return data.map((country) => ({
      ...country,
      flag: { png: country.flags.png, alt: country.flags.alt },
      // Fixing data error from API
      area: country.area > 0 ? country.area : 61022,
      capital: country.capital[0] || 'No capital',
    }));
  },
);

export const COUNTRIES_STATUS = {
  IDLE: 'idle',
  LOADING: 'loading',
  SUCCESS: 'success',
  ERROR: 'error',
};

const initialState = {
  status: COUNTRIES_STATUS.IDLE,
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
        status: COUNTRIES_STATUS.SUCCESS,
      }))
      .addCase(getAllCountries.pending, (state) => ({
        ...state,
        status: COUNTRIES_STATUS.LOADING,
      }))
      .addCase(getAllCountries.rejected, (state, action) => ({
        ...state,
        status: COUNTRIES_STATUS.ERROR,
        error: action.error.message,
      }));
  },
});

export const selectAllCountries = (state) => state.countries.data;
export const selectCountriesStatus = (state) => state.countries.status;

export default countriesSlice.reducer;
