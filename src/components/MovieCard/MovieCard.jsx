import React, { useState, useRef } from 'react';
import styles from './MovieCard.module.scss';
import InfoButton from '../InfoButton/InfoButton';
import TrailerButtonRect from '../TrailerButtonRect/TrailerButtonRect';
import TrailerButtonRound from '../TrailerButtonRound/TrailerButtonRound';
import TrailerModal from '../TrailerModal/TrailerModal';
import { getGenresString, getTrailer } from '../../helpers/helpers';

export default function MovieCard(props) {
  const [isInfoViewed, setIsInfoViewed] = useState(false);
  const [trailerSource, setTrailerSource] = useState('');
  const [isTrailerLoading, setIsTrailerLoading] = useState(false);
  const [modalIsOpen, setIsOpen] = useState(false);
  const hoverRef = useRef();
  const infoRef = useRef();

  function onMouseOverHandler(e) {
    hoverRef.current.style.display = isInfoViewed ? 'none' : 'flex';
  }

  function onMouseLeaveHandler(e) {
    hoverRef.current.style.display = 'none';
  }

  return (
    <>
      <div
        className={styles.wrapper}
        data-testid="wrapper"
        onMouseOver={onMouseOverHandler}
        onMouseLeave={onMouseLeaveHandler}
        style={{
          backgroundImage: props.poster_path ?
          `url(https://image.tmdb.org/t/p/w300/${props.poster_path})`:
          'url(https://spnbag.com/assets/general/images/no_poster.jpg)'
        }}
      >
        <div
          ref={hoverRef}
          className={styles.hoverTrailer}
        >
          <TrailerButtonRound
            onTrailerButtonClick={() =>
            {
              setIsTrailerLoading(true);
              getTrailer(props.id).then(data => {
                setTrailerSource(data.videos.results[0].key)
              })
              .catch(() => setTrailerSource(null))
              .finally(() => {
                setIsTrailerLoading(false);
              });
              setIsOpen(true);
            }} />
          <span className={styles.hoverTrailerText}>Watch Now</span>
          <InfoButton onInfoButtonClick={() => {
            hoverRef.current.style.display = 'none';
            setIsInfoViewed(true);
            infoRef.current.className = styles.infoIsViewed;
          }} />
        </div>
        <div className={styles.movieInfo} ref={infoRef}>
          {
            isInfoViewed ? <div className={styles.closeInfo} onClick={() => {
              setIsInfoViewed(false);
              infoRef.current.className = styles.movieInfo;
            }}><span>X</span></div> : null
          }
          <span className={styles.movieTitle}>
            {
            props.title.length < 18 ?
              props.title :
              props.title.slice(0, 18) + '...'
            }
          </span>
          <span className={styles.movieRating}>{props.vote_average}</span>
          <p className={styles.movieGenre}>{getGenresString(props.genre_ids, props.genres)}</p>
          {
            isInfoViewed ?
            <>
              <div className={styles.overview}>{props.overview}</div>
              <TrailerButtonRect onTrailerButtonClick={() =>
            {
              setIsTrailerLoading(true);
              getTrailer(props.id).then(data => {
                setTrailerSource(data.videos.results[0].key)
              })
              .catch(() => setTrailerSource(null))
              .finally(() => {
                setIsTrailerLoading(false);
              });
              setIsOpen(true);
            }}/>
            </> : null
          }
        </div>
      </div>
      <TrailerModal
        setIsOpen={setIsOpen}
        modalIsOpen={modalIsOpen}
        isTrailerLoading={isTrailerLoading}
        trailerSource={trailerSource}
      />
    </>
  )
}
