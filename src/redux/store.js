import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const initialState = {
  results: JSON.parse(localStorage.getItem('results')) || [],
  query: '',
  genres: null || JSON.parse(localStorage.getItem('genres')),
  isModalOpen: false,
  trailerURL: '',
  movieDetails: null || JSON.parse(localStorage.getItem('movieDetails')),
  currentPage: +localStorage.getItem('currentPage') || 1,
  totalPages: 0,
  isLoaded: JSON.parse(localStorage.getItem('isLoaded')) && false,
  currentURL: '' || localStorage.getItem('currentURL'),
  currentGenre: localStorage.getItem('currentGenre') || '',
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
    case 'CURRENT_GENRE':
      return { ...state, currentGenre: action.currentGenre };
    default:
      return state;
  }
}

export const store = createStore(reducer, applyMiddleware(thunk));
