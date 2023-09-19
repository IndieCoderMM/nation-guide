import { SORTING_OPTIONS } from './constants';

/**
 * Generate a slug from a string.
 *
 * @param {string} name
 * @returns {string}
 */
export const generateSlug = (name) => name.toLowerCase().replace(/\s+/g, '-');

/**
 * Filter and sort a list of countries based on search query and sorting criteria.
 *
 * @param {string} query - The search query to filter countries by name.
 * @param {string} sorter - The sorting criteria ('area-d', 'area-a', 'name-d', 'name-a').
 * @param {Array} data - An array of country objects.
 * @returns {Array} - The filtered and sorted list of countries.
 */
export const filterAndSortCountries = (query, sorter, data) => {
  const validSorters = Object.values(SORTING_OPTIONS);
  if (!validSorters.includes(sorter)) {
    throw new Error('Invalid sorter');
  }

  const getName = (country) => country.name.common.toLowerCase();

  const filteredCountries = query.trim()
    ? data.filter((country) => getName(country).includes(query.toLowerCase()))
    : data;

  const sortedCountries = [...filteredCountries];

  if (sorter === SORTING_OPTIONS.AREA_DESC) {
    sortedCountries.sort((a, b) => b.area - a.area);
  } else if (sorter === SORTING_OPTIONS.AREA_ASC) {
    sortedCountries.sort((a, b) => a.area - b.area);
  } else if (sorter === SORTING_OPTIONS.NAME_DESC) {
    sortedCountries.sort((a, b) => a.name.common.localeCompare(b.name.common));
  } else if (sorter === SORTING_OPTIONS.NAME_ASC) {
    sortedCountries.sort((a, b) => b.name.common.localeCompare(a.name.common));
  }

  return sortedCountries;
};
