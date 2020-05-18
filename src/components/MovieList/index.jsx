import React, { useEffect, useMemo, createRef, useState } from 'react';
import MovieList from './MovieList';
import InfoButton from '../InfoButton/InfoButton';
import TrailerButtonRect from '../TrailerButtonRect/TrailerButtonRect';
import TrailerButtonRound from '../TrailerButtonRound/TrailerButtonRound';
import styles from './MovieList.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { searchResultsSelector, genresSelector } from '../../redux/selectors';
import { getGenres } from '../../redux/actions';
import { getGenresString, getTrailer } from '../../helpers/helpers';

export default function MovieListContainer() {
  const [trailerSource, setTrailerSource] = useState('');
  const [isTrailerLoading, setIsTrailerLoading] = useState(false);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [isInfoViewed, setIsInfoViewed] = useState(Array.from({length: 20}, () => false));
  const hoverRefs= useMemo(
    () => Array.from({ length: 20 }, () => createRef()),
    []
  );
  const infoRefs= useMemo(
    () => Array.from({ length: 20 }, () => createRef()),
    []
  );
  const results = useSelector(searchResultsSelector);
  const genres = useSelector(genresSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGenres());
  }, [])

  const arrayOfResults = results.map((result, i) => {
    return (
      <div className={styles.movieCard}
        key={i}
        onMouseOver={(e) => {
          hoverRefs[i].current.style.display = isInfoViewed[i] ? 'none' : 'flex';
        }}
        onMouseLeave={(e) => {
          hoverRefs[i].current.style.display = 'none';
        }}
        style={{
          backgroundImage: result.poster_path ?
          `url(https://image.tmdb.org/t/p/w300/${result.poster_path})`:
          'url(https://spnbag.com/assets/general/images/no_poster.jpg)'
        }}
      >

        <div
          ref={hoverRefs[i]}
          className={styles.hoverTrailer}
        >
          <TrailerButtonRound onTrailerButtonClick={() =>
            {
              setIsTrailerLoading(true);
              getTrailer(result.id).then(data => {
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
            hoverRefs[i].current.style.display = 'none';
            setIsInfoViewed(prevState => prevState.map((v, idx) => idx === i ? true : v));
            infoRefs[i].current.className = styles.infoIsViewed;
          }} />
        </div>

        <div className={styles.movieInfo} ref={infoRefs[i]}>
          {
            isInfoViewed[i] ? <div className={styles.closeInfo} onClick={() => {
              setIsInfoViewed(prevState => prevState.map((v, idx) => idx === i ? false : v));
              infoRefs[i].current.className = styles.movieInfo;
            }}><span>X</span></div> : null
          }
          <span className={styles.movieTitle}>
            {
            result.title.length < 18 ?
              result.title :
              result.title.slice(0, 18) + '...'
            }
          </span>
          <span className={styles.movieRating}>{result.vote_average}</span>
          <p className={styles.movieGenre}>{getGenresString(result.genre_ids, genres)}</p>
          {
            isInfoViewed[i] ?
            <>
              <div className={styles.overview}>{result.overview}</div>
              <TrailerButtonRect onTrailerButtonClick={() =>
            {
              getTrailer(result.id, setTrailerSource, setIsTrailerLoading);
              setIsOpen(true);
            }}/>
            </> : null
          }
        </div>
      </div>
    )
  })

  return (
    <div>
      <MovieList
      arrayOfResults={arrayOfResults}
      />
      <div
        className={styles.modal}
        style={{display: modalIsOpen ? 'flex' : 'none'}}
        onClick={() => setIsOpen(false)}
      >
        {isTrailerLoading ? null : trailerSource ?
          <iframe
          width="800"
          height="450"
          src={`https://www.youtube.com/embed/${trailerSource}`}
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen>
          </iframe> :
          <span className={styles.noTrailer}>
            Trailer is not available
          </span>
        }

      </div>
    </div>
  )
}
