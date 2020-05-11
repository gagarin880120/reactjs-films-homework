import ShallowRenderer from 'react-test-renderer/shallow';
import React from 'react';
import MovieDetailsPage from '../MovieDetailsPage';

test('MovieDetailsPage component should render without crashing', () => {
  const renderer = new ShallowRenderer();
  renderer.render(<MovieDetailsPage />);
  const result = renderer.getRenderOutput();
  expect(result).toMatchSnapshot();
});