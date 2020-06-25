import getGenresString from '../helpers/helpers';

const genresSelector = (state) => state.genres;

const searchResultsSelector = (state) => state.searchResults.map((v) => ({
  ...v,
  genres: getGenresString(v.genre_ids, state.genres),
}));

const modalSelector = (state) => state.isModalOpen;

const trailerSelector = (state) => state.trailerURL;

const movieDetailsSelector = (state) => state.movieDetails;

export {
  searchResultsSelector, modalSelector, movieDetailsSelector, trailerSelector, genresSelector
};
