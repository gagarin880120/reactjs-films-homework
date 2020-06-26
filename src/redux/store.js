import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const initialState = {
  results: [],
  genres: null,
  isModalOpen: false,
  trailerURL: '',
  movieDetails: null,
  currentGenre: 0,
  filteredResults: null,
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
    case 'MOVIE_DETAILS':
      return { ...state, movieDetails: action.detailsObj };
    case 'CURRENT_GENRE':
      return { ...state, currentGenre: action.genreId };
    case 'FILTERED_RESULTS':
      return { ...state, filteredResults: action.filteredResults };
    default:
      return state;
  }
}

export const store = createStore(reducer, applyMiddleware(thunk));
