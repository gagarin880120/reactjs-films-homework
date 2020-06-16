import React, { useState, useRef } from 'react';
import styles from './MovieCard.module.scss';
import InfoButton from '../InfoButton/InfoButton';
import TrailerButtonRect from '../TrailerButtonRect/TrailerButtonRect';
import TrailerButtonRound from '../TrailerButtonRound/TrailerButtonRound';

export default function MovieCard(props) {
  const [isInfoViewed, setIsInfoViewed] = useState(false);
  const hoverEl = useRef();
  const infoEl = useRef();

  return (
    <>
      <div
        className={styles.wrapper}
        style={{
          backgroundImage: props.movie.poster_path ?
          `url(https://image.tmdb.org/t/p/w300/${props.movie.poster_path})`:
          'url(https://spnbag.com/assets/general/images/no_poster.jpg)'
        }}
      >
        <div
          ref={hoverEl}
          testid="hoverTrailer"
          className={styles.hoverTrailer}
        >
          <TrailerButtonRound
            onTrailerButtonClick={props.onTrailerButtonClick}
            id={props.movie.id}
          />
          <span className={styles.hoverTrailerText}>Watch Now</span>
          <InfoButton

            onInfoButtonClick={() => {
              hoverEl.current.className = styles.hoverElDisplayNone;
              setIsInfoViewed(true);
              infoEl.current.className = styles.infoIsViewed;
            }}
          />
        </div>
        <div
          className={styles.movieInfo}
          testid="info"
          ref={infoEl}
        >
          {
            isInfoViewed ? <div testid="closeInfo" className={styles.closeInfo} onClick={() => {
              setIsInfoViewed(false);
              infoEl.current.className = styles.movieInfo;
              hoverEl.current.className = styles.hoverTrailer;
            }}><span>X</span></div> : null
          }
          <p className={styles.movieTitle}>
            {props.movie.title}
          </p>
          <span className={styles.movieRating}>{props.movie.vote_average}</span>
          <p className={styles.movieGenre}>{props.movie.genres}</p>
          {
            isInfoViewed ?
            <>
              <div className={styles.overview}>{props.movie.overview}</div>
              <TrailerButtonRect
                onTrailerButtonClick={props.onTrailerButtonClick}
                id={props.movie.id}
              />
            </> : null
          }
        </div>
      </div>
    </>
  )
}
