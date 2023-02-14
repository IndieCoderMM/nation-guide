import axios from 'axios';

const BASE_URL = 'https://restcountries.com/v3.1/';

const getAll = () => axios.get(`${BASE_URL}all`);

const CountriesService = { getAll };

export default CountriesService;
