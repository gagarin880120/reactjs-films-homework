import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const initialState = {
  results: [],
  query: '',
  genres: null,
  isModalOpen: false,
  trailerURL: '',
  movieDetails: null,
  currentPage: 1,
  totalPages: 0,
  isLoaded: false,
  currentURL: '',
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case 'RESULTS':
      return { ...state, results: action.results };
    case 'QUERY':
      return { ...state, query: action.query };
    case 'GENRES':
      return { ...state, genres: action.genres };
    case 'MODAL':
      return { ...state, isModalOpen: action.isModalOpen };
    case 'TRAILER':
      return { ...state, trailerURL: action.trailerURL };
    case 'MOVIE_DETAILS':
      return { ...state, movieDetails: action.detailsObj };
    case 'CURRENT_PAGE':
      return { ...state, currentPage: action.page };
    case 'TOTAL_PAGES':
      return { ...state, totalPages: action.numberOfPages };
    case 'IS_LOADED':
      return { ...state, isLoaded: action.isLoaded };
    case 'CURRENT_URL':
      return { ...state, currentURL: action.currentURL };
    default:
      return state;
  }
}

export const store = createStore(reducer, applyMiddleware(thunk));
