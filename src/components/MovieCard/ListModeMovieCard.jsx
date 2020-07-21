import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './MovieCard.module.scss';
import TrailerButtonRect from '../TrailerButtonRect/TrailerButtonRect';

export default function ListModeMovieCard({
  movie, onTrailerButtonClick, onLinkClick,
}) {
  return (
    <div
      className={styles.listWrapper}
    >
      <div
        className={styles.listImage}
        style={{
          backgroundImage: movie.poster_path
            ? `url(https://image.tmdb.org/t/p/w300/${movie.poster_path})`
            : null,
        }}
      />
      <div className={styles.listMovieInfo}>
        <Link
          to={`/movie/${movie.id}`}
          onClick={() => {
            onLinkClick(movie.id);
          }}
        >
          <p className={styles.movieTitle}>{movie.title}</p>
        </Link>
        <span className={styles.movieRating}>{movie.vote_average}</span>
        <p className={styles.movieGenre}>{movie.genres}</p>

        <div className={styles.overview}>{movie.overview}</div>
        <TrailerButtonRect
          onTrailerButtonClick={onTrailerButtonClick}
          id={movie.id}
        />
      </div>
    </div>
  );
}

ListModeMovieCard.propTypes = {
  onTrailerButtonClick: PropTypes.func,
  onLinkClick: PropTypes.func,
  movie: PropTypes.shape({
    poster_path: PropTypes.string,
    id: PropTypes.number,
    title: PropTypes.string,
    vote_average: PropTypes.number,
    genres: PropTypes.string,
    overview: PropTypes.string,
  }),
};

ListModeMovieCard.defaultProps = {
  onTrailerButtonClick: null,
  onLinkClick: null,
  movie: {
    poster_path: '',
    id: 0,
    title: '',
    vote_average: 0,
    genres: '',
    overview: '',
  },
};
