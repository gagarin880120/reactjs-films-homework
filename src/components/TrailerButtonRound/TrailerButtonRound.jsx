import React from 'react';
import styles from './TrailerButtonRound.module.scss';

export default function TrailerButtonRound(props) {
  return (
    <button
      testid={props.testid}
      onClick={() => {
        props.onTrailerButtonClick(props.id);
      }}
      className={styles.trailerButton}
    >
      <i className="fas fa-play"></i>
    </button>
  )
}
