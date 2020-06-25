import React from 'react';
import PropTypes from 'prop-types';
import Header from '../../components/Header/Header';
import MovieInfoContainer from '../../components/MovieInfo';
import InfoButton from '../../components/InfoButton/InfoButton';
import TrailerButtonRect from '../../components/TrailerButtonRect/TrailerButtonRect';
import MovieListContainer from '../../components/MovieList';
import styles from './MovieDetailsPage.module.scss';

export default function MovieDetailsPage({ background }) {
  const style = {
    backgroundImage: `url(https://image.tmdb.org/t/p/w1280${background})`,
  };

  return (
    <div className={styles.wrapper} style={style}>
      <div className={styles.infoContainer}>
        <Header />
        <main className={styles.main}>
          <MovieInfoContainer />
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

MovieDetailsPage.propTypes = {
  background: PropTypes.string,
};

MovieDetailsPage.defaultProps = {
  background: '',
};
