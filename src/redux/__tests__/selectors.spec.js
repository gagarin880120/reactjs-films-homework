import { searchResultsSelector, genresSelector } from '../selectors';

const state = {
  searchResults: [1, 2, 3],
  genres: ['Adventure', 'Sci-Fi']
};

test('searchResultsSelector should return results selector', () => {
  expect(searchResultsSelector(state)).toStrictEqual(state.searchResults)
});

test('genresSelector should return genres selector', () => {
  expect(genresSelector(state)).toStrictEqual(state.genres)
});
