function searchResultsAction(results) {
  return {
      type: 'SEARCH',
      results: results
  };
}

function genresAction(genres) {
  return {
      type: 'GENRES',
      genres: genres
  };
}

export { searchResultsAction, genresAction };
