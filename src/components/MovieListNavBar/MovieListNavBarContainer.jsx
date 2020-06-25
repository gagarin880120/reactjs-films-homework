import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getTrendingResults } from '../../redux/actions';
import MovieListNavBar from './MovieListNavBar';

export function MovieListNavBarContainer({ onTrending }) {
  useEffect(() => {
    onTrending();
  }, []);

  return (
    <MovieListNavBar
      onTrending={onTrending}
    />
  );
}

export const mapDispatchToProps = (dispatch) => ({
  onTrending() {
    dispatch(getTrendingResults());
  },
});

MovieListNavBarContainer.propTypes = {
  onTrending: PropTypes.func,
};

MovieListNavBarContainer.defaultProps = {
  onTrending: null,
};

export default connect(null, mapDispatchToProps)(MovieListNavBarContainer);
