import React from 'react';
import PropTypes from 'prop-types';

const ButtonPrimary = ({ text, handleClick }) => (
  <button
    className="button button--primary"
    onClick={handleClick}
  >
    {text}
  </button>
);

ButtonPrimary.propTypes = {
  text: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default ButtonPrimary;
