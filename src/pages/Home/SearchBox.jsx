import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FiSearch } from 'react-icons/fi';

import styles from './styles/SearchBox.module.css';
import { selectQuery, setQuery } from '../../redux/displaySettingsSlice';
import useDebouncedState from '../../hooks/useDebouncedState';

const SearchBox = () => {
  const query = useSelector(selectQuery);
  const [searchQuery, setSearchQuery] = useState(query);
  const [debouncedQuery, setDebouncedQuery] = useDebouncedState(
    searchQuery,
    300,
  );
  const dispatch = useDispatch();

  const handleQueryChange = (event) => {
    setSearchQuery(event.target.value);
    setDebouncedQuery(event.target.value);
  };

  useEffect(() => {
    dispatch(setQuery(debouncedQuery));
  }, [debouncedQuery, dispatch]);

  return (
    <div className={styles.container}>
      <FiSearch />
      <input
        type="text"
        name="country"
        aria-label="Search country"
        className={styles.input}
        value={searchQuery}
        onChange={handleQueryChange}
        placeholder="Search country"
        maxLength={80}
      />
    </div>
  );
};

export default SearchBox;
