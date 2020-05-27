import ShallowRenderer from 'react-test-renderer/shallow';
import React from 'react';
import TrailerButtonRect from '../TrailerButtonRect';

describe('TrailerButtonRect component', () => {
  test('should render without crashing', () => {
    const renderer = new ShallowRenderer();
    renderer.render(<TrailerButtonRect />);
    const result = renderer.getRenderOutput();
    expect(result).toMatchSnapshot();
  });
});
