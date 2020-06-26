const API_KEY = '306b98213f954f1d07d1d09517898f10';

function setResults(results) {
  return {
    type: 'RESULTS',
    results,
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

function setCurrentGenre(genreId) {
  return {
    type: 'CURRENT_GENRE',
    genreId,
  };
}

function setFilteredResults(filteredResults) {
  return {
    type: 'FILTERED_RESULTS',
    filteredResults,
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

function getSearchResults(str, genre) {
  return (dispatch) => fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}`
      + `&language=en-US&query=${str}&page=1&include_adult=false&video=true`,
  )
    .then((res) => res.json())
    .then((data) => {
      if (!genre) {
        return dispatch(setResults(data.results));
      }
      return dispatch(setFilteredResults(data.results.filter((v) => v.genre_ids.includes(genre))));
    })
    .catch((e) => console.log(e));
}

function getTrendingMovies(genre) {
  return (dispatch) => fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`,
  )
    .then((res) => res.json())
    .then((data) => {
      dispatch(setResults(data.results));
      if (genre) {
        return dispatch(
          setFilteredResults(data.results.filter((v) => v.genre_ids.includes(genre)))
        );
      }
    })
    .catch((e) => console.log(e));
}

function getTopRatedMovies(genre) {
  return (dispatch) => fetch(
    `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
  )
    .then((res) => res.json())
    .then((data) => {
      dispatch(setResults(data.results));
      if (genre) {
        return dispatch(
          setFilteredResults(data.results.filter((v) => v.genre_ids.includes(genre)))
        );
      }
    })
    .catch((e) => console.log(e));
}

function getUpcomingMovies(genre) {
  return (dispatch) => fetch(
    `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`,
  )
    .then((res) => res.json())
    .then((data) => {
      dispatch(setResults(data.results));
      if (genre) {
        return dispatch(
          setFilteredResults(data.results.filter((v) => v.genre_ids.includes(genre)))
        );
      }
    })
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

function filterResultsByGenre(results, genre) {
  return (dispatch) => {
    if (!genre) {
      return dispatch(setFilteredResults(null));
    }
    return dispatch(setFilteredResults(results.filter((v) => v.genre_ids.includes(genre))));
  };
}

export {
  genresAction, getSearchResults, getGenres, setModal, getTrailer,
  setTrailerURL, getTrendingMovies, getTopRatedMovies, getUpcomingMovies,
  getMovieDetails, setCurrentGenre, filterResultsByGenre,
};
