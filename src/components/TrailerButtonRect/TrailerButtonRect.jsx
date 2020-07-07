import React from 'react';
import PropTypes from 'prop-types';
import styles from './TrailerButtonRect.module.scss';

export default function TrailerButtonRect({ onTrailerButtonClick, id }) {
  return (
    <button
      className={styles.trailerButton}
      type="button"
      onClick={() => {
        onTrailerButtonClick(id);
      }}
    >
      Watch Now
    </button>
  );
}

TrailerButtonRect.propTypes = {
  onTrailerButtonClick: PropTypes.func,
  id: PropTypes.number,
};

TrailerButtonRect.defaultProps = {
  onTrailerButtonClick: null,
  id: 0,
};
