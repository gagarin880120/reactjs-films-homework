import searchResultsSelector from '../selectors';

const state = {
  searchResults: [
    {
      "poster_path":"/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",
      "id":603,
      "genre_ids":[28,878],
      "title":"The Matrix",
      "vote_average":8.1,
      "overview":"Set in the 22nd century, The Matrix tells the story of a computer hacker...",
    },
    {
      "poster_path":"/aA5qHS0FbSXO8PxcxUIHbDrJyuh.jpg",
      "id":604,
      "genre_ids":[28,12,878,53],
      "title":"The Matrix Reloaded",
      "vote_average":6.9,
      "overview":"Six months after the events depicted in The Matrix, Neo has proved...",
    }
  ],
  genres: [
    {id: 28, name: 'Adventure'},
    {id: 878, name: 'Science Fiction'},
    {id: 12, name: 'Action'},
    {id: 53, name: 'Thriller'}
  ]
};

test('searchResultsSelector should return results', () => {
  expect(searchResultsSelector(state)).toStrictEqual(state.searchResults)
});

