import ShallowRenderer from 'react-test-renderer/shallow';
import React from 'react';
import Header from '../Header';

test('Header component should render without crashing', () => {
  const renderer = new ShallowRenderer();
  renderer.render(<Header />);
  const result = renderer.getRenderOutput();
  expect(result).toMatchSnapshot();
});
