import React from 'react';
import PropTypes from 'prop-types';
import RatingStar from '../RatingStar/RatingStar';
import styles from './MovieInfo.module.scss';

export default function MovieInfo({ movie }) {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.movieTitle}>
        {movie.title}
      </h2>
      <div className={styles.genreDurationContainer}>
        <span className={styles.genre}>
          {movie.genres}
        </span>
        <span className={styles.duration}>
          {movie.runtime}
        </span>
      </div>
      <div className={styles.rating}>
        <span className={styles.ratingStars}>
          {movie.stars.map((v) => <RatingStar key={v.id} type={v.type} />)}
        </span>
        <span className={styles.ratingText}>
          {movie.vote_average}
        </span>
      </div>
    </div>
  );
}

MovieInfo.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    backdrop_path: PropTypes.string,
    runtime: PropTypes.string,
    genres: PropTypes.string,
    vote_average: PropTypes.number,
    stars: PropTypes.instanceOf(Array),
  }),
};

MovieInfo.defaultProps = {
  movie: {
    title: '',
    backdrop_path: '',
    runtime: '',
    genres: '',
    vote_average: 0,
    stars: [],
  },
};
