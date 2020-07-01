import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Footer from './Footer';
import { getMovies } from '../../redux/actions';
import {
  resultsSelector, currentActionSelector, currentPageSelector, querySelector,
  currentGenreIdSelector, isLoadedSelector, currentURLSelector, totalPagesSelector,
} from '../../redux/selectors';

export function FooterContainer({
  results, onIntersect, currentAction, currentPage,
  query, currentGenre, isLoaded, url, totalPages,
}) {
  return (
    <Footer
      results={results}
      currentPage={currentPage}
      onIntersect={onIntersect}
      query={query}
      currentGenre={currentGenre}
      currentAction={currentAction}
      isLoaded={isLoaded}
      url={url}
      totalPages={totalPages}
    />
  );
}

export const mapStateToProps = (state) => ({
  results: resultsSelector(state),
  currentPage: currentPageSelector(state),
  currentAction: currentActionSelector(state),
  query: querySelector(state),
  currentGenre: currentGenreIdSelector(state),
  isLoaded: isLoadedSelector(state),
  url: currentURLSelector(state),
  totalPages: totalPagesSelector(state),
});

export const mapDispatchToProps = (dispatch) => ({
  onIntersect(url, page, query, genre, results) {
    dispatch(getMovies(url, page, query, genre, results));
  },
});

FooterContainer.propTypes = {
  results: PropTypes.instanceOf(Array),
  currentPage: PropTypes.number,
  currentAction: PropTypes.string,
  onIntersect: PropTypes.func,
  query: PropTypes.string,
  currentGenre: PropTypes.number,
  isLoaded: PropTypes.bool,
  url: PropTypes.string,
  totalPages: PropTypes.number,
};

FooterContainer.defaultProps = {
  results: [],
  currentPage: 1,
  currentAction: '',
  onIntersect: null,
  query: '',
  currentGenre: 0,
  isLoaded: false,
  url: '',
  totalPages: 0,
};

export default connect(mapStateToProps, mapDispatchToProps)(FooterContainer);
