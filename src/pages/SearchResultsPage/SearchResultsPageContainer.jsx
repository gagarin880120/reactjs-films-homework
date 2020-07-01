import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SearchResultsPage from './SearchResultsPage';
import { resultsSelector, isLoadedSelector } from '../../redux/selectors';
import { getMovies } from '../../redux/actions';
import getURL from '../../utils/utils';

export function SearchResultsPageContainer({ onTrending, results, isLoaded }) {
  useEffect(() => {
    onTrending();
  }, []);

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
})

export const mapDispatchToProps = (dispatch) => ({
  onTrending() {
    dispatch(getMovies(getURL('trending'), 1));
  },
});

SearchResultsPageContainer.propTypes = {
  onTrending: PropTypes.func,
  results: PropTypes.instanceOf(Array),
  isLoaded: PropTypes.bool,
};

SearchResultsPageContainer.defaultProps = {
  onTrending: null,
  results: [],
  isLoaded: false,
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchResultsPageContainer);
