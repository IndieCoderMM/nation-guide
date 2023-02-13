import axios from 'axios';

const BASE_URL = 'https://restcountries.com/v3.1/';

export const getAll = () => axios.get(BASE_URL + 'all');
