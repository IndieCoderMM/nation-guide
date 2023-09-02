import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import SearchBox from '../components/SearchBox';
import SortingBox from '../components/SortingBox';
import Countries from '../components/Countries';
import PageHolder from '../components/PageHolder';
import Loading from '../components/Loading';
import { getAllCountries } from '../redux/countries';
import { filterAndSortCountries } from '../lib/utils';

const Home = () => {
  const [query, setQuery] = useState('');
  const [sorter, setSorter] = useState('area-d');
  const data = useSelector((state) => state.data);
  const status = useSelector((state) => state.status);
  const dispatch = useDispatch();

  useEffect(() => {
    if (status === 'idle') dispatch(getAllCountries());
  }, [status, dispatch]);

  const countries = filterAndSortCountries(query, sorter, data);

  if (status === 'loading') {
    return <Loading />;
  }
  return (
    <main className="maxContainer">
      <SearchBox query={query} setQuery={setQuery} />
      <SortingBox sorter={sorter} setSorter={setSorter} />
      {countries.length === 0 ? (
        <PageHolder
          title="No countries found"
          message="Please try again with a different search term."
          showHome={false}
        />
      ) : (
        <Countries countries={countries.slice(0, 12)} />
      )}
    </main>
  );
};

export default Home;
