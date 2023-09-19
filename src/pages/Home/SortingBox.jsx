import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Dropdown from '../../components/Dropdown';
import { SORTING_OPTIONS } from '../../lib/constants';

import styles from './styles/SortingBox.module.css';
import { selectSorter } from '../../redux/displaySettingsSlice';

const sortingOptions = [
  { label: 'Area (asc)', value: SORTING_OPTIONS.AREA_ASC },
  { label: 'Area (desc)', value: SORTING_OPTIONS.AREA_DESC },
  { label: 'Name (asc)', value: SORTING_OPTIONS.NAME_ASC },
  { label: 'Name (desc)', value: SORTING_OPTIONS.NAME_DESC },
];

const SortingBox = () => {
  const sorter = useSelector(selectSorter);
  const dispatch = useDispatch();

  const setSorter = (option) => {
    dispatch(setSorter(option.value));
  };

  return (
    <div className={styles.container}>
      <Dropdown
        options={sortingOptions}
        defaultValue={sorter}
        onChange={setSorter}
      />
    </div>
  );
};

export default SortingBox;
