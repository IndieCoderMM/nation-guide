import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getAllCountries } from '../redux/countries';
import CountryCard from './CountryCard';

const CountriesList = () => {
  const countries = useSelector((state) => state.data);
  const status = useSelector((state) => state.status);
  const dispatch = useDispatch();

  useEffect(() => {
    if (status === 'idle') dispatch(getAllCountries());
    console.log('Countries:', countries);
  }, [status, dispatch]);

  return (
    <section className="homepage">
      {countries.length && (
        <CountryCard
          className="feature-item"
          key={countries[0].name.common}
          name={countries[0].name}
          area={countries[0].area}
          flags={countries[0].flags}
        />
      )}
      <h2 className="bar-item">Stats by Country</h2>
      <div className="main-grid">
        {countries.slice(1, 10).map((c) => (
          <CountryCard
            key={c.name.common}
            className="grid-item"
            name={c.name}
            area={c.area}
            flags={c.flags}
          />
        ))}
      </div>
    </section>
  );
};

export default CountriesList;
