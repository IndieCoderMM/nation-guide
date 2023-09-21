import { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FaArrowUp, FaMoon } from 'react-icons/fa';
import { BsSunFill } from 'react-icons/bs';

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

import Countries from './Countries';
import Pagination from './Pagination';
import ActionsBar from './ActionsBar';
import FloatingActions from '../../components/FloatingActions';
import useTheme from '../../hooks/useTheme';
import useScroll from '../../hooks/useScroll';

const PER_PAGE = 12;

const Home = () => {
  const query = useSelector(selectQuery);
  const sorter = useSelector(selectSorter);
  const page = useSelector(selectPage);

  const data = useSelector(selectAllCountries);
  const status = useSelector(selectCountriesStatus);
  const dispatch = useDispatch();

  const [theme, setTheme] = useTheme();
  const scrollY = useScroll();

  // Scroll to top on first render and on page change
  useEffect(() => window.scrollTo(0, 0), []);
  useEffect(() => window.scrollTo(0, 0), [page]);

  useEffect(() => {
    if (status === COUNTRIES_STATUS.IDLE) dispatch(getAllCountries());
  }, [status, dispatch]);

  // Sort countries and filter them by query
  const sortedCountries = useMemo(
    () => sortCountries(sorter, data),
    [sorter, data],
  );

  const [startIdx, endIdx] = [page * PER_PAGE, (page + 1) * PER_PAGE];

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
        title="Connection Timeout!"
        message="We couldn't connect to the server. Please try again later."
      />
    );
  }

  // eslint-disable-next-line operator-linebreak
  const countriesToShow =
    query.trim().length > 0 ? selectedCountries : allCountries;

  return (
    <main className="maxContainer">
      <ActionsBar />
      {query && countriesToShow.length === 0 ? (
        <PageHolder title="No countries found!" message="Try another search." />
      ) : (
        <>
          <Countries countries={countriesToShow} />
          {!query && (
            <Pagination total={sortedCountries.length} limit={PER_PAGE} />
          )}
        </>
      )}
      <FloatingActions
        actions={[
          // Check if user has scrolled down
          {
            label: 'Scroll to Top',
            icon: <FaArrowUp />,
            onClick: () => window.scrollTo(0, 0),
            show: scrollY > 100,
          },
          {
            label: 'Switch Theme',
            icon: theme === 'dark' ? <FaMoon /> : <BsSunFill />,
            onClick: () => setTheme(theme === 'dark' ? 'light' : 'dark'),
            show: true,
          },
        ]}
      />
    </main>
  );
};

export default Home;
