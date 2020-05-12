import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const initialState = {
  searchResults: [],
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case "SEARCH":
      return Object.assign({}, state, {searchResults: action.results});
    default:
      return state;
  }
}

export const store = createStore(reducer, applyMiddleware(thunk));
