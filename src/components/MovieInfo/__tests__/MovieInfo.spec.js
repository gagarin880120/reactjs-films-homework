import ShallowRenderer from 'react-test-renderer/shallow';
import React from 'react';
import MovieInfo from '../MovieInfo';

describe('MovieInfo component', () => {
  test('should render without crashing', () => {
    const renderer = new ShallowRenderer();
    renderer.render(<MovieInfo />);
    const result = renderer.getRenderOutput();
    expect(result).toMatchSnapshot();
  });
});
