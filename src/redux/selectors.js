import { getGenresString, getStars, convertTime } from '../helpers/helpers';

const genresSelector = (state) => state.genres;

const resultsSelector = (state) => state.results.map((v) => ({
  ...v,
  genres: getGenresString(v.genre_ids, state.genres),
}));

const modalSelector = (state) => state.isModalOpen;
const trailerSelector = (state) => state.trailerURL;
const isTrailerLoadedSelector = (state) => state.isTrailerLoaded;

const movieDetailsSelector = (state) => {
  if (state.movieDetails) {
    return {
      ...state.movieDetails,
      genres: state.movieDetails.genres.reduce((acc, val) => `${acc}${val.name}, `, '').slice(0, -2),
      stars: getStars(state.movieDetails.vote_average),
      runtime: convertTime(state.movieDetails.runtime),
    };
  }
  return null;
};

const currentPageSelector = (state) => state.currentPage;
const totalPagesSelector = (state) => state.totalPages;
const querySelector = (state) => state.query;
const areMoviesLoadedSelector = (state) => state.areMoviesLoaded;
const currentURLSelector = (state) => state.currentURL;
const currentGenreSelector = (state) => state.currentGenre;
const viewModeSelector = (state) => state.viewMode;
const isMovieLoadedSelector = (state) => state.isMovieLoaded;

export {
  resultsSelector, modalSelector, movieDetailsSelector, trailerSelector, isTrailerLoadedSelector,
  genresSelector, currentPageSelector, totalPagesSelector, querySelector, areMoviesLoadedSelector,
  currentURLSelector, currentGenreSelector, viewModeSelector, isMovieLoadedSelector,
};
