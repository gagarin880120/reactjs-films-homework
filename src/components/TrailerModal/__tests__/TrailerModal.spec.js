import ShallowRenderer from 'react-test-renderer/shallow';
import TestRenderer, { act } from 'react-test-renderer';
import React from 'react';
import TrailerModal from '../TrailerModal';

describe('TrailerModal component', () => {

  test('should render without crashing', () => {
    const renderer = new ShallowRenderer();
    renderer.render(<TrailerModal modalIsOpen={true} trailerURL="loading" />);
    const result = renderer.getRenderOutput();
    expect(result).toMatchSnapshot();
  });

  test('should render span with text "Trailer is not available" if trailerURL === null', () => {
    const renderer = new ShallowRenderer();
    renderer.render(<TrailerModal modalIsOpen={true} trailerURL={null} />);
    const result = renderer.getRenderOutput();
    expect(result).toMatchSnapshot();
  });

  test('should call closeModal on click', () => {
    const closeModal = jest.fn();
    const testRenderer = TestRenderer.create(<TrailerModal closeModal={closeModal} trailerURL="url" />);
    const modal = testRenderer.root.findByProps({testid: 'modal'});

    act(() => {
      modal.props.onClick();
    });

    expect(closeModal).toHaveBeenCalled();
  });
});
