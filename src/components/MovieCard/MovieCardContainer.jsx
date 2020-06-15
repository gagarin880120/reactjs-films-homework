import React from 'react';
import { connect } from 'react-redux';
import MovieCard from './MovieCard';
import { setModal, getTrailer } from '../../redux/actions';

export function MovieCardContainer({ onTrailerButtonClick, movie }) {
  return (
    <MovieCard
      onTrailerButtonClick={onTrailerButtonClick}
      movie={movie}
    />
  )
}

export const mapDispatchToProps = (dispatch) => {
  return {
    onTrailerButtonClick(id) {
      dispatch(setModal(true));
      dispatch(getTrailer(id))
    }
  }
}

export default connect(null, mapDispatchToProps)(MovieCardContainer)
