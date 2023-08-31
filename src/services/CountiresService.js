import axios from 'axios';

const BASE_URL = 'https://restcountries.com/v3.1';

const getAll = () =>
  axios.get(
    `${BASE_URL}/all?fields=name,area,capital,continents,region,flags,timezones,population,currencies,altSpellings,latlng,coatOfArms,maps,landlocked`,
  );

const CountriesService = { getAll };

export default CountriesService;
