import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import Header from '../../components/Header/Header';
import MovieInfoContainer from '../../components/MovieInfo';
import InfoButton from '../../components/InfoButton/InfoButton';
import TrailerButtonRect from '../../components/TrailerButtonRect/TrailerButtonRect';
import MovieListContainer from '../../components/MovieList';
import FooterContainer from '../../components/Footer';
import Spinner from '../../components/Spinner/Spinner';
import styles from './MovieDetailsPage.module.scss';

export default function MovieDetailsPage({
  movie, onTrailerButtonClick, isLoaded, results
}) {
  const infoEl = useRef();

  const style = {
    backgroundImage: movie.backdrop_path
      ? `url(https://image.tmdb.org/t/p/w1280${movie.backdrop_path})`
      : null,
  };

  return (
    <div className={styles.wrapper} style={style}>
      <Header />
      <div className={styles.overview} ref={infoEl}>
        <p>{movie.overview}</p>
      </div>
      <main className={styles.main}>
        <MovieInfoContainer />
        <div className={styles.buttonsContainer}>
          <TrailerButtonRect
            onTrailerButtonClick={onTrailerButtonClick}
            id={movie.id}
          />
          <InfoButton
            onInfoButtonClick={() => {
              if (infoEl.current.style.display === 'block') {
                infoEl.current.style.display = 'none';
              } else {
                infoEl.current.style.display = 'block';
              }
            }}
          />
        </div>
      </main>
      <MovieListContainer />
      <div className={styles.loading}>
        {
          !isLoaded ? <Spinner /> : null
        }
      </div>
      {
        results.length ? <FooterContainer /> : null
      }
    </div>
  );
}

MovieDetailsPage.propTypes = {
  movie: PropTypes.shape({
    backdrop_path: PropTypes.string,
    id: PropTypes.number,
    overview: PropTypes.string,
  }),
  onTrailerButtonClick: PropTypes.func,
  isLoaded: PropTypes.bool,
  results: PropTypes.instanceOf(Array),
};

MovieDetailsPage.defaultProps = {
  movie: {
    backdrop_path: '',
    id: 0,
    overview: '',
  },
  onTrailerButtonClick: null,
  isLoaded: false,
  results: [],
};
