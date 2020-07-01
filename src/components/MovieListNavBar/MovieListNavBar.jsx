import React from 'react';
import PropTypes from 'prop-types';
import styles from './MovieListNavBar.module.scss';

export default function MovieListNavBar({
  onTrending, onTopRated, onUpcoming, genres, onGenreChange,
}) {
  return (
    <div className={styles.wrapper}>
      <button
        type="button"
        className={styles.button}
        onClick={() => {
          onTrending();
        }}
      >
        Trending
      </button>
      <button
        type="button"
        className={styles.button}
        onClick={() => {
          onTopRated();
        }}
      >
        Top rated
      </button>
      <button
        type="button"
        className={styles.button}
        onClick={() => {
          onUpcoming();
        }}
      >
        Coming soon
      </button>
      <select name="genres" onChange={(e) => onGenreChange(e.target.value)}>
        <option value="">Genre</option>
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
};

MovieListNavBar.defaultProps = {
  onTrending: null,
  onTopRated: null,
  onUpcoming: null,
  onGenreChange: null,
  genres: [],
};
