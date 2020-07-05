import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ButtonsWrapper from './ButtonsWrapper';
import { movieDetailsSelector } from '../../redux/selectors';
import { setModal, getTrailer } from '../../redux/actions';

export function ButtonsWrapperContainer({ movie, onTrailerButtonClick }) {
  return (
    <ButtonsWrapper
      movie={movie}
      onTrailerButtonClick={onTrailerButtonClick}
    />
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

ButtonsWrapperContainer.propTypes = {
  movie: PropTypes.instanceOf(Object),
  onTrailerButtonClick: PropTypes.func,
};

ButtonsWrapperContainer.defaultProps = {
  movie: {},
  onTrailerButtonClick: null,
};

export default connect(mapStateToProps, mapDispatchToProps)(ButtonsWrapperContainer);
