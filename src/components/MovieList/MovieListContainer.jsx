import React, { useEffect } from 'react';
import MovieList from './MovieList';
import { connect } from 'react-redux';
import { searchResultsSelector, genresSelector } from '../../redux/selectors';
import { getGenres } from '../../redux/actions';

export function MovieListContainer({onGetGenres, results, genres}) {
  useEffect(() => {
    onGetGenres();
  }, [])

  return (
    <div>
      <MovieList
        results={results}
        genres={genres}
      />
    </div>
  )
}

export const mapStateToProps = state => {
  return {
    results: searchResultsSelector(state),
    genres: genresSelector(state)
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
