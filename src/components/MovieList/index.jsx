import React, { useEffect, useMemo, createRef, useState } from 'react';
import MovieList from './MovieList';
import InfoButton from '../InfoButton/InfoButton';
import TrailerButtonRect from '../TrailerButtonRect/TrailerButtonRect';
import TrailerButtonRound from '../TrailerButtonRound/TrailerButtonRound';
import styles from './MovieList.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { searchResultsSelector, genresSelector } from '../../redux/selectors';
import { genresAction } from '../../redux/actions';

export default function MovieListContainer() {
  const [trailerSource, setTrailerSource] = useState('');
  const [modalIsOpen, setIsOpen] = useState(false);
  const [isInfoViewed, setIsInfoViewed] = useState(Array.from({length: 20}, () => false));
  const hoverRefs= useMemo(
    () => Array.from({ length: 20 }, () => createRef()),//длину в след. части поменять на 16
    []
  );
  const infoRefs= useMemo(
    () => Array.from({ length: 20 }, () => createRef()),//длину в след. части поменять на 16
    []
  );
  const results = useSelector(searchResultsSelector);
  const genres = useSelector(genresSelector);
  const dispatch = useDispatch();

  function getGenres() {
    return () => {
      const url = new URL('https://api.themoviedb.org/3/genre/movie/list');
      url.searchParams.set('api_key', '306b98213f954f1d07d1d09517898f10');
      url.searchParams.set('language', 'en-US');
      fetch(url)
        .then(res => res.json())
        .then(data => dispatch(genresAction(data.genres)))
        .catch(e => console.log(e))
    }
  }

  useEffect(() => {
    getGenres()();
  }, [])

  function getGenresString(arr) {
    return arr.map(id => genres[genres.findIndex(v => v.id === id)].name).join(', ');
  }

  function onInfoButtonClick() {

  }

  function getTrailer(id, cb) {
    const url = new URL(`https://api.themoviedb.org/3/movie/${id}`);
    url.searchParams.set('api_key', '306b98213f954f1d07d1d09517898f10');
    url.searchParams.set('append_to_response', 'videos');
    fetch(url)
      .then(res => res.json())
      .then(data => cb(data.videos.results[0].key))
      .catch(e => openModal(null))
  }

  function openModal(src) {
    setTrailerSource(src);
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

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
              getTrailer(result.id, openModal);
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
          <p className={styles.movieGenre}>{getGenresString(result.genre_ids)}</p>
          {
            isInfoViewed[i] ?
            <>
              <div className={styles.overview}>{result.overview}</div>
              <TrailerButtonRect onTrailerButtonClick={() =>
            {
              getTrailer(result.id, openModal);
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
        onClick={() => closeModal()}
      >
        {trailerSource ?
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
