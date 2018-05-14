import React from 'react';
import PropTypes from 'prop-types';

const SutilButton = ({ text, handleClick }) => (
  <button
    className="button button--sutil"
    onClick={handleClick}
  >
    {text}
  </button>
);

SutilButton.propTypes = {
  text: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default SutilButton;
