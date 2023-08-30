import { CountryType } from '../propTypes';
import styles from './Countries.module.css';
import CountryCard from './CountryCard';
import PropTypes from 'prop-types';

// eslint-disable
const Countries = ({ countries }) => {
  return (
    <section className={styles.container}>
      {countries.map((country) => (
        <div key={country.name.common} className={styles.item}>
          <CountryCard
            name={country.name.common}
            area={country.area}
            flag={country.flag}
            capital={country.capital}
            population={country.population}
          />
        </div>
      ))}
    </section>
  );
};
// eslint-enable

Countries.propTypes = {
  countries: PropTypes.arrayOf(CountryType).isRequired,
};

export default Countries;
