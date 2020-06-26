import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import MovieList from './MovieList';
import { resultsSelector, modalSelector, filteredResultsSelector } from '../../redux/selectors';

export function MovieListContainer({ results, isModalOpen }) {
  return (
    <MovieList
      results={results}
      isModalOpen={isModalOpen}
    />
  );
}

export const mapStateToProps = (state) => ({
  results: filteredResultsSelector(state) ? filteredResultsSelector(state) : resultsSelector(state),
  isModalOpen: modalSelector(state),
});

MovieListContainer.propTypes = {
  results: PropTypes.instanceOf(Array),
  isModalOpen: PropTypes.bool,
};

MovieListContainer.defaultProps = {
  results: [],
  isModalOpen: false,
};

export default connect(mapStateToProps)(MovieListContainer);
