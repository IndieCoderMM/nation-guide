import React from 'react';
import PropTypes from 'prop-types';
import Dropdown from './Dropdown';
import styles from '../styles/SortingBox.module.css';

const SortingBox = ({ sorter, setSorter }) => (
  <div className={styles.container}>
    <Dropdown
      options={[
        { value: 'area-d', label: 'Sort by Area [D]' },
        { value: 'area-a', label: 'Sort by Area [A]' },
        { value: 'name-d', label: 'Sort by Name [D]' },
        { value: 'name-a', label: 'Sort by Name [A]' },
      ]}
      value={sorter}
      onChange={setSorter}
    />
  </div>
);

SortingBox.propTypes = {
  sorter: PropTypes.string.isRequired,
  setSorter: PropTypes.func.isRequired,
};

export default SortingBox;