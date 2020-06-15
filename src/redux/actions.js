const API_KEY = '306b98213f954f1d07d1d09517898f10';

function searchResultsAction(results) {
  return {
    type: 'SEARCH',
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
    isModalOpen
  }
}

function setTrailerURL(trailerURL) {
  return {
    type: 'TRAILER',
    trailerURL
  }
}

function getTrailer(id) {
  return (dispatch) => {
    dispatch(setTrailerURL('loading'));
    return fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&append_to_response=videos`,
    )
      .then((res) => res.json())
      .then((data) => dispatch(setTrailerURL(data.videos.results[0].key)))
      .catch(() => dispatch(setTrailerURL(null)))
  }
}

function getResults(str) {
  return (dispatch) => fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}`
      + `&language=en-US&query=${str}&page=1&include_adult=false&video=true`,
  )
    .then((res) => res.json())
    .then((data) => dispatch(searchResultsAction(data.results)))
    .catch((e) => console.log(e));
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

export {
  searchResultsAction, genresAction, getResults, getGenres, setModal, getTrailer
};
