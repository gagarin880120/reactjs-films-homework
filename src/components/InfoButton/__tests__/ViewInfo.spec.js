import ShallowRenderer from 'react-test-renderer/shallow';
import React from 'react';
import ViewInfoButton from '../ViewInfoButton';

test('ViewInfoButton component should render without crashing', () => {
  const renderer = new ShallowRenderer();
  renderer.render(<ViewInfoButton />);
  const result = renderer.getRenderOutput();
  expect(result).toMatchSnapshot();
});
