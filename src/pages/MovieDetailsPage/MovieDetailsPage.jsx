import React from 'react';
import Header from '../../components/Header/Header';
import MovieInfo from '../../components/MovieInfo/MovieInfo';
import InfoButton from '../../components/InfoButton/InfoButton';
import TrailerButtonRect from '../../components/TrailerButtonRect/TrailerButtonRect';
import MovieListContainer from '../../components/MovieList';
import styles from './MovieDetailsPage.module.scss';

export default function MovieDetailsPage() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.infoContainer}>
        <Header />
        <main className={styles.main}>
          <MovieInfo />
          <div className={styles.buttonsContainer}>
            <TrailerButtonRect />
            <InfoButton />
          </div>
        </main>
      </div>
      <MovieListContainer />
    </div>
  );
}
