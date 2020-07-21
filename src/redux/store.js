import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const initialState = {
  results: [],
  genres: null,
  isModalOpen: false,
  trailerURL: '',
  isTrailerLoaded: false,
  movieDetails: null,
  currentPage: 1,
  totalPages: 0,
  areMoviesLoaded: false,
  viewMode: 'gallery',
  isMovieLoaded: false,
  currentAPIRequest: 'popular',
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case 'RESULTS':
      return { ...state, results: action.results };
    case 'GENRES':
      return { ...state, genres: action.genres };
    case 'MODAL':
      return { ...state, isModalOpen: action.isModalOpen };
    case 'TRAILER':
      return { ...state, trailerURL: action.trailerURL };
    case 'IS_TRAILER_LOADED':
      return { ...state, isTrailerLoaded: action.isTrailerLoaded };
    case 'MOVIE_DETAILS':
      return { ...state, movieDetails: action.detailsObj };
    case 'CURRENT_PAGE':
      return { ...state, currentPage: action.page };
    case 'TOTAL_PAGES':
      return { ...state, totalPages: action.numberOfPages };
    case 'ARE_MOVIES_LOADED':
      return { ...state, areMoviesLoaded: action.areMoviesLoaded };
    case 'VIEW_MODE':
      return { ...state, viewMode: action.viewMode };
    case 'IS_MOVIE_LOADED':
      return { ...state, isMovieLoaded: action.isLoaded };
    case 'SET_CURRENT_API_REQUEST':
      return { ...state, currentAPIRequest: action.currentAPIRequest };
    default:
      return state;
  }
}

export const store = createStore(reducer, applyMiddleware(thunk));
