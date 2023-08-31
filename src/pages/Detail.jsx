import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import StatusPopup from '../components/StatusPopup';
import DataItem from '../components/DataItem';
import styles from './Detail.module.css';
import { BsFillArrowLeftSquareFill } from 'react-icons/bs';

const Detail = () => {
  const { country_name } = useParams();
  const countries = useSelector((state) => state.data);
  const country = countries.find(
    (country) =>
      country.name.common.toLowerCase().replace(/\s/g, '-') === country_name,
  );

  useEffect(() => window.scrollTo(0, 0), []);

  if (!country)
    return (
      <StatusPopup
        title="😧ops!"
        message="There was an error while loading data."
        showHome
      />
    );

  const currency = Object.keys(country.currencies)[0];

  return (
    <main className={`${styles.container} max-container`}>
      <Link to="/" className={styles.back}>
        <BsFillArrowLeftSquareFill /> Back
      </Link>
      <h1 className={styles.title}>{country.name.common}</h1>
      <img
        className={styles.flag}
        src={country.flag}
        alt={country.flagAlt ? country.flagAlt : `${country.name.common} flag`}
      />

      <div className={styles.rowBetween}>
        {country.coatOfArms.png && (
          <div className={styles.shield}>
            <img src={country.coatOfArms.png} alt="Coat of Arms" />
          </div>
        )}
        <div className={styles.stack}>
          <div>
            <span>Latitude:</span> <span> {country.latlng[0]}&#176;</span>
          </div>
          <div>
            <span>Longitude:</span>
            <span> {country.latlng[1]}&#176;</span>
          </div>
          <a href={country.maps.googleMaps} target="_blank" rel="noreferrer">
            <button type="button">View in Google Maps</button>
          </a>
          <a
            href={country.maps.openStreetMaps}
            target="_blank"
            rel="noreferrer"
          >
            <button type="button">View in OpenStreetMaps</button>
          </a>
        </div>
      </div>

      <div className={styles.group}>
        <h2>Basic Information </h2>
        {country.name.nativeName && (
          <DataItem
            title="Native Name"
            data={
              country.name.nativeName[Object.keys(country.name.nativeName)[0]]
                .common
            }
          />
        )}
        <DataItem title="Population" data={country.population} />
        <DataItem title="Timezone" data={country.timezones[0]} />
      </div>

      <div className={styles.group}>
        <h2>Geographical Data</h2>

        {country.capital && <DataItem title="Capital" data={country.capital} />}
        <DataItem title="Area" data={country.area} unit="km²" />
        <DataItem title="Region" data={country.region} />
        <DataItem title="Continents" data={country.continents.join(',')} />
        <DataItem
          title="Landlocked"
          data={country.landlocked ? 'True' : 'False'}
        />
      </div>

      <div className={styles.group}>
        <h2>Currency</h2>
        <DataItem title="Code" data={currency} />
        <DataItem title="Name" data={country.currencies[currency].name} />
        <DataItem title="Symbol" data={country.currencies[currency].symbol} />
      </div>

      <div className={styles.group}>
        <h2>More Information</h2>
        <DataItem title="Spellings" data={country.altSpellings.join(',')} />
      </div>
    </main>
  );
};

export default Detail;
