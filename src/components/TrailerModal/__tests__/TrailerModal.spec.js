import ShallowRenderer from 'react-test-renderer/shallow';
import React from 'react';
import TrailerModal from '../TrailerModal';
import { render, fireEvent } from '@testing-library/react';

describe('TrailerModal component', () => {
  test('should render without crashing', () => {
    const renderer = new ShallowRenderer();
    renderer.render(<TrailerModal />);
    const result = renderer.getRenderOutput();
    expect(result).toMatchSnapshot();
  });

  test('if modal is open should have display === flex', () => {
    const { getByTestId } = render(<TrailerModal modalIsOpen={true} />);
    const modal = getByTestId('modal');
    expect(modal.style.display).toBe('flex');
  });

  test('if trailer is loading should not render iframe element', () => {
    const { queryByTestId } = render(<TrailerModal isTrailerLoading={true} />);
    expect(queryByTestId('video')).toBeNull();
  });

  test('if trailerSource is, should render iframe element', () => {
    const { queryByTestId } = render(<TrailerModal trailerSource="path_to_video" />);
    expect(queryByTestId('video')).not.toBeNull();
  });

  test('onClick should call setIsOpen', () => {
    const setIsOpen = jest.fn();
    const { getByTestId } = render(<TrailerModal setIsOpen={setIsOpen} />);
    const modal = getByTestId('modal');
    fireEvent.click(modal);
    expect(setIsOpen).toHaveBeenCalledTimes(1);
  });
});
