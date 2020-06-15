import React from 'react';
import styles from './MovieList.module.scss';
import MovieCardContainer from '../MovieCard/MovieCardContainer';
import TrailerModalContainer from '../TrailerModal/TrailerModalContainer';

export default function MovieList(props) {
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
