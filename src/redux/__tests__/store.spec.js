import { reducer } from '../store';
import { setResults, setQuery, setGenres, setModal, setTrailerURL, setIsTrailerLoaded,
  setMovieDetails, setCurrentPage, setTotalPages, setAreMoviesLoaded, setCurrentURL, setCurrentGenre, } from '../actions';

const state = {
  results: [],
  query: '',
  genres: null,
  isModalOpen: false,
  trailerURL: '',
  isTrailerLoaded: false,
  movieDetails: null,
  currentPage: 1,
  totalPages: 0,
  areMoviesLoaded: false,
  currentURL: '',
  currentGenre: '',
};

describe('Reducer should return store with changes according to action type', () => {
  test('RESULTS', () => {
    expect(reducer(state, setResults([1, 2, 3]))).toStrictEqual(
      {
        results: [1, 2, 3],
        query: '',
        genres: null,
        isModalOpen: false,
        trailerURL: '',
        isTrailerLoaded: false,
        movieDetails: null,
        currentPage: 1,
        totalPages: 0,
        areMoviesLoaded: false,
        currentURL: '',
        currentGenre: '',
      }
    )
  });

  test('QUERY', () => {
    expect(reducer(state, setQuery('request'))).toStrictEqual(
      {
        results: [],
        query: 'request',
        genres: null,
        isModalOpen: false,
        trailerURL: '',
        isTrailerLoaded: false,
        movieDetails: null,
        currentPage: 1,
        totalPages: 0,
        areMoviesLoaded: false,
        currentURL: '',
        currentGenre: '',
      }
    )
  });

    test('GENRES', () => {
    expect(reducer(state, setGenres([1, 2, 3]))).toStrictEqual(
      {
        results: [],
        query: '',
        genres: [1, 2, 3],
        isModalOpen: false,
        trailerURL: '',
        isTrailerLoaded: false,
        movieDetails: null,
        currentPage: 1,
        totalPages: 0,
        areMoviesLoaded: false,
        currentURL: '',
        currentGenre: '',
      }
    )
  });

  test('MODAL', () => {
    expect(reducer(state, setModal(true))).toStrictEqual(
      {
        results: [],
        query: '',
        genres: null,
        isModalOpen: true,
        trailerURL: '',
        isTrailerLoaded: false,
        movieDetails: null,
        currentPage: 1,
        totalPages: 0,
        areMoviesLoaded: false,
        currentURL: '',
        currentGenre: '',
      }
    )
  });

  test('TRAILER', () => {
    expect(reducer(state, setTrailerURL('url'))).toStrictEqual(
      {
        results: [],
        query: '',
        genres: null,
        isModalOpen: false,
        trailerURL: 'url',
        isTrailerLoaded: false,
        movieDetails: null,
        currentPage: 1,
        totalPages: 0,
        areMoviesLoaded: false,
        currentURL: '',
        currentGenre: '',
      }
    )
  });

  test('IS_TRAILER_LOADED', () => {
    expect(reducer(state, setIsTrailerLoaded(true))).toStrictEqual(
      {
        results: [],
        query: '',
        genres: null,
        isModalOpen: false,
        trailerURL: '',
        isTrailerLoaded: true,
        movieDetails: null,
        currentPage: 1,
        totalPages: 0,
        areMoviesLoaded: false,
        currentURL: '',
        currentGenre: '',
      }
    )
  });

  test('MOVIE_DETAILS', () => {
    expect(reducer(state, setMovieDetails({title: 'Matrix', genre: 'Action'}))).toStrictEqual(
      {
        results: [],
        query: '',
        genres: null,
        isModalOpen: false,
        trailerURL: '',
        isTrailerLoaded: false,
        movieDetails: {title: 'Matrix', genre: 'Action'},
        currentPage: 1,
        totalPages: 0,
        areMoviesLoaded: false,
        currentURL: '',
        currentGenre: '',
      }
    )
  });

  test('CURRENT_PAGE', () => {
    expect(reducer(state, setCurrentPage(2))).toStrictEqual(
      {
        results: [],
        query: '',
        genres: null,
        isModalOpen: false,
        trailerURL: '',
        isTrailerLoaded: false,
        movieDetails: null,
        currentPage: 2,
        totalPages: 0,
        areMoviesLoaded: false,
        currentURL: '',
        currentGenre: '',
      }
    )
  });

  test('CURRENT_PAGE', () => {
    expect(reducer(state, setTotalPages(10))).toStrictEqual(
      {
        results: [],
        query: '',
        genres: null,
        isModalOpen: false,
        trailerURL: '',
        isTrailerLoaded: false,
        movieDetails: null,
        currentPage: 1,
        totalPages: 10,
        areMoviesLoaded: false,
        currentURL: '',
        currentGenre: '',
      }
    )
  });

  test('ARE_MOVIES_LOADED', () => {
    expect(reducer(state, setAreMoviesLoaded(true))).toStrictEqual(
      {
        results: [],
        query: '',
        genres: null,
        isModalOpen: false,
        trailerURL: '',
        isTrailerLoaded: false,
        movieDetails: null,
        currentPage: 1,
        totalPages: 0,
        areMoviesLoaded: true,
        currentURL: '',
        currentGenre: '',
      }
    )
  });

  test('CURRENT_URL', () => {
    expect(reducer(state, setCurrentURL('url'))).toStrictEqual(
      {
        results: [],
        query: '',
        genres: null,
        isModalOpen: false,
        trailerURL: '',
        isTrailerLoaded: false,
        movieDetails: null,
        currentPage: 1,
        totalPages: 0,
        areMoviesLoaded: false,
        currentURL: 'url',
        currentGenre: '',
      }
    )
  });

  test('CURRENT_GENRE', () => {
    expect(reducer(state, setCurrentGenre('Action'))).toStrictEqual(
      {
        results: [],
        query: '',
        genres: null,
        isModalOpen: false,
        trailerURL: '',
        isTrailerLoaded: false,
        movieDetails: null,
        currentPage: 1,
        totalPages: 0,
        areMoviesLoaded: false,
        currentURL: '',
        currentGenre: 'Action',
      }
    )
  });
});
