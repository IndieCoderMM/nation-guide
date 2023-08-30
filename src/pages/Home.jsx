import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Navbar from '../components/Navbar';
import SearchBox from '../components/SearchBox';
import SortingBox from '../components/SortingBox';
import CountryCard from '../components/CountryCard';
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

  return (
    <>
      <Navbar />
      <main className="max-container">
        <SearchBox query={query} setQuery={setQuery} />
        <SortingBox sorter={sorter} setSorter={setSorter} />
        <Countries countries={data} />
      </main>
    </>
  );
};

export default Home;