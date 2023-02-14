import React, { useEffect } from 'react';
import { AiFillSetting } from 'react-icons/ai';
import { BsFillArrowLeftSquareFill, BsFillMicFill } from 'react-icons/bs';
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import DataItem from './DataItem';

const CountryDetail = () => {
  const params = useParams();
  const countries = useSelector((state) => state.data);
  const country = countries.find((c) => c.name.common === params.name);

  useEffect(() => window.scrollTo(0, 0), []);

  return (
    <section className="detail-page">
      <div className="toolbar">
        <Link to="/">
          <BsFillArrowLeftSquareFill />
        </Link>
        <p>Country Views</p>
        <div className="d-row">
          <BsFillMicFill />
          <AiFillSetting />
        </div>
      </div>
      <div className="feature-item">
        <img
          className="feature-flag"
          src={country.flags.png}
          alt={country.flags.alt}
        />
        <div className="d-row">
          <h2>{country.name.common}</h2>
          {country.coatOfArms.png && (
            <img
              className="logo"
              src={country.coatOfArms.png}
              alt="Coat of Arms"
            />
          )}
        </div>
      </div>
      <h2 className="bar-item">Country Detail</h2>
      <div className="detail-list">
        <DataItem title="Continent" data={country.continents[0]} />
        <DataItem title="Capital City" data={country.capital[0]} />
        <DataItem title="Timezone" data={country.timezones[0]} />
        <DataItem title="Latitude" data={country.latlng[0]} unit="&#176;" />
        <DataItem title="Longitude" data={country.latlng[1]} unit="&#176;" />
        <DataItem title="Area" data={country.area} unit=" km²" />
        <DataItem title="Population" data={country.population} />
        <DataItem title="Currency" data={Object.keys(country.currencies)[0]} />
      </div>
    </section>
  );
};

export default CountryDetail;
