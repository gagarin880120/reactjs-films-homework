import { reducer } from '../store';
import { searchResultsAction, genresAction, setModal, setTrailerURL } from '../actions';

const state = {
  searchResults: [],
  genres: [],
  isModalOpen: false,
  trailerURL: ''
};

describe('Reducer should return store with changes according to action type', () => {
  test('searchResultsAction', () => {
    expect(reducer(state, searchResultsAction([1, 2, 3]))).toStrictEqual(
      {
        searchResults: [1, 2, 3],
        genres: [],
        isModalOpen: false,
        trailerURL: ''
      }
    )
  });

  test('genresAction', () => {
    expect(reducer(state, genresAction(['Drama', 'Adventure']))).toStrictEqual(
      {
        searchResults: [],
        genres: ['Drama', 'Adventure'],
        isModalOpen: false,
        trailerURL: ''
      }
    )
  });

  test('setModal', () => {
    expect(reducer(state, setModal(true))).toStrictEqual(
      {
        searchResults: [],
        genres: [],
        isModalOpen: true,
        trailerURL: ''
      }
    )
  });

  test('setModal', () => {
    expect(reducer(state, setTrailerURL('some url'))).toStrictEqual(
      {
        searchResults: [],
        genres: [],
        isModalOpen: false,
        trailerURL: 'some url'
      }
    )
  });
});
