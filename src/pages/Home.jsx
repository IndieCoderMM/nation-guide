import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Navbar from '../components/Navbar';
import SearchBox from '../components/SearchBox';
import SortingBox from '../components/SortingBox';
import CountryCard from '../components/CountryCard';
import { getAllCountries } from '../redux/countries';

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
      <main className="page-container">
        <SearchBox query={query} setQuery={setQuery} />
        <SortingBox sorter={sorter} setSorter={setSorter} />
        <section>
          <div className="main-grid">
            {data.map((c) => (
              <CountryCard
                key={c.name.common}
                className="grid-item"
                name={c.name}
                area={c.area}
                flagPng={c.flags.png}
                flapAlt={c.flags.alt}
              />
            ))}
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
