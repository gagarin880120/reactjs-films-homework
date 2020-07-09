import React from 'react';
import PropTypes from 'prop-types';
import RatingStar from '../RatingStar/RatingStar';
import ButtonsWrapperContainer from '../ButtonsWrapper';
import styles from './MovieInfo.module.scss';

export default function MovieInfo({ movie }) {
  const style = {
    backgroundImage: movie.backdrop_path
      ? `url(https://image.tmdb.org/t/p/w1280${movie.backdrop_path})`
      : null,
  };
  return (
    <div className={styles.wrapper} style={style}>
      <div className={styles.mainContent}>
        <div className={styles.movieDetails}>
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
        <ButtonsWrapperContainer />
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
