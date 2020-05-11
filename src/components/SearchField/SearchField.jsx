import React from 'react';
import styles from './SearchField.module.scss';

export default function SearchField() {
  return (
    <input className={styles.searchInput} type="search" placeholder="the jungle book"/>
  )
}
