import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import MovieListNavBar from './MovieListNavBar';
import { setViewMode, setCurrentAPIRequest } from '../../redux/actions';
import {
  genresSelector, viewModeSelector, currentAPIRequestSelector,
} from '../../redux/selectors';

export function MovieListNavBarContainer({
  onTrending, onTopRated, onUpcoming, genres, onGenreChange,
  switchViewMode, viewMode, currentAPIRequest,
}) {
  return (
    <MovieListNavBar
      onTrending={onTrending}
      onTopRated={onTopRated}
      onUpcoming={onUpcoming}
      onGenreChange={onGenreChange}
      genres={genres}
      switchViewMode={switchViewMode}
      viewMode={viewMode}
      currentAPIRequest={currentAPIRequest}
    />
  );
}

export const mapStateToProps = (state) => ({
  genres: genresSelector(state),
  viewMode: viewModeSelector(state),
  currentAPIRequest: currentAPIRequestSelector(state),
});

export const mapDispatchToProps = (dispatch) => ({
  onTrending() {
    dispatch(setCurrentAPIRequest('popular'));
  },
  onTopRated() {
    dispatch(setCurrentAPIRequest('top_rated'));
  },
  onUpcoming() {
    dispatch(setCurrentAPIRequest('upcoming'));
  },
  onGenreChange(genreId) {
    dispatch(setCurrentAPIRequest(`genre=${genreId}`));
  },
  switchViewMode(mode) {
    dispatch(setViewMode(mode));
  },
});

MovieListNavBarContainer.propTypes = {
  onTrending: PropTypes.func,
  onTopRated: PropTypes.func,
  onUpcoming: PropTypes.func,
  onGenreChange: PropTypes.func,
  genres: PropTypes.instanceOf(Array),
  switchViewMode: PropTypes.func,
  viewMode: PropTypes.string,
  currentAPIRequest: PropTypes.string,
};

MovieListNavBarContainer.defaultProps = {
  onTrending: null,
  onTopRated: null,
  onUpcoming: null,
  onGenreChange: null,
  genres: [],
  switchViewMode: null,
  viewMode: '',
  currentAPIRequest: '',
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieListNavBarContainer);
