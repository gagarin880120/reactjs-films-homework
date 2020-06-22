import React, { useEffect } from 'react';
import styles from './MovieList.module.scss';
import MovieCardContainer from '../MovieCard';
import TrailerModalContainer from '../TrailerModal';

export default function MovieList(props) {
  useEffect(() => {
    props.onGetGenres();
  }, []);

  return (
    <div className={styles.wrapper}>
      {props.results.map((result) => (
        <MovieCardContainer
          key={result.id}
          movie={result}
        />
      ))}
      {
        props.isModalOpen ? <TrailerModalContainer /> : null
      }

    </div>
  )
}
