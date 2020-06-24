import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TrailerModal from './TrailerModal';
import { modalSelector, trailerSelector } from '../../redux/selectors';
import { setModal } from '../../redux/actions';

export function TrailerModalContainer({ isModalOpen, closeModal, trailerURL }) {
  return (
    <TrailerModal
      isModalOpen={isModalOpen}
      closeModal={closeModal}
      trailerURL={trailerURL}
    />
  );
}

export const mapStateToProps = (state) => ({
  isModalOpen: modalSelector(state),
  trailerURL: trailerSelector(state),
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
};

TrailerModalContainer.defaultProps = {
  isModalOpen: false,
  closeModal: null,
  trailerURL: '',
};

export default connect(mapStateToProps, mapDispatchToProps)(TrailerModalContainer);
