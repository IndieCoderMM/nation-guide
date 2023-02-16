import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const CountryCard = ({
  name, area, flagPng, flagAlt, className,
}) => (
  <Link to={`/country/${name.common}`} key={area} className={className}>
    <div className="frame">
      <img src={flagPng} alt={flagAlt} />
    </div>
    <div>
      <h3>{name.common}</h3>
      <p>{area.toString().concat(' km²')}</p>
    </div>
  </Link>
);

CountryCard.propTypes = {
  // eslint-disable-next-line
  name: PropTypes.object,
  area: PropTypes.number,
  flagPng: PropTypes.string,
  flagAlt: PropTypes.string,
  className: PropTypes.string,
};

CountryCard.defaultProps = {
  name: '',
  area: 0,
  flagPng: '',
  flagAlt: '',
  className: '',
};

export default CountryCard;
