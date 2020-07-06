import ShallowRenderer from 'react-test-renderer/shallow';
import React from 'react';
import MovieDetailsPage from '../MovieDetailsPage';

describe('MovieDetailsPage component', () => {
  test('should render without crashing', () => {
    const renderer = new ShallowRenderer();
    renderer.render(
      <MovieDetailsPage areMoviesLoaded={true} />);
    const result = renderer.getRenderOutput();
    expect(result).toMatchSnapshot();
  });

  test('should render with other elements, depends on props', () => {
    const renderer = new ShallowRenderer();
    renderer.render(
      <MovieDetailsPage movie={{backdrop_path: 'url'}} results={[1, 2, 3]} />);
    const result = renderer.getRenderOutput();
    expect(result).toMatchSnapshot();
  });
});
