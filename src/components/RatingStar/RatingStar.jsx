import React from 'react';
import PropTypes from 'prop-types';

export default function RatingStar({ type }) {
  return (
    <>
      {
        type === 'full'
          ? <i className="fas fa-star" />
          : <i className="fas fa-star-half" />
      }
    </>
  );
}

RatingStar.propTypes = {
  type: PropTypes.string,
}

RatingStar.defaultProps = {
  type: '',
}
