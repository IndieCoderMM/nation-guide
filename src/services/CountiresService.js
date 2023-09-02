import axios from 'axios';

const BASE_URL = 'https://restcountries.com/v3.1';

const FIELDS_TO_INCLUDE = [
  'name',
  'area',
  'capital',
  'continents',
  'region',
  'subregion',
  'flags',
  'timezones',
  'population',
  'currencies',
  'altSpellings',
  'latlng',
  'coatOfArms',
  'maps',
  'tld',
  'landlocked',
];

// Convert the array of fields into a comma-separated string
const FIELDS_STRING = FIELDS_TO_INCLUDE.join(',');

const getAll = async () => axios.get(`${BASE_URL}/all?fields=${FIELDS_STRING}`);

const CountriesService = { getAll };

export default CountriesService;
