import React from 'react';
import PropTypes from 'prop-types';
import styles from './MovieListNavBar.module.scss';

export default function MovieListNavBar({
  onTrending, onTopRated, onUpcoming, genres, onGenreChange, currentGenre, switchViewMode,
}) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.actionButtonsContainer}>
        <button
          type="button"
          id="trending"
          className={styles.button}
          onClick={() => {
            onTrending();
          }}
        >
          Trending
        </button>
        <button
          type="button"
          id="topRated"
          className={styles.button}
          onClick={() => {
            onTopRated();
          }}
        >
          Top rated
        </button>
        <button
          type="button"
          id="upComing"
          className={styles.button}
          onClick={() => {
            onUpcoming();
          }}
        >
          Coming soon
        </button>
        <select
          name="genres"
          onChange={(e) => {
            onGenreChange(e.target.value);
          }}
          value={currentGenre}
        >
          <option value="">Genre</option>
          {
          genres.map((genre) => (
            <option key={genre.id} value={genre.id}>{genre.name}</option>))
        }
        </select>
      </div>
      <div className={styles.viewSwitchersContainer}>
        <button
          type="button"
          id="galleryView"
          className={styles.button}
          onClick={() => {
            switchViewMode('gallery');
          }}
        >
          <i className="fas fa-th" />
        </button>
        <button
          type="button"
          id="listView"
          className={styles.button}
          onClick={() => {
            switchViewMode('list');
          }}
        >
          <i className="fas fa-th-list" />
        </button>
      </div>

    </div>
  );
}

MovieListNavBar.propTypes = {
  onTrending: PropTypes.func,
  onTopRated: PropTypes.func,
  onUpcoming: PropTypes.func,
  onGenreChange: PropTypes.func,
  genres: PropTypes.instanceOf(Array),
  currentGenre: PropTypes.string,
  switchViewMode: PropTypes.func,
};

MovieListNavBar.defaultProps = {
  onTrending: null,
  onTopRated: null,
  onUpcoming: null,
  onGenreChange: null,
  genres: [],
  currentGenre: '',
  switchViewMode: null,
};
