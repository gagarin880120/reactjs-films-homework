import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Header from '../../components/Header/Header';
import MovieInfoContainer from '../../components/MovieInfo';
import MovieListContainer from '../../components/MovieList';
import FooterContainer from '../../components/Footer';
import Spinner from '../../components/Spinner/Spinner';
import styles from './MovieDetailsPage.module.scss';

export default function MovieDetailsPage({ areMoviesLoaded, results, onPageLoad }) {
  useEffect(() => {
    onPageLoad();
  }, []);
  return (
    <>
      <Header />
      <MovieInfoContainer />
      <MovieListContainer />
      <div className={styles.loading}>
        {
          !areMoviesLoaded ? <Spinner /> : null
        }
      </div>
      {
        results.length ? <FooterContainer /> : null
      }
    </>
  );
}

MovieDetailsPage.propTypes = {
  areMoviesLoaded: PropTypes.bool,
  results: PropTypes.instanceOf(Array),
  onPageLoad: PropTypes.func,
};

MovieDetailsPage.defaultProps = {
  areMoviesLoaded: false,
  results: [],
  onPageLoad: null,
};
