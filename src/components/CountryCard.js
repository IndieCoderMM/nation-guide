import React from 'react';
import { Link } from 'react-router-dom';

const CountryCard = ({ name, area, flags, className }) => {
  return (
    <Link to={`/country/${name.common}`} key={area} className={className}>
      <div className="frame">
        <img src={flags.png} alt={flags.alt} />
      </div>
      <div>
        <h3>{name.common}</h3>
        <p>{area}</p>
      </div>
    </Link>
  );
};

export default CountryCard;
