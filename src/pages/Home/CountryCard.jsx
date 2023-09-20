import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { generateSlug } from '../../lib/utils';

import styles from './styles/CountryCard.module.css';

// eslint-disable-next-line object-curly-newline
const CountryCard = ({ name, area, flag, capital, population }) => {
  const slug = generateSlug(name);
  return (
    <div className={styles.card}>
      <Link
        to={`/country/${slug}`}
        key={area}
        aria-label={`Go to ${name} page`}
        className={styles.link}
      />
      <div className={styles.frame}>
        <img src={flag.png} alt={flag.alt} />
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
  flag: PropTypes.shape({
    png: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
  }).isRequired,
  capital: PropTypes.string.isRequired,
  population: PropTypes.number.isRequired,
};

export default CountryCard;
