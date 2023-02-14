import React from 'react';

const DataItem = ({ title, data, unit = '' }) => {
  return (
    <div className="data-item">
      <h3 className="data-title">{title}</h3>
      <div className="data-value">
        <p>{data}</p>
        <p>{unit}</p>
      </div>
    </div>
  );
};

export default DataItem;
