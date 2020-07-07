import React from 'react';
import PropTypes from 'prop-types';
import styles from './MovieListNavBar.module.scss';

export default function MovieListNavBar({
  onTrending, onTopRated, onUpcoming, genres, onGenreChange,
  currentGenre, switchViewMode, viewMode, currentURL,
}) {
  const activeButtonStyle = {
    fontWeight: 'bold',
    textDecoration: 'underline',
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.actionButtonsContainer}>
        <button
          type="button"
          id="trending"
          className={styles.button}
          style={currentURL.includes('/popular') ? activeButtonStyle : null}
          onClick={() => {
            onTrending();
          }}
        >
          Trending
        </button>
        <button
          type="button"
          id="topRated"
          style={currentURL.includes('top_rated') ? activeButtonStyle : null}
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
          style={currentURL.includes('upcoming') ? activeButtonStyle : null}
          onClick={() => {
            onUpcoming();
          }}
        >
          Coming soon
        </button>
        <select
          className={styles.button}
          name="genres"
          style={currentURL.includes('discover') ? activeButtonStyle : null}
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
          <i className="fas fa-th" style={viewMode === 'list' ? { color: '#D6D7D7' } : null} />
        </button>
        <button
          type="button"
          id="listView"
          className={styles.button}
          onClick={() => {
            switchViewMode('list');
          }}
        >
          <i className="fas fa-th-list" style={viewMode === 'gallery' ? { color: '#D6D7D7' } : null} />
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
  viewMode: PropTypes.string,
  currentURL: PropTypes.string,
};

MovieListNavBar.defaultProps = {
  onTrending: null,
  onTopRated: null,
  onUpcoming: null,
  onGenreChange: null,
  genres: [],
  currentGenre: '',
  switchViewMode: null,
  viewMode: '',
  currentURL: '',
};
