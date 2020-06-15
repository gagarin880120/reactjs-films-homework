import React, { useEffect } from 'react';
import MovieList from './MovieList';
import { connect } from 'react-redux';
import { searchResultsSelector, modalSelector } from '../../redux/selectors';
import { getGenres } from '../../redux/actions';

export function MovieListContainer({onGetGenres, results, isModalOpen}) {
  useEffect(() => {
    onGetGenres();
  }, [])

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

export const mapDispatchToProps = (dispatch) => {
  return {
    onGetGenres() {
      dispatch(getGenres())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieListContainer)
