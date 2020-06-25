import React from 'react';
import PropTypes from 'prop-types';
import styles from './MovieInfo.module.scss';

export default function MovieInfo({ movie }) {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.movieTitle}>
        {movie.title}
      </h2>
      <div className={styles.genreDurationContainer}>
        <span className={styles.genre}>
          Adventure Drama Family Fantasy
        </span>
        <span className={styles.duration}>
          {`${movie.runtime}`}
        </span>
      </div>
      <div className={styles.rating}>
        <span className={styles.ratingStars}>
          ★★★★★
        </span>
        <span className={styles.ratingText}>
          4.8
        </span>
      </div>
    </div>
  );
}

MovieInfo.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    backdrop_path: PropTypes.string,
    runtime: PropTypes.number,
  }),
};

MovieInfo.defaultProps = {
  movie: {
    title: '',
    backdrop_path: '',
    runtime: 0,
  },
};
