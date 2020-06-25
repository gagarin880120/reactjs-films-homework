import React from 'react';
import PropTypes from 'prop-types';
import styles from './MovieList.module.scss';
import MovieCardContainer from '../MovieCard';
import TrailerModalContainer from '../TrailerModal';
import MovieListNavBarContainer from '../MovieListNavBar';

export default function MovieList({ results, isModalOpen }) {

  return (
    <>
      <MovieListNavBarContainer />
      <div className={styles.wrapper}>
        {results.map((result) => (
          <MovieCardContainer
            key={result.id}
            movie={result}
          />
        ))}
        {
          isModalOpen ? <TrailerModalContainer /> : null
        }
      </div>
    </>
  );
}

MovieList.propTypes = {
  results: PropTypes.instanceOf(Array),
  isModalOpen: PropTypes.bool,
};

MovieList.defaultProps = {
  results: [],
  isModalOpen: false,
};
