import PropTypes from 'prop-types';
import React from 'react';

const PriorityPicker = ({ field, services }) => {
  console.log(field, services);
  return <></>;
};

PriorityPicker.propTypes = {
  field: PropTypes.string.isRequired,
  services: PropTypes.array.isRequired,
};

export default PriorityPicker;
