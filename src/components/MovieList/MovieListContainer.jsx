import React, { useEffect, useMemo, createRef, useState } from 'react';
import MovieList from './MovieList';
import styles from './MovieList.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { searchResultsSelector, genresSelector } from '../../redux/selectors';
import { getGenres } from '../../redux/actions';

export default function MovieListContainer() {
  const results = useSelector(searchResultsSelector);
  const genres = useSelector(genresSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGenres());
  }, [])

  return (
    <div>
      <MovieList
        results={results}
        genres={genres}
      />
    </div>
  )
}
