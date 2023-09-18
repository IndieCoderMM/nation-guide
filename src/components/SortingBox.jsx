import React from 'react';
import PropTypes from 'prop-types';
import Dropdown from './Dropdown';
import styles from '../styles/SortingBox.module.css';
import { sortingOptions } from '../lib/constants';

const SortingBox = ({ sorter, setSorter }) => (
  <div className={styles.container}>
    <Dropdown
      options={sortingOptions}
      defaultValue={sorter}
      onChange={setSorter}
    />
  </div>
);

SortingBox.propTypes = {
  sorter: PropTypes.oneOf(sortingOptions).isRequired,
  setSorter: PropTypes.func.isRequired,
};

export default SortingBox;
