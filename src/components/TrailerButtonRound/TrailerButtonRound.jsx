import React from 'react';
import styles from './TrailerButtonRound.module.scss';

export default function TrailerButtonRound(props) {
  return (
    <button
      data-testid={props.testid}
      onClick={props.onTrailerButtonClick}
      className={styles.trailerButton}
    >▶</button>
  )
}
