import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import SearchBox from '../components/SearchBox';
import SortingBox from '../components/SortingBox';
import Countries from '../components/Countries';
import PageHolder from '../components/PageHolder';
import Loading from '../components/Loading';
import { getAllCountries } from '../redux/countries';
import { filterAndSortCountries } from '../lib/utils';
import { sortingOptions } from '../lib/constants';

const Home = () => {
  const [query, setQuery] = useState('');
  const [sorter, setSorter] = useState(sortingOptions[0]);
  const [displayCount, setDisplayCount] = useState(12);
  const [loadingMore, setLoadingMore] = useState(false);
  const data = useSelector((state) => state.data);
  const status = useSelector((state) => state.status);
  const dispatch = useDispatch();

  useEffect(() => {
    if (status === 'idle') dispatch(getAllCountries());
  }, [status, dispatch]);

  const countries = filterAndSortCountries(query, sorter.value, data).slice(
    0,
    displayCount,
  );

  if (status === 'loading') {
    return <Loading />;
  }
  return (
    <main className="maxContainer">
      <div className="flexBetween">
        <SearchBox query={query} setQuery={setQuery} />
        <SortingBox sorter={sorter} setSorter={setSorter} />
      </div>
      {countries.length === 0 ? (
        <PageHolder
          title="No countries found"
          message="Please try again with a different search term."
          showHome={false}
        />
      ) : (
        <>
          <Countries countries={countries} />
          {loadingMore && (
            <div className="loadingContainer">
              <div className="loadingSpinner" />
              <p>Loading more countries...</p>
            </div>
          )}
          {query.length === 0 && !loadingMore && (
            <button
              type="button"
              className="btn"
              onClick={() => {
                setLoadingMore(true);
                setTimeout(() => {
                  setDisplayCount(displayCount + 12);
                  setLoadingMore(false);
                }, 2000);
              }}
            >
              Load More
            </button>
          )}
        </>
      )}
    </main>
  );
};

export default Home;
