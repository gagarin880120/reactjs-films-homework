import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Footer from './Footer';
import { getMovies, getMoviesBySearch, getMoviesByGenre } from '../../redux/actions';
import {
  resultsSelector, currentPageSelector, currentAPIRequestSelector,
  areMoviesLoadedSelector, totalPagesSelector,
} from '../../redux/selectors';

export function FooterContainer({
  results, onIntersect, currentPage,
  areMoviesLoaded, totalPages, currentAPIRequest,
}) {
  return (
    <Footer
      results={results}
      currentPage={currentPage}
      onIntersect={onIntersect}
      areMoviesLoaded={areMoviesLoaded}
      totalPages={totalPages}
      currentAPIRequest={currentAPIRequest}
    />
  );
}

export const mapStateToProps = (state) => ({
  results: resultsSelector(state),
  currentPage: currentPageSelector(state),
  areMoviesLoaded: areMoviesLoadedSelector(state),
  totalPages: totalPagesSelector(state),
  currentAPIRequest: currentAPIRequestSelector(state),
});

export const mapDispatchToProps = (dispatch) => ({
  onIntersect(currentAPIRequest, page, results) {
    if (currentAPIRequest.includes('search')) {
      dispatch(getMoviesBySearch(currentAPIRequest, page, results));
    } else if (currentAPIRequest.includes('genre')) {
      dispatch(getMoviesByGenre(currentAPIRequest, page, results));
    } else {
      dispatch(getMovies(currentAPIRequest, page, results));
    }
  },
});

FooterContainer.propTypes = {
  results: PropTypes.instanceOf(Array),
  currentPage: PropTypes.number,
  onIntersect: PropTypes.func,
  areMoviesLoaded: PropTypes.bool,
  totalPages: PropTypes.number,
  currentAPIRequest: PropTypes.string,
};

FooterContainer.defaultProps = {
  results: [],
  currentPage: 1,
  onIntersect: null,
  areMoviesLoaded: false,
  totalPages: 0,
  currentAPIRequest: '',
};

export default connect(mapStateToProps, mapDispatchToProps)(FooterContainer);
