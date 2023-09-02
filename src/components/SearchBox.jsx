import React from 'react';
import { FiSearch } from 'react-icons/fi';
import PropTypes from 'prop-types';
import styles from '../styles/SearchBox.module.css';

const SearchBox = ({ query, setQuery }) => (
  <div className={styles.container}>
    <FiSearch />
    <input
      type="text"
      name="country"
      aria-label="Search country by name"
      className={styles.input}
      value={query}
      onChange={(e) => setQuery(e.target.value.toLowerCase())}
      placeholder="Search country by name"
      maxLength={80}
    />
  </div>
);

SearchBox.propTypes = {
  query: PropTypes.string.isRequired,
  setQuery: PropTypes.func.isRequired,
};

export default SearchBox;
