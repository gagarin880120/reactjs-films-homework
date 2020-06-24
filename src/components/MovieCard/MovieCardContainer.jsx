import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import MovieCard from './MovieCard';
import { setModal, getTrailer } from '../../redux/actions';

export function MovieCardContainer({ onTrailerButtonClick, movie }) {
  return (
    <MovieCard
      onTrailerButtonClick={onTrailerButtonClick}
      movie={movie}
    />
  );
}

export const mapDispatchToProps = (dispatch) => ({
  onTrailerButtonClick(id) {
    dispatch(setModal(true));
    dispatch(getTrailer(id));
  },
});

MovieCardContainer.propTypes = {
  onTrailerButtonClick: PropTypes.func,
  movie: PropTypes.shape({}),
};

MovieCardContainer.defaultProps = {
  onTrailerButtonClick: null,
  movie: {},
};

export default connect(null, mapDispatchToProps)(MovieCardContainer);
