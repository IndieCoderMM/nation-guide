import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './CountryCard.module.css';
import { CountryType } from '../propTypes';

const CountryCard = ({ name, area, flag, capital, population }) => {
  const slug = name.toLowerCase().replace(/\s/g, '-');
  return (
    <div className={styles.card}>
      <Link
        to={`/country/${slug}`}
        key={area}
        aria-label={`Go to ${name} page`}
        className={styles.link}
      />
      <div className={styles.frame}>
        <img
          src={flag}
          alt={`
          Flag of ${name}
        `}
        />
      </div>
      <section className={styles.body}>
        <header>
          <h2 className={styles.name}>{name}</h2>
        </header>
        <div className={styles.infoBox}>
          <div>
            <h3>Capital: </h3>
            <p>{capital}</p>
          </div>
          <div>
            <h3>Area: </h3>
            <p>{area.toString().concat(' km²')}</p>
          </div>
          <div>
            <h3>Population: </h3>
            <p>{population}</p>
          </div>
        </div>
      </section>
    </div>
  );
};

CountryCard.propTypes = {
  name: PropTypes.string.isRequired,
  area: PropTypes.number.isRequired,
  flag: PropTypes.string.isRequired,
  capital: PropTypes.string.isRequired,
  population: PropTypes.number.isRequired,
};

export default CountryCard;
