import React from 'react';
import styles from './TrailerButtonRound.module.scss';

export default function TrailerButtonRound(props) {
  return (
    <button
      onClick={props.onTrailerButtonClick}
      className={styles.trailerButton}
    >▶</button>
  )
}
