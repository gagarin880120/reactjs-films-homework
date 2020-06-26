import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import MovieDetailsPage from './MovieDetailsPage';
import { movieDetailsSelector } from '../../redux/selectors';
import { setModal, getTrailer } from '../../redux/actions';

export function MovieDetailsPageContainer({ movie, onTrailerButtonClick }) {
  return (
    movie
      ? (
        <MovieDetailsPage
          movie={movie}
          onTrailerButtonClick={onTrailerButtonClick}
        />
      ) : <>Loading...</>
  );
}

export const mapStateToProps = (state) => ({
  movie: movieDetailsSelector(state),
});

export const mapDispatchToProps = (dispatch) => ({
  onTrailerButtonClick(id) {
    dispatch(setModal(true));
    dispatch(getTrailer(id));
  },
});

MovieDetailsPageContainer.propTypes = {
  movie: PropTypes.instanceOf(Object),
  onTrailerButtonClick: PropTypes.func
};

MovieDetailsPageContainer.defaultProps = {
  movie: {},
  onTrailerButtonClick: null
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetailsPageContainer);
