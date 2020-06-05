import React from 'react';
import Header from '../../components/Header/Header';
import MovieInfo from '../../components/MovieInfo/MovieInfo';
import ViewInfoButton from '../../components/ViewInfoButton/ViewInfoButton';
import WatchNowButtonRect from '../../components/WatchNowButtonRect/WatchNowButtonRect';
import styles from './MovieDetailsPage.module.scss';

export default function MovieDetailsPage() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.infoContainer}>
        <Header />
        <main className={styles.main}>
          <MovieInfo />
          <div className={styles.buttonsContainer}>
            <WatchNowButtonRect />
            <ViewInfoButton />
          </div>
        </main>
      </div>
    </div>
  )
}
