import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import PageHolder from '../../components/PageHolder';
import Loading from '../../components/Loading';
import { filterAndSortCountries } from '../../lib/utils';
import {
  selectAllCountries,
  selectCountriesStatus,
  getAllCountries,
  COUNTRIES_STATUS,
} from '../../redux/countriesSlice';

import SearchBox from './SearchBox';
import SortingBox from './SortingBox';
import Countries from './Countries';
import { selectQuery, selectSorter } from '../../redux/displaySettingsSlice';

const Home = () => {
  const query = useSelector(selectQuery);
  const sorter = useSelector(selectSorter);
  const [displayCount, setDisplayCount] = useState(12);
  const [loadingMore, setLoadingMore] = useState(false);
  const data = useSelector(selectAllCountries);
  const status = useSelector(selectCountriesStatus);
  const dispatch = useDispatch();

  useEffect(() => window.scrollTo(0, 0), []);

  useEffect(() => {
    if (status === COUNTRIES_STATUS.IDLE) dispatch(getAllCountries());
  }, [status, dispatch]);

  const countries = filterAndSortCountries(query, sorter, data).slice(
    0,
    displayCount,
  );

  if (status === COUNTRIES_STATUS.LOADING) {
    return <Loading />;
  }

  if (status === COUNTRIES_STATUS.ERROR) {
    return (
      <PageHolder
        title="Something went wrong!"
        message="There was an error while loading data. Please try again later."
      />
    );
  }

  return (
    <main className="maxContainer">
      <div className="flexBetween">
        <SearchBox />
        <SortingBox />
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
              className="btn rounded"
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
