import ShallowRenderer from 'react-test-renderer/shallow';
import React from 'react';
import MovieList from '../MovieList';

const results= [
  {"popularity":48.192,
  "vote_count":16954,
  "video":false,
  "poster_path":"/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",
  "id":603,
  "adult":false,
  "backdrop_path":"/ByDf0zjLSumz1MP1cDEo2JWVtU.jpg",
  "original_language":"en","original_title":"The Matrix",
  "genre_ids":[28,878],
  "title":"The Matrix",
  "vote_average":8.1,
  "overview":"Set in the 22nd century, The Matrix tells the story of a computer hacker...",
  "release_date":"1999-03-30"},
  {"popularity":26.959,
  "vote_count":6820,
  "video":false,
  "poster_path":"/aA5qHS0FbSXO8PxcxUIHbDrJyuh.jpg",
  "id":604,
  "adult":false,
  "backdrop_path":"/kQIzFGdVCwsuutMKyCVZ8LrJw3e.jpg",
  "original_language":"en",
  "original_title":"The Matrix Reloaded",
  "genre_ids":[28,12,878,53],
  "title":"The Matrix Reloaded",
  "vote_average":6.9,
  "overview":"Six months after the events depicted in The Matrix, Neo has proved...",
  "release_date":"2003-05-15"}
]

test('MovieList component should render without crashing', () => {
  const renderer = new ShallowRenderer();
  renderer.render(<MovieList results={results} />);
  const result = renderer.getRenderOutput();
  expect(result).toMatchSnapshot();
});
