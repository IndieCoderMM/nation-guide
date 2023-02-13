import React from 'react';
import { Link } from 'react-router-dom';

const CountryCard = ({ name, area, flags, className }) => {
  return (
    <Link to={`/country/${name.common}`} key={area} className={className}>
      <div className="item-container">
        <div className="frame">
          <img src={flags.png} alt={flags.alt} />
        </div>
        <h2>{name.common}</h2>
      </div>
    </Link>
  );
};

export default CountryCard;
