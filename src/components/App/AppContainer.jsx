import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  getGenres, setCurrentAPIRequest, getMovieDetails, getMovies,
} from '../../redux/actions';
import { genresSelector, currentAPIRequestSelector } from '../../redux/selectors';
import App from './App';

export function AppContainer({
  onAppLoad, genres, currentAPIRequest, onReload,
}) {
  return (
    <Router>
      <App
        onAppLoad={onAppLoad}
        genres={genres}
        currentAPIRequest={currentAPIRequest}
        onReload={onReload}
      />
    </Router>
  );
}

export const mapStateToProps = (state) => ({
  genres: genresSelector(state),
  currentAPIRequest: currentAPIRequestSelector(state),
});

export const mapDispatchToProps = (dispatch) => ({
  onAppLoad() {
    dispatch(getGenres());
  },
  onReload(path) {
    if (path.includes('movie/')) {
      dispatch(getMovieDetails(path.slice(path.lastIndexOf('/') + 1)));
      dispatch(getMovies('popular', 1));
    } else {
      dispatch(setCurrentAPIRequest(path.slice(path.indexOf('/') + 1)));
    }
  },

});

AppContainer.propTypes = {
  onAppLoad: PropTypes.func,
  genres: PropTypes.instanceOf(Array),
  currentAPIRequest: PropTypes.string,
  onReload: PropTypes.func,
};

AppContainer.defaultProps = {
  onAppLoad: null,
  genres: [],
  currentAPIRequest: '',
  onReload: null,
};

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
