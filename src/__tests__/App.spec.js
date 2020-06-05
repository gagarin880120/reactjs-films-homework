import ShallowRenderer from 'react-test-renderer/shallow';
import React from 'react';
import App from '../App';

test('App component should render without crashing', () => {
  const renderer = new ShallowRenderer();
  renderer.render(<App />);
  const result = renderer.getRenderOutput();
  expect(result).toMatchSnapshot();
});
