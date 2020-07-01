import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import MovieListNavBar from './MovieListNavBar';
import { getMovies, setCurrentURL } from '../../redux/actions';
import { genresSelector } from '../../redux/selectors';
import getURL from '../../utils/utils';

export function MovieListNavBarContainer({
  onTrending, onTopRated, onUpcoming, genres, onGenreChange
}) {

  return (
    <MovieListNavBar
      onTrending={onTrending}
      onTopRated={onTopRated}
      onUpcoming={onUpcoming}
      onGenreChange={onGenreChange}
      genres={genres}
    />
  );
}

export const mapStateToProps = (state) => ({
  genres: genresSelector(state),
});

export const mapDispatchToProps = (dispatch) => ({
  onTrending() {
    // dispatch(setCurrentURL(getURL('trending')));
    dispatch(getMovies(getURL('trending'), 1));
  },
  onTopRated() {
    // dispatch(setCurrentURL(getURL('topRated')));
    dispatch(getMovies(getURL('topRated'), 1));
  },
  onUpcoming() {
    // dispatch(setCurrentURL(getURL('upComing')));
    dispatch(getMovies(getURL('upComing'), 1));
  },
  onGenreChange(genreId) {
    // dispatch(setCurrentURL(getURL('byGenre')));
    dispatch(getMovies(getURL('byGenre'), 1, '', genreId));
  }
});

MovieListNavBarContainer.propTypes = {
  onTrending: PropTypes.func,
  onTopRated: PropTypes.func,
  onUpcoming: PropTypes.func,
  onGenreChange: PropTypes.func,
  genres: PropTypes.instanceOf(Array),
};

MovieListNavBarContainer.defaultProps = {
  onTrending: null,
  onTopRated: null,
  onUpcoming: null,
  onGenreChange: null,
  genres: [],
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieListNavBarContainer);
