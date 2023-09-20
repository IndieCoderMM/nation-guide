import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import {
  BsCashCoin,
  BsPinMapFill,
  BsFillPatchCheckFill,
  BsInfoCircleFill,
  BsShareFill,
  BsClipboardCheck,
} from 'react-icons/bs';
import {
  FaArrowLeft,
  FaChartPie,
  FaChevronRight,
  FaLandmark,
} from 'react-icons/fa';

import PageHolder from '../../components/PageHolder';
import { generateSlug } from '../../lib/utils';
import {
  COUNTRIES_STATUS,
  getAllCountries,
  selectAllCountries,
  selectCountriesStatus,
} from '../../redux/countriesSlice';

import DataItem from './DataItem';
import InfoGroup from './InfoGroup';
import styles from './styles/Detail.module.css';
import Loading from '../../components/Loading';
import useCopyToClipboard from '../../hooks/useCopyToClipboard';
import FloatingActions from '../../components/FloatingActions';

const Detail = () => {
  const { country_name: name } = useParams();
  const countries = useSelector(selectAllCountries);
  const status = useSelector(selectCountriesStatus);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [copyToClipboard, hasCopied] = useCopyToClipboard();

  const country = countries.find(
    // eslint-disable-next-line
    (country) => generateSlug(country?.name.common) === name,
  );

  useEffect(() => window.scrollTo(0, 0), []);

  useEffect(() => {
    if (status === COUNTRIES_STATUS.IDLE) {
      dispatch(getAllCountries());
    }
  }, [status, dispatch]);

  if (status === COUNTRIES_STATUS.LOADING) {
    return <Loading />;
  }

  if (!country || status === COUNTRIES_STATUS.ERROR) {
    return (
      <PageHolder
        title="Something went wrong!"
        message="There was an error while loading data. Please try again later."
        showHome
      />
    );
  }

  const currency = Object.keys(country.currencies)[0];
  const nativeName = Object.keys(country.name.nativeName)[0];

  return (
    <main className={`${styles.container} maxContainer`}>
      <header className={styles.header}>
        <h1 className={styles.title}>{country.name.common}</h1>

        <div className={styles.breadcrumb}>
          <Link to="/">Countries</Link>
          <FaChevronRight />
        </div>
      </header>
      <div className={styles.hero}>
        <img
          className={styles.flag}
          src={country.flag.png}
          alt={
            country.flag.alt ? country.flag.alt : `${country.name.common} flag`
          }
        />
        <div className={styles.topSection}>
          {country.coatOfArms.png && (
            <div className={styles.shield}>
              <img src={country.coatOfArms.png} alt="Coat of Arms" />
            </div>
          )}
          <InfoGroup title="Basic Info" icon={<BsFillPatchCheckFill />}>
            <DataItem title="Official Name" data={country.name?.official} />
            {nativeName && (
              <DataItem
                title="Native Name"
                data={country.name?.nativeName[nativeName]?.official}
              />
            )}
          </InfoGroup>
        </div>
      </div>
      <section className={styles.grid}>
        <InfoGroup title="Geographics" icon={<FaLandmark />}>
          {country.capital && (
            <DataItem title="Capital" data={country.capital} />
          )}
          <DataItem title="Region" data={country.region} />
          <DataItem title="Subregion" data={country.subregion} />
          <DataItem title="Continents" data={country.continents.join(',')} />
          <DataItem
            title="Landlocked"
            data={country.landlocked ? 'Yes' : 'No'}
          />
        </InfoGroup>

        <InfoGroup title="Demographics" icon={<FaChartPie />}>
          <DataItem title="Area" data={country.area} unit="km²" />
          <DataItem title="Population" data={country.population} />
        </InfoGroup>

        <InfoGroup title="Location" icon={<BsPinMapFill />}>
          <DataItem title="Timezone" data={country.timezones[0]} />
          <DataItem title="Latitude" data={country.latlng[0]} unit="&#176;" />
          <DataItem title="Longitude" data={country.latlng[1]} unit="&#176;" />
          <div className={styles.separator} />
          <a
            href={country.maps.googleMaps}
            target="_blank"
            rel="noreferrer"
            className="btn"
          >
            View in Google Maps
          </a>
        </InfoGroup>

        {currency ? (
          <InfoGroup title="Currency" icon={<BsCashCoin />}>
            <DataItem title="Code" data={currency} />
            <DataItem title="Name" data={country.currencies[currency].name} />
            <DataItem
              title="Symbol"
              data={country.currencies[currency].symbol}
            />
          </InfoGroup>
        ) : null}

        <InfoGroup title="More Info" icon={<BsInfoCircleFill />}>
          <DataItem title="Top Level Domain" data={country.tld?.join(',')} />
          <DataItem title="Spellings" data={country.altSpellings[0]} />
        </InfoGroup>
      </section>
      <FloatingActions
        actions={[
          {
            label: hasCopied ? 'Copied!' : 'Share Link',
            icon: hasCopied ? <BsClipboardCheck /> : <BsShareFill />,
            onClick: () => copyToClipboard(window.location.href),
          },
          {
            label: 'Go back',
            icon: <FaArrowLeft />,
            onClick: () => navigate('/'),
          },
        ]}
      />
    </main>
  );
};

export default Detail;
