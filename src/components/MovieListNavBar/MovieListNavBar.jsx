import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './MovieListNavBar.module.scss';

export default function MovieListNavBar({
  onTrending, onTopRated, onUpcoming, genres, onGenreChange,
  switchViewMode, viewMode, currentAPIRequest,
}) {
  const activeButtonStyle = {
    fontWeight: 'bold',
    textDecoration: 'underline',
  };

  const history = useHistory();
  return (
    <div className={styles.wrapper}>
      <div className={styles.actionButtonsContainer}>
        <Link
          to="/popular"
          id="popular"
          className={styles.button}
          style={currentAPIRequest.includes('popular') ? activeButtonStyle : null}
          onClick={() => {
            onTrending();
          }}
        >
          Trending
        </Link>
        <Link
          to="/top_rated"
          id="topRated"
          style={currentAPIRequest.includes('top_rated') ? activeButtonStyle : null}
          className={styles.button}
          onClick={() => {
            onTopRated();
          }}
        >
          Top rated
        </Link>
        <Link
          to="/upcoming"
          id="topRated"
          style={currentAPIRequest.includes('upcoming') ? activeButtonStyle : null}
          className={styles.button}
          onClick={() => {
            onUpcoming();
          }}
        >
          Coming soon
        </Link>
        <select
          className={styles.button}
          name="genres"
          style={currentAPIRequest.includes('genre') ? activeButtonStyle : null}
          onChange={(e) => {
            onGenreChange(e.target.value);
            history.location.pathname = '/';
            history.push(`genre=${e.target.value}`);
          }}
          value={currentAPIRequest.includes('genre') ? currentAPIRequest.slice(currentAPIRequest.indexOf('=') + 1) : ''}
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
  switchViewMode: PropTypes.func,
  viewMode: PropTypes.string,
  currentAPIRequest: PropTypes.string,
};

MovieListNavBar.defaultProps = {
  onTrending: null,
  onTopRated: null,
  onUpcoming: null,
  onGenreChange: null,
  genres: [],
  switchViewMode: null,
  viewMode: '',
  currentAPIRequest: '',
};
