import getGenresString from '../helpers/helpers';

const searchResultsSelector = (state) => {
  state.searchResults.map((v) => {
    const obj = v;
    obj.genres = getGenresString(v.genre_ids, state.genres);
    return { ...obj };
  });
  return state.searchResults;
};

const modalSelector = (state) => state.isModalOpen;

const trailerSelector = (state) => state.trailerURL;


export { searchResultsSelector, modalSelector, trailerSelector };
