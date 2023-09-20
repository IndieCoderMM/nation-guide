import { configureStore } from '@reduxjs/toolkit';
import CountriesReducer from './countriesSlice';
import DisplaySettingsReducer from './displaySettingsSlice';

export default configureStore({
  reducer: {
    countries: CountriesReducer,
    displaySettings: DisplaySettingsReducer,
  },
});
