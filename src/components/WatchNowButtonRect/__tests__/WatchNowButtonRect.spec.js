import ShallowRenderer from 'react-test-renderer/shallow';
import React from 'react';
import WatchNowButtonRect from '../WatchNowButtonRect';

test('WatchNowButtonRect component should render without crashing', () => {
  const renderer = new ShallowRenderer();
  renderer.render(<WatchNowButtonRect />);
  const result = renderer.getRenderOutput();
  expect(result).toMatchSnapshot();
});
