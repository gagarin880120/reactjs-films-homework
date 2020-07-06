const API_KEY = '306b98213f954f1d07d1d09517898f10';

function setResults(results) {
  localStorage.setItem('results', JSON.stringify(results));
  return {
    type: 'RESULTS',
    results,
  };
}

function setQuery(query) {
  return {
    type: 'QUERY',
    query,
  };
}

function setGenres(genres) {
  localStorage.setItem('genres', JSON.stringify(genres));
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
  localStorage.setItem('movieDetails', JSON.stringify(detailsObj));
  return {
    type: 'MOVIE_DETAILS',
    detailsObj,
  };
}

function setCurrentPage(page) {
  localStorage.setItem('currentPage', page);
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
  localStorage.setItem('areMoviesLoaded', areMoviesLoaded);
  return {
    type: 'ARE_MOVIES_LOADED',
    areMoviesLoaded,
  };
}

function setCurrentURL(currentURL) {
  localStorage.setItem('currentURL', currentURL);
  return {
    type: 'CURRENT_URL',
    currentURL,
  };
}

function setCurrentGenre(currentGenre) {
  localStorage.setItem('currentGenre', currentGenre);
  return {
    type: 'CURRENT_GENRE',
    currentGenre,
  };
}

function setViewMode(viewMode) {
  localStorage.setItem('viewMode', viewMode);
  return {
    type: 'VIEW_MODE',
    viewMode,
  };
}

function setIsMovieLoaded(isLoaded) {
  localStorage.setItem('isMovieLoaded', isLoaded);
  return {
    type: 'IS_MOVIE_LOADED',
    isLoaded,
  };
}

function getMovies(currUrl, page, query, genre, results) {
  let url = currUrl;
  if (url.includes('search') && page === 1) {
    url += query;
  } else if (url.includes('discover') && page === 1) {
    url += genre;
  }
  return (dispatch) => {
    dispatch(setResults(results || []));
    dispatch(setAreMoviesLoaded(false));
    dispatch(setCurrentURL(url));
    dispatch(setQuery(query));
    dispatch(setCurrentPage(page));
    return fetch(`${url}&page=${page}`)
      .then((res) => res.json())
      .then((data) => {
        dispatch(setResults(page > 1 ? [...results, ...data.results] : data.results));
        dispatch(setTotalPages(data.total_pages));
        dispatch(setAreMoviesLoaded(true));
      })
      .catch((e) => console.log(e));
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
  }
}

export {
  setResults, setQuery, setGenres, setModal, setTrailerURL, setIsTrailerLoaded,
  setMovieDetails, setCurrentPage, setTotalPages, setAreMoviesLoaded, setCurrentURL,
  setCurrentGenre, getMovies, getGenres, getTrailer, getMovieDetails, setViewMode,
};
