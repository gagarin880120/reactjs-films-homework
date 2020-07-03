import React from 'react';
import PropTypes from 'prop-types';
import styles from './TrailerButtonRound.module.scss';

export default function TrailerButtonRound({ onTrailerButtonClick, id }) {
  return (
    <button
      type="button"
      onClick={() => {
        onTrailerButtonClick(id);
      }}
      className={styles.trailerButton}
    >
      <i className="fas fa-play" />
    </button>
  );
}

TrailerButtonRound.propTypes = {
  onTrailerButtonClick: PropTypes.func,
  id: PropTypes.number,
};

TrailerButtonRound.defaultProps = {
  onTrailerButtonClick: null,
  id: 0,
};
