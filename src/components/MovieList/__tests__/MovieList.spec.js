import ShallowRenderer from 'react-test-renderer/shallow';
import React from 'react';
import MovieList from '../MovieList';

test('MovieList component should render without crashing', () => {
  const renderer = new ShallowRenderer();
  renderer.render(<MovieList />);
  const result = renderer.getRenderOutput();
  expect(result).toMatchSnapshot();
});
