import React from 'react';
import Header from '../../components/Header/Header';
import MovieListContainer from '../../components/MovieList';
import styles from './SearchResultsPage.module.scss';

export default function SearchResultsPage() {
  return (
    <div className={styles.wrapper}>
      <Header />
      <MovieListContainer />
    </div>
  );
}
