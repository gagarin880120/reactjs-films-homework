import React from 'react';
import MovieList from './MovieList';
import { connect } from 'react-redux';
import { searchResultsSelector, modalSelector } from '../../redux/selectors';

export function MovieListContainer({results, isModalOpen}) {

  return (
    <MovieList
      results={results}
      isModalOpen={isModalOpen}
    />
  )
}

export const mapStateToProps = state => {
  return {
    results: searchResultsSelector(state),
    isModalOpen: modalSelector(state)
  }
}

export default connect(mapStateToProps)(MovieListContainer)
