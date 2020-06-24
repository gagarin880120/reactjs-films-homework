import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import MovieList from './MovieList';
import { searchResultsSelector, modalSelector } from '../../redux/selectors';
import { getGenres } from '../../redux/actions';

export function MovieListContainer({ results, isModalOpen, onGetGenres }) {
  return (
    <MovieList
      results={results}
      isModalOpen={isModalOpen}
      onGetGenres={onGetGenres}
    />
  );
}

export const mapStateToProps = (state) => ({
  results: searchResultsSelector(state),
  isModalOpen: modalSelector(state),
});

export const mapDispatchToProps = (dispatch) => ({
  onGetGenres() {
    dispatch(getGenres());
  },
});

MovieListContainer.propTypes = {
  results: PropTypes.instanceOf(Array),
  isModalOpen: PropTypes.bool,
  onGetGenres: PropTypes.func,
};

MovieListContainer.defaultProps = {
  results: [],
  isModalOpen: false,
  onGetGenres: null,
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieListContainer);
