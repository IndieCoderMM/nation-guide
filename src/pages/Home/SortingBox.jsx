import React from 'react';
import PropTypes from 'prop-types';
import Dropdown from '../../components/Dropdown';
import { SORTING_OPTIONS } from '../../lib/constants';

import styles from './styles/SortingBox.module.css';

const sortingOptions = [
  { label: 'Area (asc)', value: SORTING_OPTIONS.AREA_ASC },
  { label: 'Area (desc)', value: SORTING_OPTIONS.AREA_DESC },
  { label: 'Name (asc)', value: SORTING_OPTIONS.NAME_ASC },
  { label: 'Name (desc)', value: SORTING_OPTIONS.NAME_DESC },
];

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
