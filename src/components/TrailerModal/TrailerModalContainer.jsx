import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TrailerModal from './TrailerModal';
import { modalSelector, trailerSelector, isTrailerLoadedSelector } from '../../redux/selectors';
import { setModal } from '../../redux/actions';

export function TrailerModalContainer({
  isModalOpen, closeModal, trailerURL, isTrailerLoaded,
}) {
  return (
    <TrailerModal
      isModalOpen={isModalOpen}
      closeModal={closeModal}
      trailerURL={trailerURL}
      isTrailerLoaded={isTrailerLoaded}
    />
  );
}

export const mapStateToProps = (state) => ({
  isModalOpen: modalSelector(state),
  trailerURL: trailerSelector(state),
  isTrailerLoaded: isTrailerLoadedSelector(state),
});

export const mapDispatchToProps = (dispatch) => ({
  closeModal() {
    dispatch(setModal(false));
  },
});

TrailerModalContainer.propTypes = {
  isModalOpen: PropTypes.bool,
  closeModal: PropTypes.func,
  trailerURL: PropTypes.string,
  isTrailerLoaded: PropTypes.bool,
};

TrailerModalContainer.defaultProps = {
  isModalOpen: false,
  closeModal: null,
  trailerURL: '',
  isTrailerLoaded: false,
};

export default connect(mapStateToProps, mapDispatchToProps)(TrailerModalContainer);
