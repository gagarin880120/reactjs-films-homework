import React, { useEffect } from 'react';
import MovieList from './MovieList';
import styles from './MovieList.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { searchResultsSelector, genresSelector } from '../../redux/selectors';
import { genresAction } from '../../redux/actions';

export default function MovieListContainer() {
  const results = useSelector(searchResultsSelector);
  const genres = useSelector(genresSelector);
  const dispatch = useDispatch();
  console.log(genres)

  function getGenres() {
    return () => {
      const url = new URL('https://api.themoviedb.org/3/genre/movie/list');
      url.searchParams.set('api_key', '306b98213f954f1d07d1d09517898f10');
      url.searchParams.set('language', 'en-US');
      fetch(url)
        .then(res => res.json())
        .then(data => dispatch(genresAction(data.genres)))
        .catch(e => console.log(e))
    }
  }

  useEffect(() => {
    getGenres()();
  }, [])

  function getGenresString(arr) {
    return arr.map(id => genres[genres.findIndex(v => v.id === id)].name).join(', ');
  }

  const arrayOfResults = results.map(result => {
    return (
      <div className={styles.movieCard}
        style={{
          backgroundImage: result.poster_path ?
          `url(https://image.tmdb.org/t/p/w300/${result.poster_path})`:
          'url(https://spnbag.com/assets/general/images/no_poster.jpg)'
        }}
      >
        <div className={styles.movieInfo}>
          <span className={styles.movieTitle}>
            {
            result.title.length < 18 ?
              result.title :
              result.title.slice(0, 18) + '...'
            }
          </span>
          <span className={styles.movieRating}>{result.vote_average}</span>
          <p className={styles.movieGenre}>{getGenresString(result.genre_ids)}</p>
        </div>
      </div>
    )
  })
  console.log(results);

  return (
    <MovieList
      arrayOfResults={arrayOfResults}
    />
  )
}
