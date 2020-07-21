import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './MovieCard.module.scss';
import InfoButton from '../InfoButton/InfoButton';
import TrailerButtonRect from '../TrailerButtonRect/TrailerButtonRect';
import TrailerButtonRound from '../TrailerButtonRound/TrailerButtonRound';

export default function GalleryModeMovieCard({
  movie, onTrailerButtonClick, onLinkClick,
}) {
  const [isInfoViewed, setIsInfoViewed] = useState(false);
  const [isHovered, setHoveredState] = useState(false);

  return (
    <div
      className={styles.galleryWrapper}
      style={{
        backgroundImage: movie.poster_path
          ? `url(https://image.tmdb.org/t/p/w300/${movie.poster_path})`
          : null,
      }}
    >
      <div className={isHovered ? styles.hoverElDisplayNone : styles.hoverTrailer}>
        <TrailerButtonRound
          onTrailerButtonClick={onTrailerButtonClick}
          id={movie.id}
        />
        <span className={styles.hoverTrailerText}>Watch Now</span>
        <InfoButton
          onInfoButtonClick={() => {
            setHoveredState(true);
            setIsInfoViewed(true);
          }}
        />
      </div>
      <div
        className={isInfoViewed ? styles.infoIsViewed : styles.movieInfo}
      >
        {
          isInfoViewed ? (
            <button
              className={styles.closeInfo}
              type="button"
              onClick={() => {
                setIsInfoViewed(false);
                setHoveredState(false);
              }}
            >
              <i className="fas fa-times" />
            </button>
          ) : null
        }
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
        {
          isInfoViewed
            ? (
              <>
                <div className={styles.overview}>{movie.overview}</div>
                <TrailerButtonRect
                  onTrailerButtonClick={onTrailerButtonClick}
                  id={movie.id}
                />
              </>
            ) : null
        }
      </div>
    </div>
  );
}

GalleryModeMovieCard.propTypes = {
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

GalleryModeMovieCard.defaultProps = {
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
