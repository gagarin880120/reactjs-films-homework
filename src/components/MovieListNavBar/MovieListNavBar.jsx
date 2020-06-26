import React from 'react';
import PropTypes from 'prop-types';
import styles from './MovieListNavBar.module.scss';

export default function MovieListNavBar({
  onTrending, onTopRated, onUpcoming, genres, onGenreChange, results, currentGenre
}) {
  return (
    <div className={styles.wrapper}>
      <button
        type="button"
        className={styles.button}
        onClick={() => {
          onTrending(currentGenre);
        }}
      >
        Trending
      </button>
      <button
        type="button"
        className={styles.button}
        onClick={() => {
          onTopRated(currentGenre);
        }}
      >
        Top rated
      </button>
      <button
        type="button"
        className={styles.button}
        onClick={() => {
          onUpcoming(currentGenre);
        }}
      >
        Coming soon
      </button>
      <select name="genres" onChange={(e) => onGenreChange(results, +e.target.value)}>
        <option value={0}>Genre</option>
        {
          genres.map((genre) => (
            <option key={genre.id} value={genre.id}>{genre.name}</option>))
        }
      </select>
    </div>
  );
}

MovieListNavBar.propTypes = {
  onTrending: PropTypes.func,
  onTopRated: PropTypes.func,
  onUpcoming: PropTypes.func,
  onGenreChange: PropTypes.func,
  genres: PropTypes.instanceOf(Array),
  results: PropTypes.instanceOf(Array),
  currentGenre: PropTypes.number,
};

MovieListNavBar.defaultProps = {
  onTrending: null,
  onTopRated: null,
  onUpcoming: null,
  onGenreChange: null,
  genres: [],
  results: [],
  currentGenre: 0,
};
