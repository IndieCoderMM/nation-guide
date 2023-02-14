import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { FiSearch } from 'react-icons/fi';
import { BsFillMicFill } from 'react-icons/bs';
import { AiFillSetting } from 'react-icons/ai';
import { getAllCountries } from '../redux/countries';
import CountryCard from './CountryCard';

const CountriesList = () => {
  const countriesData = useSelector((state) => state.data);
  const status = useSelector((state) => state.status);
  const [count, setCount] = useState(11);
  const [query, setQuery] = useState('');
  const [sorter, setSorter] = useState('area-d');
  const dispatch = useDispatch();

  useEffect(() => {
    if (status === 'idle') dispatch(getAllCountries());
  }, [status, dispatch]);

  const countries = query.trim()
    ? [...countriesData].filter((c) => c.name.common.toLowerCase().includes(query))
    : [...countriesData];

  if (sorter === 'area-d') countries.sort((a, b) => b.area - a.area);
  else if (sorter === 'area-a') countries.sort((a, b) => a.area - b.area);
  else if (sorter === 'name-d') countries.sort((a, b) => (a.name.common > b.name.common ? 1 : -1));
  else if (sorter === 'name-a') countries.sort((a, b) => (a.name.common < b.name.common ? 1 : -1));

  return (
    <section className="homepage">
      <div className="toolbar">
        <h1 className="brand">
          <Link to="/">NationGuide</Link>
        </h1>
        <form className="search-box" onSubmit={(e) => e.preventDefault()}>
          <FiSearch />
          <input
            type="text"
            className="search-input"
            value={query}
            onChange={(e) => setQuery(e.target.value.toLowerCase())}
            placeholder="Search country by name"
            maxLength={50}
          />
        </form>
        <div className="d-row">
          <BsFillMicFill />
          <AiFillSetting />
        </div>
      </div>
      {countries.length && (
        <CountryCard
          className="feature-item"
          key={countries[0].name.common}
          name={countries[0].name}
          area={countries[0].area}
          flagPng={countries[0].flags.png}
          flagAlt={countries[0].flags.alt}
        />
      )}
      <h2 className="bar-item">
        <select value={sorter} onChange={(e) => setSorter(e.target.value)}>
          <option value="area-d">Sort by Area ⬇</option>
          <option value="area-a">Sort by Area ⬆</option>
          <option value="name-d">Sort by Name ⬇</option>
          <option value="name-a">Sort by Area ⬆</option>
        </select>
      </h2>
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
