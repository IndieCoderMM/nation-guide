import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getAll } from '../services/CountiresService';

export const getAllCountries = createAsyncThunk(
  'countries/getAll',
  async () => {
    const res = await getAll();
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
        latlng,
        coatOfArms,
      } = country;
      return {
        name,
        area,
        capital,
        population,
        continents,
        currencies,
        region,
        flags,
        timezones,
        latlng,
        coatOfArms,
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
    builder.addCase(getAllCountries.fulfilled, (state, action) => {
      state.data = action.payload;
      state.status = 'success';
      console.log('API called');
    });
  },
});

export default countriesSlice.reducer;
