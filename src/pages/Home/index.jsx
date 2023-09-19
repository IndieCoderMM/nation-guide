import { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import PageHolder from '../../components/PageHolder';
import Loading from '../../components/Loading';
import { queryCountries, sortCountries } from '../../lib/utils';
import {
  selectAllCountries,
  selectCountriesStatus,
  getAllCountries,
  COUNTRIES_STATUS,
} from '../../redux/countriesSlice';
import {
  selectPage,
  selectQuery,
  selectSorter,
} from '../../redux/displaySettingsSlice';

import SearchBox from './SearchBox';
import SortingBox from './SortingBox';
import Countries from './Countries';

const Home = () => {
  const query = useSelector(selectQuery);
  const sorter = useSelector(selectSorter);
  const page = useSelector(selectPage);

  const data = useSelector(selectAllCountries);
  const status = useSelector(selectCountriesStatus);
  const dispatch = useDispatch();

  useEffect(() => window.scrollTo(0, 0), []);

  useEffect(() => {
    if (status === COUNTRIES_STATUS.IDLE) dispatch(getAllCountries());
  }, [status, dispatch]);

  const sortedCountries = useMemo(
    () => sortCountries(sorter, data),
    [sorter, data],
  );

  const [startIdx, endIdx] = [page * 12, (page + 1) * 12];

  const allCountries = sortedCountries.slice(startIdx, endIdx);

  const selectedCountries = useMemo(
    () => queryCountries(query, sortedCountries),
    [query, sortedCountries],
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

  // eslint-disable-next-line operator-linebreak
  const countriesToShow =
    query.trim().length > 0 ? selectedCountries : allCountries;

  return (
    <main className="maxContainer">
      <div className="flexBetween">
        <SearchBox />
        <SortingBox />
      </div>
      {query && countriesToShow.length === 0 ? (
        <PageHolder title="No countries found!" message="Try another search." />
      ) : (
        <Countries countries={countriesToShow} />
      )}
    </main>
  );
};

export default Home;
