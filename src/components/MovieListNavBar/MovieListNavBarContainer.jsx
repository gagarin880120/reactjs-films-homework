import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import MovieListNavBar from './MovieListNavBar';
import { getMovies, setCurrentGenre } from '../../redux/actions';
import { genresSelector, currentGenreSelector } from '../../redux/selectors';
import getURL from '../../utils/utils';

export function MovieListNavBarContainer({
  onTrending, onTopRated, onUpcoming, genres, onGenreChange, currentGenre,
}) {
  return (
    <MovieListNavBar
      onTrending={onTrending}
      onTopRated={onTopRated}
      onUpcoming={onUpcoming}
      onGenreChange={onGenreChange}
      genres={genres}
      currentGenre={currentGenre}
    />
  );
}

export const mapStateToProps = (state) => ({
  genres: genresSelector(state),
  currentGenre: currentGenreSelector(state),
});

export const mapDispatchToProps = (dispatch) => ({
  onTrending() {
    dispatch(getMovies(getURL('trending'), 1));
    dispatch(setCurrentGenre(''));
  },
  onTopRated() {
    dispatch(getMovies(getURL('topRated'), 1));
    dispatch(setCurrentGenre(''));
  },
  onUpcoming() {
    dispatch(getMovies(getURL('upComing'), 1));
    dispatch(setCurrentGenre(''));
  },
  onGenreChange(genreId) {
    dispatch(setCurrentGenre(genreId));
    dispatch(getMovies(getURL('byGenre'), 1, '', genreId));
  },
});

MovieListNavBarContainer.propTypes = {
  onTrending: PropTypes.func,
  onTopRated: PropTypes.func,
  onUpcoming: PropTypes.func,
  onGenreChange: PropTypes.func,
  genres: PropTypes.instanceOf(Array),
  currentGenre: PropTypes.string,
};

MovieListNavBarContainer.defaultProps = {
  onTrending: null,
  onTopRated: null,
  onUpcoming: null,
  onGenreChange: null,
  genres: [],
  currentGenre: '',
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieListNavBarContainer);
