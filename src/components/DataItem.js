import React from 'react';

const DataItem = ({ title, data, unit = '' }) => {
  return (
    <div className="data-item">
      <h3>{title}</h3>
      <p>
        {data}
        <span>{unit}</span>
      </p>
    </div>
  );
};

export default DataItem;
