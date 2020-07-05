import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import MovieDetailsPage from './MovieDetailsPage';
import Spinner from '../../components/Spinner/Spinner';
import { movieDetailsSelector, areMoviesLoadedSelector, resultsSelector } from '../../redux/selectors';
import styles from './MovieDetailsPage.module.scss';

export function MovieDetailsPageContainer({
  movie, areMoviesLoaded, results,
}) {
  return (
    movie
      ? (
        <MovieDetailsPage
          movie={movie}
          areMoviesLoaded={areMoviesLoaded}
          results={results}
        />
      ) : (
        <div className={styles.pageLoading}>
          <Spinner />
        </div>
      )
  );
}

export const mapStateToProps = (state) => ({
  movie: movieDetailsSelector(state),
  areMoviesLoaded: areMoviesLoadedSelector(state),
  results: resultsSelector(state),
});

MovieDetailsPageContainer.propTypes = {
  movie: PropTypes.instanceOf(Object),
  areMoviesLoaded: PropTypes.bool,
  results: PropTypes.instanceOf(Array),
};

MovieDetailsPageContainer.defaultProps = {
  movie: {},
  areMoviesLoaded: false,
  results: [],
};

export default connect(mapStateToProps)(MovieDetailsPageContainer);
