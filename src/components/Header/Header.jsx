import React from 'react';
import { Link } from 'react-router-dom';
import SearchFieldContainer from '../SearchField';
import styles from './Header.module.scss';

export default function Header() {
  return (
    <header className={styles.header}>
      <Link to="/">
        <h1 className={styles.title}>
          Films
        </h1>
      </Link>
      <SearchFieldContainer />
    </header>
  );
}
