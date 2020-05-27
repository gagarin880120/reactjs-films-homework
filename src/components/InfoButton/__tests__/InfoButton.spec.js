import ShallowRenderer from 'react-test-renderer/shallow';
import React from 'react';
import InfoButton from '../InfoButton';

describe('InfoButton component', () => {
  test('should render without crashing', () => {
    const renderer = new ShallowRenderer();
    renderer.render(<InfoButton />);
    const result = renderer.getRenderOutput();
    expect(result).toMatchSnapshot();
  });
});
