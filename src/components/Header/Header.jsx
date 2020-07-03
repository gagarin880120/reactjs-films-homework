import React from 'react';
import SearchFieldContainer from '../SearchField';
import styles from './Header.module.scss';

export default function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>
        Films
      </h1>
      <SearchFieldContainer />
    </header>
  );
    </header>
  )
}
