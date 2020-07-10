import { reducer } from '../store';
import { setResults, setGenres, setModal, setTrailerURL, setIsTrailerLoaded,
  setMovieDetails, setCurrentPage, setTotalPages, setAreMoviesLoaded, setViewMode,
  setIsMovieLoaded, setCurrentAPIRequest,
} from '../actions';

const state = {
  results: [],
  genres: null,
  isModalOpen: false,
  trailerURL: '',
  isTrailerLoaded: false,
  movieDetails: null,
  currentPage: 1,
  totalPages: 0,
  areMoviesLoaded: false,
  viewMode: 'gallery',
  isMovieLoaded: false,
  currentAPIRequest: '',
};

describe('Reducer should return store with changes according to action type', () => {
  test('RESULTS', () => {
    expect(reducer(state, setResults([1, 2, 3]))).toStrictEqual(
      {
        results: [1, 2, 3],
        genres: null,
        isModalOpen: false,
        trailerURL: '',
        isTrailerLoaded: false,
        movieDetails: null,
        currentPage: 1,
        totalPages: 0,
        areMoviesLoaded: false,
        viewMode: 'gallery',
        isMovieLoaded: false,
        currentAPIRequest: '',
      }
    )
  });

  test('GENRES', () => {
    expect(reducer(state, setGenres([1, 2, 3]))).toStrictEqual(
      {
        results: [],
        genres: [1, 2, 3],
        isModalOpen: false,
        trailerURL: '',
        isTrailerLoaded: false,
        movieDetails: null,
        currentPage: 1,
        totalPages: 0,
        areMoviesLoaded: false,
        viewMode: 'gallery',
        isMovieLoaded: false,
        currentAPIRequest: '',
      }
    )
  });

  test('MODAL', () => {
    expect(reducer(state, setModal(true))).toStrictEqual(
      {
        results: [],
        genres: null,
        isModalOpen: true,
        trailerURL: '',
        isTrailerLoaded: false,
        movieDetails: null,
        currentPage: 1,
        totalPages: 0,
        areMoviesLoaded: false,
        viewMode: 'gallery',
        isMovieLoaded: false,
        currentAPIRequest: '',
      }
    )
  });

  test('TRAILER', () => {
    expect(reducer(state, setTrailerURL('url'))).toStrictEqual(
      {
        results: [],
        genres: null,
        isModalOpen: false,
        trailerURL: 'url',
        isTrailerLoaded: false,
        movieDetails: null,
        currentPage: 1,
        totalPages: 0,
        areMoviesLoaded: false,
        viewMode: 'gallery',
        isMovieLoaded: false,
        currentAPIRequest: '',
      }
    )
  });

  test('IS_TRAILER_LOADED', () => {
    expect(reducer(state, setIsTrailerLoaded(true))).toStrictEqual(
      {
        results: [],
        genres: null,
        isModalOpen: false,
        trailerURL: '',
        isTrailerLoaded: true,
        movieDetails: null,
        currentPage: 1,
        totalPages: 0,
        areMoviesLoaded: false,
        viewMode: 'gallery',
        isMovieLoaded: false,
        currentAPIRequest: '',
      }
    )
  });

  test('MOVIE_DETAILS', () => {
    expect(reducer(state, setMovieDetails({title: 'Matrix', genre: 'Action'}))).toStrictEqual(
      {
        results: [],
        genres: null,
        isModalOpen: false,
        trailerURL: '',
        isTrailerLoaded: false,
        movieDetails: {title: 'Matrix', genre: 'Action'},
        currentPage: 1,
        totalPages: 0,
        areMoviesLoaded: false,
        viewMode: 'gallery',
        isMovieLoaded: false,
        currentAPIRequest: '',
      }
    )
  });

  test('CURRENT_PAGE', () => {
    expect(reducer(state, setCurrentPage(2))).toStrictEqual(
      {
        results: [],
        genres: null,
        isModalOpen: false,
        trailerURL: '',
        isTrailerLoaded: false,
        movieDetails: null,
        currentPage: 2,
        totalPages: 0,
        areMoviesLoaded: false,
        viewMode: 'gallery',
        isMovieLoaded: false,
        currentAPIRequest: '',
      }
    )
  });

  test('CURRENT_PAGE', () => {
    expect(reducer(state, setTotalPages(10))).toStrictEqual(
      {
        results: [],
        genres: null,
        isModalOpen: false,
        trailerURL: '',
        isTrailerLoaded: false,
        movieDetails: null,
        currentPage: 1,
        totalPages: 10,
        areMoviesLoaded: false,
        viewMode: 'gallery',
        isMovieLoaded: false,
        currentAPIRequest: '',
      }
    )
  });

  test('ARE_MOVIES_LOADED', () => {
    expect(reducer(state, setAreMoviesLoaded(true))).toStrictEqual(
      {
        results: [],
        genres: null,
        isModalOpen: false,
        trailerURL: '',
        isTrailerLoaded: false,
        movieDetails: null,
        currentPage: 1,
        totalPages: 0,
        areMoviesLoaded: true,
        viewMode: 'gallery',
        isMovieLoaded: false,
        currentAPIRequest: '',
      }
    )
  });


  test('VIEW_MODE', () => {
    expect(reducer(state, setViewMode('list'))).toStrictEqual(
      {
        results: [],
        genres: null,
        isModalOpen: false,
        trailerURL: '',
        isTrailerLoaded: false,
        movieDetails: null,
        currentPage: 1,
        totalPages: 0,
        areMoviesLoaded: false,
        viewMode: 'list',
        isMovieLoaded: false,
        currentAPIRequest: '',
      }
    )
  });

  test('IS_MOVIE_LOADED', () => {
    expect(reducer(state, setIsMovieLoaded(true))).toStrictEqual(
      {
        results: [],
        genres: null,
        isModalOpen: false,
        trailerURL: '',
        isTrailerLoaded: false,
        movieDetails: null,
        currentPage: 1,
        totalPages: 0,
        areMoviesLoaded: false,
        viewMode: 'gallery',
        isMovieLoaded: true,
        currentAPIRequest: '',
      }
    )
  });

    test('SET_CURRENT_API_REQUEST', () => {
    expect(reducer(state, setCurrentAPIRequest('popular'))).toStrictEqual(
      {
        results: [],
        genres: null,
        isModalOpen: false,
        trailerURL: '',
        isTrailerLoaded: false,
        movieDetails: null,
        currentPage: 1,
        totalPages: 0,
        areMoviesLoaded: false,
        viewMode: 'gallery',
        isMovieLoaded: false,
        currentAPIRequest: 'popular',
      }
    )
  });
});
