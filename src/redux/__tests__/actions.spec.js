import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { getMovies, getGenres, getTrailer, getMovieDetails } from '../actions';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Async action', () => {
  beforeEach(() => {
    fetch.resetMocks()
  });

  describe('getMovies', () => {
    test('should dispatch results, areMoviesLoaded, url, query (if it is), page, and total pages on successful fetch request', () => {
      fetch.mockResponse(JSON.stringify({ results: [{title: 'Matrix'}], total_pages: 5 }));

      const expectedActions = [
        { type: 'RESULTS', results: [] },
        { type: 'ARE_MOVIES_LOADED', areMoviesLoaded: false },
        { type: 'CURRENT_URL', currentURL: 'url/search/matrix' },
        { type: 'QUERY', query: 'matrix' },
        { type: 'CURRENT_PAGE', page: 1 },
        { type: 'RESULTS', results: [{title: 'Matrix'}] },
        { type: 'TOTAL_PAGES', numberOfPages: 5 },
        { type: 'ARE_MOVIES_LOADED', areMoviesLoaded: true },
      ];

      const store = mockStore({});

      return store.dispatch(getMovies('url/search/', 1, 'matrix'))
        .then(() => {
          expect(store.getActions()).toEqual(expectedActions);
        })
    });

    test('should dispatch results, areMoviesLoaded, url (+ genre if url includes "discover"), page, and total pages on successful fetch request', () => {
      fetch.mockResponse(JSON.stringify({ results: [{title: 'Matrix'}], total_pages: 5 }));

      const expectedActions = [
        { type: 'RESULTS', results: [] },
        { type: 'ARE_MOVIES_LOADED', areMoviesLoaded: false },
        { type: 'CURRENT_URL', currentURL: 'url/discover/comedy' },
        { type: 'QUERY', query: '' },
        { type: 'CURRENT_PAGE', page: 1 },
        { type: 'RESULTS', results: [{title: 'Matrix'}] },
        { type: 'TOTAL_PAGES', numberOfPages: 5 },
        { type: 'ARE_MOVIES_LOADED', areMoviesLoaded: true },
      ];

      const store = mockStore({});

      return store.dispatch(getMovies('url/discover/', 1, '', 'comedy'))
        .then(() => {
          expect(store.getActions()).toEqual(expectedActions);
        })
    });

    test('should dispatch results (+ current results if are), areMoviesLoaded, url, page, and total pages on successful fetch request', () => {
      fetch.mockResponse(JSON.stringify({ results: [{title: 'Matrix'}], total_pages: 5 }));

      const expectedActions = [
        { type: 'RESULTS', results: [{title: 'Star Wars'}] },
        { type: 'ARE_MOVIES_LOADED', areMoviesLoaded: false },
        { type: 'CURRENT_URL', currentURL: 'url' },
        { type: 'QUERY', query: '' },
        { type: 'CURRENT_PAGE', page: 2 },
        { type: 'RESULTS', results: [{title: 'Star Wars'}, {title: 'Matrix'}] },
        { type: 'TOTAL_PAGES', numberOfPages: 5 },
        { type: 'ARE_MOVIES_LOADED', areMoviesLoaded: true },
      ];

      const store = mockStore({});

      return store.dispatch(getMovies('url', 2, '', '', [{title: 'Star Wars'}]))
        .then(() => {
          expect(store.getActions()).toEqual(expectedActions);
        })
    });

    test('should catch error if is rejected', () => {
      fetch.mockReject(new Error('fake error message'));

      const expectedActions = [
        { type: 'RESULTS', results: [] },
        { type: 'ARE_MOVIES_LOADED', areMoviesLoaded: false },
        { type: 'CURRENT_URL', currentURL: 'url' },
        { type: 'QUERY', query: undefined },
        { type: 'CURRENT_PAGE', page: 1 },
      ];

      const store = mockStore({});

      return store.dispatch(getMovies('url', 1))
        .then(() => {
          expect(store.getActions()).toEqual(expectedActions);
        })
    });
  });

  describe('getTrailer', () => {
    test('should dispatch trailerURL on successful fetch request', () => {
      fetch.mockResponse(JSON.stringify({ videos: {results: [{key: '123'}]} }));

      const expectedActions = [
        { type: 'IS_TRAILER_LOADED', isTrailerLoaded: false },
        { type: 'IS_TRAILER_LOADED', isTrailerLoaded: true },
        { type: 'TRAILER', trailerURL: '123' },
      ];

      const store = mockStore({});

      return store.dispatch(getTrailer())
        .then(() => {
          expect(store.getActions()).toEqual(expectedActions);
        });
    });

    test('should catch error if is rejected', () => {
      fetch.mockReject(new Error('fake error message'));

      const expectedActions = [
        { type: 'IS_TRAILER_LOADED', isTrailerLoaded: false },
        { type: 'IS_TRAILER_LOADED', isTrailerLoaded: true },
        { type: 'TRAILER', trailerURL: null },
      ];

      const store = mockStore({});

      return store.dispatch(getTrailer())
        .then(() => {
          expect(store.getActions()).toEqual(expectedActions)
        });
    });
  });

  describe('getGenres', () => {
    test('should dispatch genres on successful fetch request', () => {
      fetch.mockResponse(JSON.stringify({ genres: ['Adventure'] }));

      const expectedActions = [
        { type: 'GENRES', genres: ['Adventure'] }
      ];

      const store = mockStore({})

      return store.dispatch(getGenres())
        .then(() => {
          expect(store.getActions()).toEqual(expectedActions);
        });
    });

    test('should catch error if is rejected', () => {
      fetch.mockReject(new Error('fake error message'));

      const store = mockStore({});

      return store.dispatch(getGenres())
        .then(() => {
          expect(store.getActions().length).toEqual(0)
        });
    });
  });

  describe('getMovieDetails', () => {
    test('should dispatch movie details on successful fetch request', () => {
      fetch.mockResponse(JSON.stringify({ title: 'Matrix', genre: 'Action' }));

      const expectedActions = [
        { type: 'IS_MOVIE_LOADED', isLoaded: false },
        { type: 'MOVIE_DETAILS', detailsObj: {title: 'Matrix', genre: 'Action'} },
        { type: 'IS_MOVIE_LOADED', isLoaded: true },
      ];

      const store = mockStore({})

      return store.dispatch(getMovieDetails())
        .then(() => {
          expect(store.getActions()).toEqual(expectedActions);
        });
    });

    test('should catch error if is rejected', () => {
      fetch.mockReject(new Error('fake error message'));

      const expectedActions = [
        { type: 'IS_MOVIE_LOADED', isLoaded: false }
      ];

      const store = mockStore({});

      return store.dispatch(getMovieDetails())
        .then(() => {
          expect(store.getActions()).toEqual(expectedActions)
        });
    });
  });
});
