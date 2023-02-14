import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCountries } from '../redux/countries';
import { BsFillMicFill } from 'react-icons/bs';
import { AiFillSetting } from 'react-icons/ai';
import CountryCard from './CountryCard';

const CountriesList = () => {
  const countries = useSelector((state) => state.data);
  const status = useSelector((state) => state.status);
  const [count, setCount] = useState(11);
  const dispatch = useDispatch();

  useEffect(() => {
    if (status === 'idle') dispatch(getAllCountries());
  }, [status, dispatch]);

  const sortedCountries = [...countries];
  sortedCountries.sort((a, b) => b.area - a.area);

  return (
    <section className="homepage">
      <div className="toolbar">
        <p>All Countries</p>
        <div className="d-row">
          <BsFillMicFill />
          <AiFillSetting />
        </div>
      </div>
      {sortedCountries.length && (
        <CountryCard
          className="feature-item"
          key={sortedCountries[0].name.common}
          name={sortedCountries[0].name}
          area={sortedCountries[0].area}
          flags={sortedCountries[0].flags}
        />
      )}
      <h2 className="bar-item">Stats by Country</h2>
      <div className="main-grid">
        {sortedCountries.slice(1, count).map((c) => (
          <CountryCard
            key={c.name.common}
            className="grid-item"
            name={c.name}
            area={c.area}
            flags={c.flags}
          />
        ))}
      </div>
      <div className="btn-container">
        <button
          className="more-btn"
          type="button"
          onClick={() => setCount((count) => count + 10)}
        >
          Load More
        </button>
      </div>
    </section>
  );
};

export default CountriesList;
