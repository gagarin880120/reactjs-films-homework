import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import InfoButton from '../InfoButton/InfoButton';
import TrailerButtonRect from '../TrailerButtonRect/TrailerButtonRect';
import styles from './ButtonsWrapper.module.scss';

export default function ButtonsWrapper({ movie, onTrailerButtonClick }) {
  const info = useRef();
  return (
    <div className={styles.wrapper}>
      <div className={styles.overview} ref={info} style={{display: 'none'}}>
        <p>{movie.overview}</p>
      </div>
      <div className={styles.buttonsContainer}>
        <TrailerButtonRect
          onTrailerButtonClick={onTrailerButtonClick}
          id={movie.id}
        />
        <InfoButton
          onInfoButtonClick={() => {
            if (info.current.style.display === 'none') {
              info.current.style.display = 'block';
            } else {
              info.current.style.display = 'none';
            }
          }}
        />
      </div>
    </div>
  );
}

ButtonsWrapper.propTypes = {
  movie: PropTypes.instanceOf(Object),
  onTrailerButtonClick: PropTypes.func,
};

ButtonsWrapper.defaultProps = {
  movie: {},
  onTrailerButtonClick: null,
};
