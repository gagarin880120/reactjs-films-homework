import React from 'react';
import PropTypes from 'prop-types';
import Header from '../../components/Header/Header';
import MovieInfoContainer from '../../components/MovieInfo';
import MovieListContainer from '../../components/MovieList';
import FooterContainer from '../../components/Footer';
import Spinner from '../../components/Spinner/Spinner';
import ButtonsWrapperContainer from '../../components/ButtonsWrapper';
import styles from './MovieDetailsPage.module.scss';

export default function MovieDetailsPage({ movie, areMoviesLoaded, results }) {
  const style = {
    backgroundImage: movie.backdrop_path
      ? `url(https://image.tmdb.org/t/p/w1280${movie.backdrop_path})`
      : null,
  };

  return (
    <div className={styles.wrapper} style={style}>
      <Header />
      <main className={styles.main}>
        <MovieInfoContainer />
        <div className={styles.buttons}>
          <ButtonsWrapperContainer />
        </div>
      </main>
      <MovieListContainer />
      <div className={styles.loading}>
        {
          !areMoviesLoaded ? <Spinner /> : null
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
  areMoviesLoaded: PropTypes.bool,
  results: PropTypes.instanceOf(Array),
};

MovieDetailsPage.defaultProps = {
  movie: {
    backdrop_path: '',
    id: 0,
    overview: '',
  },
  areMoviesLoaded: false,
  results: [],
};
