import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SearchResultsPage from './SearchResultsPage';
import {
  resultsSelector, areMoviesLoadedSelector, isMovieLoadedSelector, currentAPIRequestSelector,
} from '../../redux/selectors';
import { getMovies, getMoviesByGenre, getMoviesBySearch } from '../../redux/actions';

export function SearchResultsPageContainer({
  results, areMoviesLoaded, isMovieLoaded, onCurrentAPIRequestUpdate, currentAPIRequest,
}) {
  return (
    <SearchResultsPage
      results={results}
      areMoviesLoaded={areMoviesLoaded}
      isMovieLoaded={isMovieLoaded}
      currentAPIRequest={currentAPIRequest}
      onCurrentAPIRequestUpdate={onCurrentAPIRequestUpdate}
    />
  );
}

export const mapStateToProps = (state) => ({
  results: resultsSelector(state),
  areMoviesLoaded: areMoviesLoadedSelector(state),
  isMovieLoaded: isMovieLoadedSelector(state),
  currentAPIRequest: currentAPIRequestSelector(state),
});

export const mapDispatchToProps = (dispatch) => ({
  onCurrentAPIRequestUpdate(currentAPIRequest) {
    if (currentAPIRequest.includes('genre')) {
      dispatch(getMoviesByGenre(currentAPIRequest, 1, [], true));
    } else if (currentAPIRequest.includes('search')) {
      dispatch(getMoviesBySearch(currentAPIRequest, 1, [], true));
    } else {
      dispatch(getMovies(currentAPIRequest, 1, [], true));
    }
  },
});

SearchResultsPageContainer.propTypes = {
  results: PropTypes.instanceOf(Array),
  areMoviesLoaded: PropTypes.bool,
  isMovieLoaded: PropTypes.bool,
  currentAPIRequest: PropTypes.string,
  onCurrentAPIRequestUpdate: PropTypes.func,
};

SearchResultsPageContainer.defaultProps = {
  results: [],
  areMoviesLoaded: false,
  isMovieLoaded: false,
  currentAPIRequest: '',
  onCurrentAPIRequestUpdate: null,
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchResultsPageContainer);
