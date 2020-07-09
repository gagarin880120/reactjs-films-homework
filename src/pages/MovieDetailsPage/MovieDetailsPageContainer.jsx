import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import MovieDetailsPage from './MovieDetailsPage';
import Spinner from '../../components/Spinner/Spinner';
import {
  areMoviesLoadedSelector, resultsSelector, isMovieLoadedSelector,
} from '../../redux/selectors';
import { getMovies, setCurrentAPIRequest } from '../../redux/actions';
import styles from './MovieDetailsPage.module.scss';

export function MovieDetailsPageContainer({
  areMoviesLoaded, results, isMovieLoaded, onPageLoad,
}) {
  return (
    isMovieLoaded
      ? (
        <MovieDetailsPage
          areMoviesLoaded={areMoviesLoaded}
          results={results}
          onPageLoad={onPageLoad}
        />
      ) : (
        <div className={styles.pageLoading}>
          <Spinner />
        </div>
      )
  );
}

export const mapStateToProps = (state) => ({
  areMoviesLoaded: areMoviesLoadedSelector(state),
  results: resultsSelector(state),
  isMovieLoaded: isMovieLoadedSelector(state),
});

export const mapDispatchToProps = (dispatch) => ({
  onPageLoad() {
    dispatch(setCurrentAPIRequest('popular'));
    dispatch(getMovies('popular'));
  },
});

MovieDetailsPageContainer.propTypes = {
  areMoviesLoaded: PropTypes.bool,
  results: PropTypes.instanceOf(Array),
  isMovieLoaded: PropTypes.bool,
  onPageLoad: PropTypes.func,
};

MovieDetailsPageContainer.defaultProps = {
  areMoviesLoaded: false,
  results: [],
  isMovieLoaded: false,
  onPageLoad: null,
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetailsPageContainer);
