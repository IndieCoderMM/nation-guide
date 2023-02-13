import { configureStore } from '@reduxjs/toolkit';
import CountriesReducer from './countries';

export default configureStore({ reducer: CountriesReducer });
