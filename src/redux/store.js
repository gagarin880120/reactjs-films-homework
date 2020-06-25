import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const initialState = {
  searchResults: [],
  genres: null,
  isModalOpen: false,
  trailerURL: '',
  movieDetails: null
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case 'SEARCH':
      return { ...state, searchResults: action.results };
    case 'GENRES':
      return { ...state, genres: action.genres };
    case 'MODAL':
      return { ...state, isModalOpen: action.isModalOpen };
    case 'TRAILER':
      return { ...state, trailerURL: action.trailerURL };
    case 'MOVIE_DETAILS':
      return { ...state, movieDetails: action.detailsObj };
    default:
      return state;
  }
}

export const store = createStore(reducer, applyMiddleware(thunk));
