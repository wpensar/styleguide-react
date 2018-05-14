import React from 'react';
import PropTypes from 'prop-types';

const LinkButton = ({ text, handleClick }) => (
  <button
    className="button button--link"
    onClick={handleClick}
  >
    {text}
  </button>
);

LinkButton.propTypes = {
  text: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default LinkButton;
