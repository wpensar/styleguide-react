import React from 'react';
import PropTypes from 'prop-types';

const ButtonDanger = ({ text, handleClick }) => (
  <button
    className="button button--danger"
    onClick={handleClick}
  >
    {text}
  </button>
);

ButtonDanger.propTypes = {
  text: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default ButtonDanger;
