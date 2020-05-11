import React from 'react';
import SearchField from '../../components/SearchField/SearchField';
import MovieInfo from '../../components/MovieInfo/MovieInfo';
import styles from './MovieDetailsPage.module.scss';

export default function MovieDetailsPage() {
  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <h1 className={styles.title}>
          Films
        </h1>
        <div className={styles.searchFieldContainer}>
          <SearchField />
        </div>
      </header>
      <main className={styles.main}>
        <MovieInfo />
      </main>
    </div>
  )
}
