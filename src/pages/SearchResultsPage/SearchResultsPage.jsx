import React from 'react';
import PropTypes from 'prop-types';
import Header from '../../components/Header/Header';
import MovieListContainer from '../../components/MovieList';
import FooterContainer from '../../components/Footer';
import Spinner from '../../components/Spinner/Spinner';
import styles from './SearchResultsPage.module.scss';

export default function SearchResultsPage({ results, isLoaded }) {
  return (
    <div
      className={styles.wrapper}
    >
      <Header />
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

SearchResultsPage.propTypes = {
  results: PropTypes.instanceOf(Array),
  isLoaded: PropTypes.bool,
};

SearchResultsPage.defaultProps = {
  results: [],
  isLoaded: false,
};
