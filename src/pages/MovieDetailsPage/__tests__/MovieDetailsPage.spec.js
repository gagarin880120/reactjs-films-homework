import ShallowRenderer from 'react-test-renderer/shallow';
import React from 'react';
import MovieDetailsPage from '../MovieDetailsPage';

describe('MovieDetailsPage component', () => {
  test('should render without crashing', () => {
    const renderer = new ShallowRenderer();
    renderer.render(<MovieDetailsPage />);
    const result = renderer.getRenderOutput();
    expect(result).toMatchSnapshot();
  });
});
