import React from 'react';
import PropTypes from 'prop-types';
import StatusPopup from './StatusPopup';

const DisplayStatus = ({ status }) => {
  const statusMap = {
    loading: {
      title: '📡Please Wait!',
      message: 'Getting data from API...',
    },
    error: {
      title: '😧ops!',
      message: 'There was an error! Please refresh the page.',
    },
    notfound: {
      title: 'S🙁RRY!',
      message: "We can't find the country you're looking for.",
    },
  };

  const { title = '', message = '' } = statusMap[status]
    ? statusMap[status]
    : {};

  return (
    <>
      {title && message && (
        <StatusPopup
          title={statusMap[status].title}
          message={statusMap[status].message}
        />
      )}
    </>
  );
};

DisplayStatus.propTypes = {
  status: PropTypes.string.isRequired,
};

export default DisplayStatus;
