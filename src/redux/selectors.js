import getGenresString from '../helpers/helpers';

const searchResultsSelector = (state) => state.searchResults.map((v) => ({
  ...v,
  genres: getGenresString(v.genre_ids, state.genres),
}));

const modalSelector = (state) => state.isModalOpen;

const trailerSelector = (state) => state.trailerURL;
const isTrailerLoadedSelector = (state) => state.isTrailerLoaded;

export {
  searchResultsSelector, modalSelector, trailerSelector, isTrailerLoadedSelector,
};
