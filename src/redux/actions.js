export default function searchResultsAction(results) {
  return {
      type: 'SEARCH',
      results: results
  };
}
