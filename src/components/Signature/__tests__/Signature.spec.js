import ShallowRenderer from 'react-test-renderer/shallow';
import React from 'react';
import Signature from '../Signature';

test('Signature component should render without crashing', () => {
  const renderer = new ShallowRenderer();
  renderer.render(<Signature name="Andrei Mandryk" />);
  const result = renderer.getRenderOutput();
  expect(result).toMatchSnapshot();
});
