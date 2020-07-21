import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import MovieList from './MovieList';
import { resultsSelector, modalSelector, viewModeSelector } from '../../redux/selectors';

export function MovieListContainer({ results, isModalOpen, viewMode }) {
  return (
    <MovieList
      results={results}
      isModalOpen={isModalOpen}
      viewMode={viewMode}
    />
  );
}

export const mapStateToProps = (state) => ({
  results: resultsSelector(state),
  isModalOpen: modalSelector(state),
  viewMode: viewModeSelector(state),
});

MovieListContainer.propTypes = {
  results: PropTypes.instanceOf(Array),
  isModalOpen: PropTypes.bool,
  viewMode: PropTypes.string,
};

MovieListContainer.defaultProps = {
  results: [],
  isModalOpen: false,
  viewMode: '',
};

export default connect(mapStateToProps)(MovieListContainer);
