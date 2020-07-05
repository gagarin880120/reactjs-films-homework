import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Footer from './Footer';
import { getMovies } from '../../redux/actions';
import {
  resultsSelector, currentPageSelector, querySelector,
  areMoviesLoadedSelector, currentURLSelector, totalPagesSelector,
} from '../../redux/selectors';

export function FooterContainer({
  results, onIntersect, currentAction, currentPage,
  query, areMoviesLoaded, url, totalPages,
}) {
  return (
    <Footer
      results={results}
      currentPage={currentPage}
      onIntersect={onIntersect}
      query={query}
      currentAction={currentAction}
      areMoviesLoaded={areMoviesLoaded}
      url={url}
      totalPages={totalPages}
    />
  );
}

export const mapStateToProps = (state) => ({
  results: resultsSelector(state),
  currentPage: currentPageSelector(state),
  query: querySelector(state),
  areMoviesLoaded: areMoviesLoadedSelector(state),
  url: currentURLSelector(state),
  totalPages: totalPagesSelector(state),
});

export const mapDispatchToProps = (dispatch) => ({
  onIntersect(url, page, query, results) {
    dispatch(getMovies(url, page, query, '', results));
  },
});

FooterContainer.propTypes = {
  results: PropTypes.instanceOf(Array),
  currentPage: PropTypes.number,
  currentAction: PropTypes.string,
  onIntersect: PropTypes.func,
  query: PropTypes.string,
  areMoviesLoaded: PropTypes.bool,
  url: PropTypes.string,
  totalPages: PropTypes.number,
};

FooterContainer.defaultProps = {
  results: [],
  currentPage: 1,
  currentAction: '',
  onIntersect: null,
  query: '',
  areMoviesLoaded: false,
  url: '',
  totalPages: 0,
};

export default connect(mapStateToProps, mapDispatchToProps)(FooterContainer);
