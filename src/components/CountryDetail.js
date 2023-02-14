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
        <h1 className="brand">
          <Link to="/">NationGuide</Link>
        </h1>
        <div className="d-row">
          <BsFillMicFill />
          <AiFillSetting />
        </div>
      </div>
      <section className="feature-item">
        <div className="feature-header">
          <h1 className="country-title">{country.name.common}</h1>
          <span className="short-name">{country.altSpellings[0]}</span>
        </div>
        <img
          className="feature-flag"
          src={country.flags.png}
          alt={country.flags.alt}
        />
        <div>
          {country.coatOfArms.png && (
            <img
              className="logo"
              src={country.coatOfArms.png}
              alt="Coat of Arms"
            />
          )}
        </div>
      </section>
      <h2 className="bar-item">Detail Information</h2>
      <div className="detail-list">
        <DataItem title="Continent" data={country.continents[0]} />
        <DataItem title="Region" data={country.region} />
        {country.name.nativeName && (
          <DataItem
            title="Native Name"
            data={
              country.name.nativeName[Object.keys(country.name.nativeName)[0]]
                .common
            }
          />
        )}
        {country.capital && (
          <DataItem title="Capital City" data={country.capital[0]} />
        )}
        <DataItem title="Latitude" data={country.latlng[0]} unit="&#176;" />
        <DataItem title="Longitude" data={country.latlng[1]} unit="&#176;" />
        <DataItem title="Area" data={country.area} unit="km²" />
        <DataItem title="Population" data={country.population} />
        <DataItem title="Timezone" data={country.timezones[0]} />
        {country.currencies && (
          <DataItem
            title="Currency"
            data={Object.keys(country.currencies)[0]}
          />
        )}
      </div>
    </section>
  );
};

export default CountryDetail;
