import ShallowRenderer from 'react-test-renderer/shallow';
import React from 'react';
import TrailerButtonRound from '../TrailerButtonRound';

describe('TrailerButtonRound component', () => {
  test('should render without crashing', () => {
    const renderer = new ShallowRenderer();
    renderer.render(<TrailerButtonRound />);
    const result = renderer.getRenderOutput();
    expect(result).toMatchSnapshot();
  });
});
