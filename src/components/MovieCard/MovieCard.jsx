import React, { useState, useRef } from 'react';
import styles from './MovieCard.module.scss';
import InfoButton from '../InfoButton/InfoButton';
import TrailerButtonRect from '../TrailerButtonRect/TrailerButtonRect';
import TrailerButtonRound from '../TrailerButtonRound/TrailerButtonRound';
import TrailerModal from '../TrailerModal/TrailerModal';
import { getTrailer } from '../../helpers/helpers';

export default function MovieCard(props) {
  const [isInfoViewed, setIsInfoViewed] = useState(false);
  const [trailerSource, setTrailerSource] = useState('');
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const hoverEl = useRef();
  const infoEl = useRef();

  async function onTrailerButtonClick() {
    setTrailerSource('loading');
    setModalIsOpen(true);

    try {
      const data = await getTrailer(props.movie.id);
      setTrailerSource(data.videos.results[0].key)
    } catch (error) {
      setTrailerSource(null)
    }
  }

  return (
    <>
      <div
        className={styles.wrapper}
        data-testid="wrapper"
        style={{
          backgroundImage: props.movie.poster_path ?
          `url(https://image.tmdb.org/t/p/w300/${props.movie.poster_path})`:
          'url(https://spnbag.com/assets/general/images/no_poster.jpg)'
        }}
      >
        <div
          ref={hoverEl}
          data-testid="hoverTrailer"
          className={styles.hoverTrailer}
        >
          <TrailerButtonRound
            testid="trailerButtonRound"
            onTrailerButtonClick={onTrailerButtonClick} />
          <span className={styles.hoverTrailerText}>Watch Now</span>
          <InfoButton
            testid="infoButton"
            onInfoButtonClick={() => {
              hoverEl.current.className = styles.hoverElDisplayNone;
              setIsInfoViewed(true);
              infoEl.current.className = styles.infoIsViewed;
            }}
          />
        </div>
        <div
          className={styles.movieInfo}
          data-testid="info"
          ref={infoEl}
        >
          {
            isInfoViewed ? <div data-testid="closeInfo" className={styles.closeInfo} onClick={() => {
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
              <TrailerButtonRect onTrailerButtonClick={onTrailerButtonClick}/>
            </> : null
          }
        </div>
      </div>
      <TrailerModal
        setModalIsOpen={setModalIsOpen}
        modalIsOpen={modalIsOpen}
        trailerSource={trailerSource}
      />
    </>
  )
}
