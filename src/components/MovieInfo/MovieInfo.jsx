import React from 'react';
import styles from './MovieInfo.module.scss';

export default function MovieInfo() {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.movieTitle}>
        The Jungle Book
      </h2>
      <div className={styles.genreDurationContainer}>
        <span className={styles.genre}>
          Adventure Drama Family Fantasy
        </span>
        <span className={styles.duration}>
          1h 46m
        </span>
      </div>
      <div className={styles.rating}>
          <span className={styles.ratingStars}>
            ★★★★★
          </span>
          <span className={styles.ratingText}>
            4.8
          </span>
        </div>
    </div>
  )
}
