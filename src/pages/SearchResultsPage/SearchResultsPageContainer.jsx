import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SearchResultsPage from './SearchResultsPage';
import { resultsSelector, areMoviesLoadedSelector } from '../../redux/selectors';

export function SearchResultsPageContainer({ results, areMoviesLoaded }) {
  return (
    <SearchResultsPage
      results={results}
      areMoviesLoaded={areMoviesLoaded}
    />
  );
}

export const mapStateToProps = (state) => ({
  results: resultsSelector(state),
  areMoviesLoaded: areMoviesLoadedSelector(state),
});

SearchResultsPageContainer.propTypes = {
  results: PropTypes.instanceOf(Array),
  areMoviesLoaded: PropTypes.bool,
};

SearchResultsPageContainer.defaultProps = {
  results: [],
  areMoviesLoaded: false,
};

export default connect(mapStateToProps)(SearchResultsPageContainer);
