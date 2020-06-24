import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './MovieList.module.scss';
import MovieCardContainer from '../MovieCard';
import TrailerModalContainer from '../TrailerModal';

export default function MovieList({ results, isModalOpen, onGetGenres }) {
  useEffect(() => {
    onGetGenres();
  }, []);

  return (
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
  );
}

MovieList.propTypes = {
  results: PropTypes.instanceOf(Array),
  isModalOpen: PropTypes.bool,
  onGetGenres: PropTypes.func,
};

MovieList.defaultProps = {
  results: [],
  isModalOpen: false,
  onGetGenres: null,
};
