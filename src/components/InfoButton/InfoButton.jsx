import React from 'react';
import styles from './InfoButton.module.scss';

export default function InfoButton(props) {
  return (
    <button onClick={props.onInfoButtonClick} className={styles.infoButton}>View Info</button>
  )
}
