import React from 'react';
import PropTypes from 'prop-types';
import styles from './InfoButton.module.scss';

export default function InfoButton({ onInfoButtonClick }) {
  return (
    <button
      onClick={onInfoButtonClick}
      className={styles.infoButton}
      type="button"
      testid="infoButton"
    >
      View Info
    </button>
  );
}

InfoButton.propTypes = {
  onInfoButtonClick: PropTypes.func,
};

InfoButton.defaultProps = {
  onInfoButtonClick: null,
};
