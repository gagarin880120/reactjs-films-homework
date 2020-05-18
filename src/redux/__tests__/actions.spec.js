import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { searchResultsAction, genresAction, getResults, getGenres } from '../actions';
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

test('searchResultsAction should return object with type SEARCH and results', () => {
  expect(searchResultsAction([1, 2, 3])).toStrictEqual(
    {
      type: 'SEARCH',
      results: [1, 2, 3]
  }
  );
});

test('genresAction should return object with type GENRES and genres array', () => {
  expect(genresAction(['Drama', 'Adventure'])).toStrictEqual(
    {
      type: 'GENRES',
      genres: ['Drama', 'Adventure']
  }
  );
});

describe('testing async actions', () => {
  beforeEach(() => {
    fetch.resetMocks()
  })
  it('getResults should dispatch search results', () => {
    const store = mockStore({});
    fetch.mockResponseOnce(JSON.stringify({ data: '12345' }))
    return store.dispatch(getResults())
      .then(res => {
        const actions = store.getActions()
        expect(actions[0]).toEqual(searchResultsAction(res.data))
      });
  });

  it('getGenres should dispatch genres', () => {
    const store = mockStore({});
    fetch.mockResponseOnce(JSON.stringify({ data: 'Adventure' }))
    return store.dispatch(getGenres())
      .then(res => {
        const actions = store.getActions()
        expect(actions[0]).toEqual(genresAction(res.data))
      });
  });
  it('getResults should catch error', () => {
    const store = mockStore({});
    fetch.mockReject(new Error('fake error message'))
    return store.dispatch(getResults())
      .then(res => {
        const actions = store.getActions()
        expect(actions[0]).toEqual(undefined)
      });
  });
  it('getGenres should catch error', () => {
    const store = mockStore({});
    fetch.mockReject(new Error('fake error message'))
    return store.dispatch(getGenres())
      .then(res => {
        const actions = store.getActions()
        expect(actions[0]).toEqual(undefined)
      });
  });

});
