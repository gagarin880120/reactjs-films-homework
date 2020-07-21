import ShallowRenderer from 'react-test-renderer/shallow';
import React from 'react';
import MovieInfo from '../MovieInfo';

describe('MovieInfo component', () => {
  test('should render without crashing', () => {
    const renderer = new ShallowRenderer();
    renderer.render(<MovieInfo movie={{stars: [{type: 'full', id: 0}]}} />);
    const result = renderer.getRenderOutput();
    expect(result).toMatchSnapshot();
  });
});
