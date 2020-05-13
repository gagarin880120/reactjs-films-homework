import React from 'react';
import SearchField from '../../components/SearchField/SearchField';
import MovieInfo from '../../components/MovieInfo/MovieInfo';
import ViewInfoButton from '../../components/ViewInfoButton/ViewInfoButton';
import WatchNowButtonRect from '../../components/WatchNowButtonRect/WatchNowButtonRect';
import styles from './MovieDetailsPage.module.scss';

export default function MovieDetailsPage() {
  return (
    <div className={styles.wrapper}>
      <main className={styles.main}>
        <MovieInfo />
        <div className={styles.buttonsContainer}>
          <WatchNowButtonRect />
          <ViewInfoButton />
        </div>
      </main>
    </div>
  )
}
