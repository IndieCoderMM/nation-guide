import { SORTING_OPTIONS } from './constants';

/**
 * Generate a slug from a string.
 *
 * @param {string} name
 * @returns {string}
 */
export const generateSlug = (name) => name.toLowerCase().replace(/\s+/g, '-');

/**
 * Sort a list of countries based on sorting criteria.
 * @param {string} sorter - The sorting criteria ('area-d', 'area-a', 'name-d', 'name-a').
 * @param {Array} data - An array of country objects.
 * @returns {Array} - The filtered and sorted list of countries.
 */
export const sortCountries = (sorter, data) => {
  const validSorters = Object.values(SORTING_OPTIONS);
  if (!validSorters.includes(sorter)) {
    throw new Error('Invalid sorter!');
  }

  const sortedCountries = [...data];

  if (sorter === SORTING_OPTIONS.AREA_DESC) {
    sortedCountries.sort((a, b) => b.area - a.area);
  } else if (sorter === SORTING_OPTIONS.AREA_ASC) {
    sortedCountries.sort((a, b) => a.area - b.area);
  } else if (sorter === SORTING_OPTIONS.NAME_ASC) {
    sortedCountries.sort((a, b) => a.name.common.localeCompare(b.name.common));
  } else if (sorter === SORTING_OPTIONS.NAME_DESC) {
    sortedCountries.sort((a, b) => b.name.common.localeCompare(a.name.common));
  }

  return sortedCountries;
};

/**
 * Query a list of countries based on search query
 * @param {string} query The search query to filter countries by name.
 * @param {Array} data
 * @returns {Array}
 */
export const queryCountries = (query, data) => {
  const searchTerm = query.trim();
  if (searchTerm) {
    return data.filter(
      (country) =>
        // eslint-disable-next-line
        country.name.common.toLowerCase().includes(searchTerm.toLowerCase()),
      // eslint-disable-next-line
    );
  }

  return data;
};
