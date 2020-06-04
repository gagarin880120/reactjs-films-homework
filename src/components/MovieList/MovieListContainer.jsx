import React, { useEffect } from 'react';
import MovieList from './MovieList';
import { connect } from 'react-redux';
import searchResultsSelector from '../../redux/selectors';
import { getGenres } from '../../redux/actions';

export function MovieListContainer({onGetGenres, results}) {
  useEffect(() => {
    onGetGenres();
  }, [])

  return (
    <MovieList
      results={results}
    />
  )
}

export const mapStateToProps = state => {
  return {
    results: searchResultsSelector(state),
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
