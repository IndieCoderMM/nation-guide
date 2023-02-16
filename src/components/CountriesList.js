import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { BsFillMicFill } from 'react-icons/bs';
import { AiFillSetting } from 'react-icons/ai';
import { getAllCountries } from '../redux/countries';
import CountryCard from './CountryCard';
import SortingBox from './SortingBox';
import SearchBox from './SearchBox';
import DisplayStatus from './DisplayStatus';

const CountriesList = () => {
  const data = useSelector((state) => state.data);
  const status = useSelector((state) => state.status);
  const [count, setCount] = useState(11);
  const [query, setQuery] = useState('');
  const [sorter, setSorter] = useState('area-d');
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
    <section className="homepage">
      <div className="toolbar">
        <h1 className="brand">
          <Link to="/">NationGuide</Link>
        </h1>
        <SearchBox query={query} setQuery={setQuery} />
        <div className="d-row">
          <BsFillMicFill />
          <AiFillSetting />
        </div>
      </div>
      {countries.length > 0 && (
        <CountryCard
          className="feature-item"
          name={countries[0].name}
          area={countries[0].area}
          flagPng={countries[0].flags.png}
          flagAlt={countries[0].flags.alt}
        />
      )}
      <SortingBox sorter={sorter} setSorter={setSorter} />
      <DisplayStatus status={status} />
      {countries.length === 0 && <DisplayStatus status="notfound" />}
      <div className="main-grid">
        {countries.slice(1, count).map((c) => (
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
      {count < countries.length && (
        <div className="btn-container">
          <button
            className="more-btn"
            type="button"
            onClick={() => setCount((count) => count + 10)}
          >
            Load More
          </button>
        </div>
      )}
    </section>
  );
};

export default CountriesList;
