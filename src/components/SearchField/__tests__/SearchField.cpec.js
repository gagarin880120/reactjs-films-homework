import ShallowRenderer from 'react-test-renderer/shallow';
import React from 'react';
import SearchField from '../SearchField';

test('SearchField component should render without crashing', () => {
  const renderer = new ShallowRenderer();
  renderer.render(<SearchField />);
  const result = renderer.getRenderOutput();
  expect(result).toMatchSnapshot();
});
