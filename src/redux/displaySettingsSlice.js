import { createSlice } from '@reduxjs/toolkit';
import { SORTING_OPTIONS } from '../lib/constants';

const initialState = {
  query: '',
  sorter: SORTING_OPTIONS.AREA_ASC,
  page: 0,
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
    nextPage: (state) => ({
      ...state,
      page: state.page + 1,
    }),
    prevPage: (state) => ({
      ...state,
      page: state.page - 1,
    }),
    setPage: (state, action) => ({
      ...state,
      page: action.payload,
    }),
  },
});

// eslint-disable-next-line
export const { setQuery, setSorter, setPage, nextPage, prevPage } =
  displaySettingsSlice.actions;
export const selectQuery = (state) => state.displaySettings.query;
export const selectSorter = (state) => state.displaySettings.sorter;
export const selectPage = (state) => state.displaySettings.page;

export default displaySettingsSlice.reducer;
