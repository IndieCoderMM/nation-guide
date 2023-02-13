import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getAll } from '../services/CountiresService';

const extractData = (country) => {
  const { name, area, capital, continents, flags, timezones } = country;
};

export const getAllCountries = createAsyncThunk(
  'countries/getAll',
  async () => {
    const res = await getAll();
    const data = await res.data;
    return data.map((country) => {
      const { name, area, capital, continents, flags, timezones, population } =
        country;
      return {
        name,
        area,
        capital,
        population,
        continents,
        flags,
        timezones,
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
    });
  },
});

export default countriesSlice.reducer;
