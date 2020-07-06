import ShallowRenderer from 'react-test-renderer/shallow';
import React from 'react';
import SearchResultsPage from '../SearchResultsPage';

describe('SearchResultsPage component', () => {
  test('should render without crashing', () => {
    const renderer = new ShallowRenderer();
    renderer.render(
      <SearchResultsPage areMoviesLoaded={true} />);
    const result = renderer.getRenderOutput();
    expect(result).toMatchSnapshot();
  });

  test('should render with other elements, depends on props', () => {
    const renderer = new ShallowRenderer();
    renderer.render(
      <SearchResultsPage areMoviesLoaded={false} results={[1, 2, 3]} />);
    const result = renderer.getRenderOutput();
    expect(result).toMatchSnapshot();
  });
});
