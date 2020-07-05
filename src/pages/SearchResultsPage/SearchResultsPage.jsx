import React from 'react';
import PropTypes from 'prop-types';
import Header from '../../components/Header/Header';
import MovieListContainer from '../../components/MovieList';
import FooterContainer from '../../components/Footer';
import Spinner from '../../components/Spinner/Spinner';
import styles from './SearchResultsPage.module.scss';

export default function SearchResultsPage({ results, areMoviesLoaded }) {
  return (
    <div
      className={styles.wrapper}
    >
      <Header />
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

SearchResultsPage.propTypes = {
  results: PropTypes.instanceOf(Array),
  areMoviesLoaded: PropTypes.bool,
};

SearchResultsPage.defaultProps = {
  results: [],
  areMoviesLoaded: false,
};
