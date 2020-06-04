import React from 'react';
import styles from './MovieList.module.scss';
import MovieCard from '../MovieCard/MovieCard';

export default function MovieList(props) {
  return (
    <div className={styles.wrapper}>
      {props.results.map((result, i) => (
        <MovieCard
          key={i}
          movie={result}
        />
      ))}
    </div>
  )
}
