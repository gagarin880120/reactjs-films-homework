import React from 'react';
import styles from './TrailerButtonRect.module.scss';
export default function TrailerButtonRect(props) {
  return (
  <button
    onClick={props.onTrailerButtonClick}
    className={styles.watchButton}
  >
    Watch Now
  </button>
  );
}

