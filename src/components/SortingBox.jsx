import React from 'react';
import PropTypes from 'prop-types';
import styles from './SortingBox.module.css';

// eslint-disable
const SortingBox = ({ sorter, setSorter }) => (
  <div className={styles.container}>
    <select
      className={styles.select}
      value={sorter}
      onChange={(e) => setSorter(e.target.value)}
    >
      <option value="area-d">Sort by Area [D]</option>
      <option value="area-a">Sort by Area [A]</option>
      <option value="name-d">Sort by Name [A]</option>
      <option value="name-a">Sort by Name [D]</option>
    </select>
  </div>
);

SortingBox.propTypes = {
  sorter: PropTypes.string.isRequired,
  setSorter: PropTypes.func.isRequired,
};

// eslint-enable

export default SortingBox;
