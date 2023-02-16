import React from 'react';
import PropTypes from 'prop-types';

const DataItem = ({ title, data, unit }) => (
  <div className="data-item">
    <h3 className="data-title">{title}</h3>
    <div className="data-value">
      <p>{data}</p>
      <p>{unit}</p>
    </div>
  </div>
);

DataItem.propTypes = {
  title: PropTypes.string,
  data: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  unit: PropTypes.string,
};

DataItem.defaultProps = {
  title: '',
  data: 0,
  unit: '',
};

export default DataItem;
