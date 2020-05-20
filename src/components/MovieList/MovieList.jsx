import React from 'react';
import styles from './MovieList.module.scss';
import MovieCard from '../MovieCard/MovieCard';

export default function MovieList(props) {
  const arrayOfResults = props.results.map((result, i) => {
    return (
      <MovieCard
        key={i}
        poster_path={result.poster_path}
        vote_average={result.vote_average}
        genre_ids={result.genre_ids}
        overview={result.overview}
        id={result.id}
        title={result.title}
        genres={props.genres}
      />
    )
  })
  return (
    <div className={styles.wrapper}>
      {arrayOfResults}
    </div>
  )
}
