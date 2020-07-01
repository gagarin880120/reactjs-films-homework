import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import MovieDetailsPage from './MovieDetailsPage';
import Spinner from '../../components/Spinner/Spinner';
import { movieDetailsSelector, isLoadedSelector, resultsSelector } from '../../redux/selectors';
import { setModal, getTrailer } from '../../redux/actions';
import styles from './MovieDetailsPage.module.scss';

export function MovieDetailsPageContainer({
  movie, onTrailerButtonClick, isLoaded, results,
}) {
  return (
    movie
      ? (
        <MovieDetailsPage
          movie={movie}
          onTrailerButtonClick={onTrailerButtonClick}
          isLoaded={isLoaded}
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
  isLoaded: isLoadedSelector(state),
  results: resultsSelector(state),
});

export const mapDispatchToProps = (dispatch) => ({
  onTrailerButtonClick(id) {
    dispatch(setModal(true));
    dispatch(getTrailer(id));
  },
});

MovieDetailsPageContainer.propTypes = {
  movie: PropTypes.instanceOf(Object),
  onTrailerButtonClick: PropTypes.func,
  isLoaded: PropTypes.bool,
  results: PropTypes.instanceOf(Array),
};

MovieDetailsPageContainer.defaultProps = {
  movie: {},
  onTrailerButtonClick: null,
  isLoaded: false,
  results: [],
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetailsPageContainer);
