import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const StatusPopup = ({ title, message, showHome }) => (
  <div className="status-popup">
    <h2>{title}</h2>
    <p>{message}</p>
    {showHome && (
      <Link to="/" className="home-btn">
        Back to Home
      </Link>
    )}
  </div>
);

StatusPopup.propTypes = {
  title: PropTypes.string,
  message: PropTypes.string,
  showHome: PropTypes.bool,
};

StatusPopup.defaultProps = {
  title: '',
  message: '',
  showHome: false,
};

export default StatusPopup;
