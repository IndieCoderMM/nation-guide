import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import CountriesService from '../services/CountiresService';

export const getAllCountries = createAsyncThunk(
  'countries/getAll',
  async () => {
    const res = await CountriesService.getAll();
    const data = await res.data;
    return data.map((country) => {
      const {
        name,
        area,
        capital,
        continents,
        region,
        flags,
        timezones,
        population,
        currencies,
        altSpellings,
        latlng,
        coatOfArms,
        maps,
        landlocked,
      } = country;

      return {
        name,
        // Fixing data error from API
        area: area > 0 ? area : 61022,
        capital: capital[0],
        population,
        continents,
        currencies,
        altSpellings,
        region,
        flag: flags.png,
        flagAlt: flags.alt,
        timezones,
        latlng,
        coatOfArms,
        maps,
        landlocked,
      };
    });
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
