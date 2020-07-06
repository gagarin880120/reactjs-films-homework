import React, { useState } from 'react';
import PropTypes from 'prop-types';
import InfoButton from '../InfoButton/InfoButton';
import TrailerButtonRect from '../TrailerButtonRect/TrailerButtonRect';
import styles from './ButtonsWrapper.module.scss';

export default function ButtonsWrapper({ movie, onTrailerButtonClick }) {
  const [isInfoViewed, setIsInfoViewed] = useState(false);
  return (
    <div className={styles.wrapper}>
      <div
        className={styles.overview}
        style={{ display: isInfoViewed ? 'block' : 'none' }}
      >
        <p>{movie.overview}</p>
      </div>
      <div className={styles.buttonsContainer}>
        <TrailerButtonRect
          onTrailerButtonClick={onTrailerButtonClick}
          id={movie.id}
        />
        <InfoButton
          onInfoButtonClick={() => {
            if (isInfoViewed) {
              setIsInfoViewed(false);
            } else {
              setIsInfoViewed(true);
            }
          }}
        />
      </div>
    </div>
  );
}

ButtonsWrapper.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number,
    overview: PropTypes.string,
  }),
  onTrailerButtonClick: PropTypes.func,
};

ButtonsWrapper.defaultProps = {
  movie: {
    id: 0,
    overview: '',
  },
  onTrailerButtonClick: null,
};
