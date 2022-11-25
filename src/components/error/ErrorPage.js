import PropTypes from 'prop-types';
import React from 'react';

const ErrorPage = ({ error }) => (
  <div>
    <h2>Error</h2>
    <p>{error}</p>
  </div>
);

ErrorPage.propTypes = {
  error: PropTypes.string.isRequired,
};

export default ErrorPage;
