import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import GalleryModeMovieCard from './GalleryModeMovieCard';
import ListModeMovieCard from './ListModeMovieCard';
import { viewModeSelector } from '../../redux/selectors';
import { setModal, getTrailer, getMovieDetails } from '../../redux/actions';

export function MovieCardContainer({
  onTrailerButtonClick, movie, onLinkClick, viewMode,
}) {
  return (
    viewMode === 'gallery'
      ? (
        <GalleryModeMovieCard
          onTrailerButtonClick={onTrailerButtonClick}
          movie={movie}
          onLinkClick={onLinkClick}
          viewMode={viewMode}
        />
      ) : (
        <ListModeMovieCard
          onTrailerButtonClick={onTrailerButtonClick}
          movie={movie}
          onLinkClick={onLinkClick}
          viewMode={viewMode}
        />
      )
  );
}

export const mapStateToProps = (state) => ({
  viewMode: viewModeSelector(state),
});

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
  viewMode: PropTypes.string,
};

MovieCardContainer.defaultProps = {
  onTrailerButtonClick: null,
  onLinkClick: null,
  movie: {},
  viewMode: '',
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieCardContainer);
