const API_KEY = '306b98213f954f1d07d1d09517898f10';

function setResults(results) {
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

function genresAction(genres) {
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

function setIsLoaded(isLoaded) {
  return {
    type: 'IS_LOADED',
    isLoaded,
  };
}

function setCurrentURL(currentURL) {
  return {
    type: 'CURRENT_URL',
    currentURL,
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
    dispatch(setIsLoaded(false));
    dispatch(setCurrentURL(url));
    dispatch(setQuery(query));
    dispatch(setCurrentPage(page));
    return fetch(`${url}&page=${page}`)
      .then((res) => res.json())
      .then((data) => {
        dispatch(setResults(page > 1 ? [...results, ...data.results] : data.results));
        dispatch(setTotalPages(data.total_pages));
        dispatch(setIsLoaded(true));
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
    .then((data) => dispatch(genresAction(data.genres)))
    .catch((e) => console.log(e));
}

function getTrailer(id) {
  return (dispatch) => {
    dispatch(setTrailerURL('loading'));
    return fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&append_to_response=videos`,
    )
      .then((res) => res.json())
      .then((data) => dispatch(setTrailerURL(data.videos.results[0].key)))
      .catch(() => dispatch(setTrailerURL(null)));
  };
}

function getMovieDetails(id) {
  return (dispatch) => fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`,
  )
    .then((res) => res.json())
    .then((data) => dispatch(setMovieDetails(data)))
    .catch((e) => console.log(e));
}

export {
  genresAction, getGenres, setModal, getTrailer,
  setTrailerURL, getMovieDetails, getMovies, setCurrentURL,
};
