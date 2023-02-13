import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import DataItem from './DataItem';

const CountryDetail = () => {
  const params = useParams();
  const countries = useSelector((state) => state.data);
  const country = countries.find((c) => c.name.common === params.name);

  return (
    <section className="detail-page">
      <div className="toolbar">
        <Link to="/">Back</Link>
        <p>Country Views</p>
        <span>🎙</span>
        <span>⚙</span>
      </div>
      <div className="feature-item">
        <img src={country.flags.png} alt={country.flags.alt} width={150} />
        <div>
          <img src={country.coatOfArms.png} alt="Coat of Arms" width={50} />
          <h1>{country.name.common}</h1>
        </div>
      </div>
      <h2 className="bar-item">Country Detail</h2>
      <div className="detail-list">
        <DataItem title="Continent" data={country.continents[0]} />
        <DataItem title="Region" data={country.region} />
        <DataItem title="Capital City" data={country.capital[0]} />
        <DataItem title="Timezone" data={country.timezones[0]} />
        <DataItem title="Latitude" data={country.latlng[0]} unit=" *" />
        <DataItem title="Longitude" data={country.latlng[1]} unit=" *" />
        <DataItem title="Area" data={country.area} unit=" km2" />
        <DataItem title="Population" data={country.population} />
        <DataItem title="Currency" data={Object.keys(country.currencies)[0]} />
      </div>
    </section>
  );
};

export default CountryDetail;
