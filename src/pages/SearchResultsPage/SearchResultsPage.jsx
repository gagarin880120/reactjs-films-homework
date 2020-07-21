import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Header from '../../components/Header/Header';
import MovieListContainer from '../../components/MovieList';
import FooterContainer from '../../components/Footer';
import Spinner from '../../components/Spinner/Spinner';
import MovieInfoContainer from '../../components/MovieInfo';
import styles from './SearchResultsPage.module.scss';

export default function SearchResultsPage({
  results, areMoviesLoaded, isMovieLoaded, currentAPIRequest, onCurrentAPIRequestUpdate,
}) {
  useEffect(() => {
    onCurrentAPIRequestUpdate(currentAPIRequest);
  }, [currentAPIRequest]);
  return (
    <>
      {
        isMovieLoaded ? (
          <>
            <Header />
            <MovieInfoContainer />
          </>
        ) : null
      }
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

SearchResultsPage.propTypes = {
  results: PropTypes.instanceOf(Array),
  areMoviesLoaded: PropTypes.bool,
  currentAPIRequest: PropTypes.string,
  onCurrentAPIRequestUpdate: PropTypes.func,
  isMovieLoaded: PropTypes.bool,
};

SearchResultsPage.defaultProps = {
  results: [],
  areMoviesLoaded: false,
  currentAPIRequest: '',
  onCurrentAPIRequestUpdate: null,
  isMovieLoaded: false,
};
