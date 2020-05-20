import ShallowRenderer from 'react-test-renderer/shallow';
import React from 'react';
import SearchField from '../SearchField';
import {render, fireEvent} from '@testing-library/react';

test('SearchField component should render without crashing', () => {
  const renderer = new ShallowRenderer();
  renderer.render(<SearchField />);
  const result = renderer.getRenderOutput();
  expect(result).toMatchSnapshot();
});

test('testing onChange event', () => {
  const { container, getByPlaceholderText } = render(<SearchField />);
  const input = getByPlaceholderText('🔍');
  fireEvent.change(input, { target: { value: 'matrix' } });
  expect(input.value).toEqual('matrix');
});

test('testing onKeyDown event', () => {
  const { container, getByPlaceholderText } = render(<SearchField onKeyDownHandler={onKeyDownHandler} />);
  const onKeyDownHandler = jest.fn();
  const input = getByPlaceholderText('🔍');
  fireEvent.keyDown(input, { key: 'Enter', code: 'Enter' });
  expect(onKeyDownHandler).toHaveBeenCalledTimes(1);
});
