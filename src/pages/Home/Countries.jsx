import { CountryListType } from '../../propTypes';

import CountryCard from './CountryCard';
import styles from './styles/Countries.module.css';

const Countries = ({ countries }) => (
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

Countries.propTypes = {
  countries: CountryListType.isRequired,
};

export default Countries;
