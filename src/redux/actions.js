import { getUnique } from '../helpers/helpers';

const API_KEY = '306b98213f954f1d07d1d09517898f10';

function setResults(results) {
  return {
    type: 'RESULTS',
    results: getUnique(results),
  };
}

function setGenres(genres) {
  return {
    type: 'GENRES',
    genres,
  };
}

function setModal(isModalOpen) {
  return {
    type: 'MODAL',
    isModalOpen,
  };
}

function setTrailerURL(trailerURL) {
  return {
    type: 'TRAILER',
    trailerURL,
  };
}

function setIsTrailerLoaded(isTrailerLoaded) {
  return {
    type: 'IS_TRAILER_LOADED',
    isTrailerLoaded,
  };
}

function setMovieDetails(detailsObj) {
  return {
    type: 'MOVIE_DETAILS',
    detailsObj,
  };
}

function setCurrentPage(page) {
  return {
    type: 'CURRENT_PAGE',
    page,
  };
}

function setTotalPages(numberOfPages) {
  return {
    type: 'TOTAL_PAGES',
    numberOfPages,
  };
}

function setAreMoviesLoaded(areMoviesLoaded) {
  return {
    type: 'ARE_MOVIES_LOADED',
    areMoviesLoaded,
  };
}

function setViewMode(viewMode) {
  return {
    type: 'VIEW_MODE',
    viewMode,
  };
}

function setIsMovieLoaded(isLoaded) {
  return {
    type: 'IS_MOVIE_LOADED',
    isLoaded,
  };
}

function setCurrentAPIRequest(currentAPIRequest) {
  return {
    type: 'SET_CURRENT_API_REQUEST',
    currentAPIRequest,
  };
}

function getGenres() {
  return (dispatch) => fetch(
    `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`
        + '&language=en-US',
  )
    .then((res) => res.json())
    .then((data) => dispatch(setGenres(data.genres)))
    .catch((e) => console.log(e));
}

function getMovieDetails(id) {
  return (dispatch) => {
    dispatch(setIsMovieLoaded(false));
    return fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`,
    )
      .then((res) => res.json())
      .then((data) => {
        dispatch(setMovieDetails(data));
        dispatch(setIsMovieLoaded(true));
      })
      .catch((e) => console.log(e));
  };
}

function getMoviesByGenre(request, page, results, withDetails) {
  return (dispatch) => {
    if (withDetails) {
      dispatch(setIsMovieLoaded(false));
    }
    dispatch(setResults(results || []));
    dispatch(setAreMoviesLoaded(false));
    dispatch(setCurrentPage(page));
    const genre = request.slice(request.indexOf('=') + 1);
    return fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`
    + '&language=en-US&sort_by=popularity.desc&include_adult=false'
    + `&include_video=false&with_genres=${genre}&page=${page}`)
      .then((res) => res.json())
      .then((data) => {
        dispatch(setResults(page > 1 ? [...results, ...data.results] : data.results));
        if (withDetails) {
          dispatch(getMovieDetails(page > 1 ? results[0].id : data.results[0].id));
        }
        dispatch(setTotalPages(data.total_pages));
        dispatch(setAreMoviesLoaded(true));
      })
      .catch((e) => console.log(e));
  };
}

function getMoviesBySearch(request, page, results, withDetails) {
  return (dispatch) => {
    if (withDetails) {
      dispatch(setIsMovieLoaded(false));
    }
    dispatch(setResults(results || []));
    dispatch(setAreMoviesLoaded(false));
    dispatch(setCurrentPage(page));
    const query = request.slice(request.indexOf('=') + 1);
    return fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}`
    + `&language=en-US&include_adult=false&video=true&query=${query}&page=${page}`)
      .then((res) => res.json())
      .then((data) => {
        dispatch(setResults(page > 1 ? [...results, ...data.results] : data.results));
        if (withDetails) {
          dispatch(getMovieDetails(page > 1 ? results[0].id : data.results[0].id));
        }
        dispatch(setTotalPages(data.total_pages));
        dispatch(setAreMoviesLoaded(true));
      })
      .catch((e) => console.log(e));
  };
}

function getMovies(request, page, results, withDetails) {
  return (dispatch) => {
    if (withDetails) {
      dispatch(setIsMovieLoaded(false));
    }
    dispatch(setResults(results || []));
    dispatch(setAreMoviesLoaded(false));
    dispatch(setCurrentPage(page));
    return fetch(`https://api.themoviedb.org/3/movie/${request}?api_key=${API_KEY}&language=en-US&page=${page}`)
      .then((res) => res.json())
      .then((data) => {
        dispatch(setResults(page > 1 ? [...results, ...data.results] : data.results));
        if (withDetails) {
          dispatch(getMovieDetails(page > 1 ? results[0].id : data.results[0].id));
        }
        dispatch(setTotalPages(data.total_pages));
        dispatch(setAreMoviesLoaded(true));
      })
      .catch((e) => console.log(e));
  };
}

function getTrailer(id) {
  return (dispatch) => {
    dispatch(setIsTrailerLoaded(false));
    return fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&append_to_response=videos`,
    )
      .then((res) => res.json())
      .then((data) => {
        dispatch(setIsTrailerLoaded(true));
        dispatch(setTrailerURL(data.videos.results[0].key));
      })
      .catch(() => {
        dispatch(setIsTrailerLoaded(true));
        dispatch(setTrailerURL(null));
      });
  };
}

export {
  setResults, setGenres, setModal, setTrailerURL, setIsTrailerLoaded,
  setMovieDetails, setCurrentPage, setTotalPages, setAreMoviesLoaded,
  getMovies, getGenres, getTrailer, getMovieDetails, setViewMode, setIsMovieLoaded,
  setCurrentAPIRequest, getMoviesByGenre, getMoviesBySearch,
};
