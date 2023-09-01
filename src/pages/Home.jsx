import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SearchBox from '../components/SearchBox';
import SortingBox from '../components/SortingBox';
import { getAllCountries } from '../redux/countries';
import Countries from '../components/Countries';

const Home = () => {
  const [query, setQuery] = useState('');
  const [sorter, setSorter] = useState('area-d');
  const data = useSelector((state) => state.data);
  const status = useSelector((state) => state.status);
  const dispatch = useDispatch();

  useEffect(() => {
    if (status === 'idle') dispatch(getAllCountries());
  }, [status, dispatch]);

  // Search Feature
  const countries = query.trim()
    ? [...data].filter((c) => c.name.common.toLowerCase().includes(query))
    : [...data];

  // Sort Feature
  if (sorter === 'area-d') {
    countries.sort((a, b) => b.area - a.area);
  } else if (sorter === 'area-a') {
    countries.sort((a, b) => a.area - b.area);
  } else if (sorter === 'name-d') {
    countries.sort((a, b) => (a.name.common > b.name.common ? 1 : -1));
  } else if (sorter === 'name-a') {
    countries.sort((a, b) => (a.name.common < b.name.common ? 1 : -1));
  }

  return (
    <main className="maxContainer">
      <SearchBox query={query} setQuery={setQuery} />
      <SortingBox sorter={sorter} setSorter={setSorter} />
      <Countries countries={countries.slice(0, 12)} />
    </main>
  );
};

export default Home;
