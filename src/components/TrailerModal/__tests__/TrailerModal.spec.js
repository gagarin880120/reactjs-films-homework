import ShallowRenderer from 'react-test-renderer/shallow';
import React from 'react';
import TrailerModal from '../TrailerModal';
import {render, fireEvent} from '@testing-library/react';

test('TrailerModal component should render without crashing', () => {
  const renderer = new ShallowRenderer();
  renderer.render(<TrailerModal />);
  const result = renderer.getRenderOutput();
  expect(result).toMatchSnapshot();
});

test('testing onClick event', () => {
  const setIsOpen = jest.fn();
  const { container, getByTestId } = render(<TrailerModal setIsOpen={setIsOpen} />);
  const modal = getByTestId('modal');
  fireEvent.click(modal);
  expect(setIsOpen).toHaveBeenCalledTimes(1);
});
