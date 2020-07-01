import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import MovieInfo from './MovieInfo';
import { movieDetailsSelector } from '../../redux/selectors';

export function MovieInfoContainer({ movie }) {
  return (
    <MovieInfo
      movie={movie}
    />
  );
}

export const mapStateToProps = (state) => ({
  movie: movieDetailsSelector(state),
});

MovieInfoContainer.propTypes = {
  movie: PropTypes.instanceOf(Object),
};

MovieInfoContainer.defaultProps = {
  movie: {},
};

export default connect(mapStateToProps)(MovieInfoContainer);
