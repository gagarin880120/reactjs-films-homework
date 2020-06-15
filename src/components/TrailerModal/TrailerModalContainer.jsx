import React, { useEffect } from 'react';
import TrailerModal from './TrailerModal';
import { connect } from 'react-redux';
import { modalSelector, trailerSelector } from '../../redux/selectors';
import { setModal } from '../../redux/actions';

export function TrailerModalContainer({isModalOpen, closeModal, trailerURL}) {

  return (
    <TrailerModal
      isModalOpen={isModalOpen}
      closeModal={closeModal}
      trailerURL={trailerURL}
    />
  )
}

export const mapStateToProps = state => {
  return {
    isModalOpen: modalSelector(state),
    trailerURL: trailerSelector(state)
  }
}

export const mapDispatchToProps = (dispatch) => {
  return {
    closeModal() {
      dispatch(setModal(false));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TrailerModalContainer);
