import React from 'react';
import SearchField from '../SearchField/SearchField';
import styles from './Header.module.scss';

export default function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>
        Films
      </h1>
      <SearchField />
    </header>
  )
}
