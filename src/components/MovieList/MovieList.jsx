import React from 'react';
import PropTypes from 'prop-types';
import styles from './MovieList.module.scss';
import MovieCardContainer from '../MovieCard';
import TrailerModalContainer from '../TrailerModal';
import MovieListNavBarContainer from '../MovieListNavBar';
import { getUnique } from '../../helpers/helpers';

export default function MovieList({ results, isModalOpen, viewMode }) {
  return (
    <div
      className={styles.wrapper}
    >
      <MovieListNavBarContainer />
      <div className={styles[viewMode]}>
        {results.map((result) => (
          <MovieCardContainer
            key={result.id}
            movie={result}
          />
        ))}
      </div>
      {
        isModalOpen ? <TrailerModalContainer /> : null
      }
    </div>
  );
}

MovieList.propTypes = {
  results: PropTypes.instanceOf(Array),
  isModalOpen: PropTypes.bool,
  viewMode: PropTypes.string,
};

MovieList.defaultProps = {
  results: [],
  isModalOpen: false,
  viewMode: 'gallery',
};
