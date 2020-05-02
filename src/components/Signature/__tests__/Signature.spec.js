import ShallowRenderer from 'react-test-renderer/shallow';
import React, { useCallback } from 'react';
import Signature from '../Signature';

test('Signature component must contain h1 element with name', () => {
  const renderer = new ShallowRenderer();
  renderer.render(<Signature name="Andrei Mandryk" />);
  const result = renderer.getRenderOutput();
  expect(result.type).toBe('header');
  expect(result.props.children).toEqual(
    <h1>Andrei Mandryk</h1>,
  );
});
