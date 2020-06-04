import { getGenresString } from '../helpers/helpers';

export default function searchResultsSelector(state) {
  state.searchResults.forEach((v) => {
    const obj = v;
    obj.genres = getGenresString(v.genre_ids, state.genres);
    return obj;
  });
  return state.searchResults;
}
