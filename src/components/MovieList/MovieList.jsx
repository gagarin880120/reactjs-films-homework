import React from 'react';
import styles from './MovieList.module.scss';

export default function MovieList(props) {
  return (
    <div className={styles.wrapper}>
      {props.arrayOfResults}
    </div>
  )
}
