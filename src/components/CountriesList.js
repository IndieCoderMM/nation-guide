import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getAllCountries } from '../redux/countries';

const CountriesList = () => {
  const countries = useSelector((state) => state.data);
  const status = useSelector((state) => state.status);
  const dispatch = useDispatch();

  useEffect(() => {
    if (status === 'idle') dispatch(getAllCountries());
  }, [status, dispatch]);
  console.log('Countries:', countries);
  return (
    <div>
      {countries.slice(0, 10).map((c) => (
        <li key={c.area}>
          <h2>{c.name.common}</h2>
          <img src={c.flags.png} alt={c.flags.alt} width={100} />
          <Link to={`/country/${c.name.common}`}>View Detail</Link>
        </li>
      ))}
    </div>
  );
};

export default CountriesList;
