import { createSlice } from '@reduxjs/toolkit';
import { SORTING_OPTIONS } from '../lib/constants';

const initialState = {
  query: '',
  sorter: SORTING_OPTIONS.AREA_ASC,
};

const displaySettingsSlice = createSlice({
  name: 'displaySettings',
  initialState,
  reducers: {
    setQuery: (state, action) => ({
      ...state,
      query: action.payload,
    }),
    setSorter: (state, action) => ({
      ...state,
      sorter: action.payload,
    }),
  },
});

export const { setQuery, setSorter } = displaySettingsSlice.actions;
export const selectQuery = (state) => state.displaySettings.query;
export const selectSorter = (state) => state.displaySettings.sorter;

export default displaySettingsSlice.reducer;
