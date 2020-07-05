import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './MovieCard.module.scss';
import InfoButton from '../InfoButton/InfoButton';
import TrailerButtonRect from '../TrailerButtonRect/TrailerButtonRect';
import TrailerButtonRound from '../TrailerButtonRound/TrailerButtonRound';

export default function MovieCard({
  movie, onTrailerButtonClick, onLinkClick,
}) {
  const [isInfoViewed, setIsInfoViewed] = useState(false);
  const hoverEl = useRef();
  const infoEl = useRef();

  return (
    <div
      className={styles.wrapper}
      style={{
        backgroundImage: movie.poster_path
          ? `url(https://image.tmdb.org/t/p/w185/${movie.poster_path})`
          : null,
      }}
    >
      <div
        ref={hoverEl}
        className={styles.hoverTrailer}
      >
        <TrailerButtonRound
          onTrailerButtonClick={onTrailerButtonClick}
          id={movie.id}
        />
        <span className={styles.hoverTrailerText}>Watch Now</span>
        <InfoButton
          onInfoButtonClick={() => {
            hoverEl.current.className = styles.hoverElDisplayNone;
            setIsInfoViewed(true);
            infoEl.current.className = styles.infoIsViewed;
          }}
        />
      </div>
      <div
        className={styles.movieInfo}
        ref={infoEl}
      >
        {
          isInfoViewed ? (
            <button
              className={styles.closeInfo}
              type="button"
              onClick={() => {
                setIsInfoViewed(false);
                infoEl.current.className = styles.movieInfo;
                hoverEl.current.className = styles.hoverTrailer;
              }}
            >
              X
            </button>
          ) : null
        }
        <Link
          to="/movieDetailsPage"
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

MovieCard.propTypes = {
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

MovieCard.defaultProps = {
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
