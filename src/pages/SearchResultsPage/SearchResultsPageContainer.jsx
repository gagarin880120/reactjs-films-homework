import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SearchResultsPage from './SearchResultsPage';
import { resultsSelector, isLoadedSelector } from '../../redux/selectors';

export function SearchResultsPageContainer({ results, isLoaded }) {
  return (
    <SearchResultsPage
      results={results}
      isLoaded={isLoaded}
    />
  );
}

export const mapStateToProps = (state) => ({
  results: resultsSelector(state),
  isLoaded: isLoadedSelector(state),
});

SearchResultsPageContainer.propTypes = {
  results: PropTypes.instanceOf(Array),
  isLoaded: PropTypes.bool,
};

SearchResultsPageContainer.defaultProps = {
  results: [],
  isLoaded: false,
};

export default connect(mapStateToProps)(SearchResultsPageContainer);
