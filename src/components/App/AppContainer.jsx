import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getGenres, getMovies } from '../../redux/actions';
import { genresSelector } from '../../redux/selectors';
import getURL from '../../utils/utils';
import App from './App';

export function AppContainer({ onAppLoad, genres }) {
  return (
    <App
      onAppLoad={onAppLoad}
      genres={genres}
    />
  );
}

export const mapStateToProps = (state) => ({
  genres: genresSelector(state),
});

export const mapDispatchToProps = (dispatch) => ({
  onAppLoad() {
    dispatch(getGenres());
    dispatch(getMovies(getURL('trending'), 1));
  },
});

AppContainer.propTypes = {
  onAppLoad: PropTypes.func,
  genres: PropTypes.instanceOf(Array),
};

AppContainer.defaultProps = {
  onAppLoad: null,
  genres: [],
};

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
