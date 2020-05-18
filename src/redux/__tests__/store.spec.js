import { reducer } from '../store';
import { searchResultsAction, genresAction } from '../actions';

const state = {
  searchResults: [],
  genres: [],
};

test('reducer should return store with changes according to action type', () => {
  expect(reducer(state, searchResultsAction([1, 2, 3]))).toStrictEqual(
    {
      searchResults: [1, 2, 3],
      genres: [],
    }
  )
});

test('reducer should return store with changes according to action type', () => {
  expect(reducer(state, genresAction(['Drama', 'Adventure']))).toStrictEqual(
    {
      searchResults: [],
      genres: ['Drama', 'Adventure'],
    }
  )
});
