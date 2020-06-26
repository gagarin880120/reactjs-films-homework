import { getGenresString, getStars, convertTime } from '../helpers/helpers';

const genresSelector = (state) => state.genres;

const resultsSelector = (state) => state.results.map((v) => ({
  ...v,
  genres: getGenresString(v.genre_ids, state.genres),
}));

const modalSelector = (state) => state.isModalOpen;

const trailerSelector = (state) => state.trailerURL;

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

const currentGenreSelector = (state) => state.currentGenre;

const filteredResultsSelector = (state) => state.filteredResults.map((v) => ({
  ...v,
  genres: getGenresString(v.genre_ids, state.genres),
}));

export {
  resultsSelector, modalSelector, movieDetailsSelector, trailerSelector, genresSelector,
  currentGenreSelector, filteredResultsSelector
};
