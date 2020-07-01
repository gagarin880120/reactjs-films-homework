import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getGenres } from '../../redux/actions';
import { genresSelector } from '../../redux/selectors';
import App from './App';
import Spinner from '../Spinner/Spinner';
import styles from './App.module.scss';

export function AppContainer({ onGetGenres, genres }) {
  useEffect(() => {
    onGetGenres();
  }, []);

  return (
    genres
      ? <App /> : (
        <div className={styles.loading}>
          <Spinner />
        </div>
      )
  );
}

export const mapStateToProps = (state) => ({
  genres: genresSelector(state),
});

export const mapDispatchToProps = (dispatch) => ({
  onGetGenres() {
    dispatch(getGenres());
  },
});

AppContainer.propTypes = {
  onGetGenres: PropTypes.func,
  genres: PropTypes.instanceOf(Array),
};

AppContainer.defaultProps = {
  onGetGenres: null,
  genres: [],
};

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
