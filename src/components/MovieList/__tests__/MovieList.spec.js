import ShallowRenderer from 'react-test-renderer/shallow';
import React from 'react';
import MovieList from '../MovieList';

const results = [
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
]

describe('MovieList component', () => {
  test('should render without crashing', () => {
    const renderer = new ShallowRenderer();
    renderer.render(<MovieList results={results} />);
    const result = renderer.getRenderOutput();
    expect(result).toMatchSnapshot();
  });
});
