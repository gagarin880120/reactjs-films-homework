import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import MovieCard from './MovieCard';
import {
  setModal, getTrailer, getMovieDetails,
} from '../../redux/actions';

export function MovieCardContainer({ onTrailerButtonClick, movie, onLinkClick }) {
  return (
    <MovieCard
      onTrailerButtonClick={onTrailerButtonClick}
      movie={movie}
      onLinkClick={onLinkClick}
    />
  );
}

export const mapDispatchToProps = (dispatch) => ({
  onTrailerButtonClick(id) {
    dispatch(setModal(true));
    dispatch(getTrailer(id));
  },
  onLinkClick(id) {
    dispatch(getMovieDetails(id));
  },
});

MovieCardContainer.propTypes = {
  onTrailerButtonClick: PropTypes.func,
  onLinkClick: PropTypes.func,
  movie: PropTypes.shape({}),
};

MovieCardContainer.defaultProps = {
  onTrailerButtonClick: null,
  onLinkClick: null,
  movie: {},
};

export default connect(null, mapDispatchToProps)(MovieCardContainer);
