import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const initialState = {
  searchResults: [],
  genres: [],
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case "SEARCH":
      return Object.assign({}, state, {searchResults: action.results});
    case "GENRES":
      return Object.assign({}, state, {genres: action.genres});
    default:
      return state;
  }
}

export const store = createStore(reducer, applyMiddleware(thunk));
