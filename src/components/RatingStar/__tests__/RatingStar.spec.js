import ShallowRenderer from 'react-test-renderer/shallow';
import React from 'react';
import RatingStar from '../RatingStar';

describe('RatingStar component', () => {
  test('should render full star icon when type is "full"', () => {
    const renderer = new ShallowRenderer();
    renderer.render(<RatingStar type="full" />);
    const result = renderer.getRenderOutput();
    expect(result).toMatchSnapshot();
  });

  test('should render half star icon when type is "half"', () => {
    const renderer = new ShallowRenderer();
    renderer.render(<RatingStar type="half" />);
    const result = renderer.getRenderOutput();
    expect(result).toMatchSnapshot();
  });
});
