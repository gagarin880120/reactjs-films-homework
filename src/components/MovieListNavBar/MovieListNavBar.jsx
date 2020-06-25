import React from 'react';
import PropTypes from 'prop-types';
import styles from './MovieListNavBar.module.scss';

export default function MovieListNavBar({ onTrending }) {
  return (
    <div className={styles.wrapper}>
      <button
        type="button"
        className={styles.button}
        onClick={() => {
          onTrending()
        }}
      >
        Trending
      </button>
      <button
        type="button"
        className={styles.button}
      >
        Top rated
      </button>
      <button
        type="button"
        className={styles.button}
      >
        Coming soon
      </button>
      <select name="" id="">
        Genre
      </select>
    </div>
  )
}

MovieListNavBar.propTypes = {
  onTrending: PropTypes.func,
};

MovieListNavBar.defaultProps = {
  onTrending: null,
};
