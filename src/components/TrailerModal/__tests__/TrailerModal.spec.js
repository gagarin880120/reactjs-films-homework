import ShallowRenderer from 'react-test-renderer/shallow';
import TestRenderer, { act } from 'react-test-renderer';
import React from 'react';
import TrailerModal from '../TrailerModal';

describe('TrailerModal component', () => {

  test('should render without crashing', () => {
    const renderer = new ShallowRenderer();
    renderer.render(<TrailerModal modalIsOpen={true} isTrailerLoaded={true} />);

    const result = renderer.getRenderOutput();

    expect(result).toMatchSnapshot();
  });

  test('should render span with text "Trailer is not available" if trailerURL === null', () => {
    const renderer = new ShallowRenderer();
    renderer.render(<TrailerModal modalIsOpen={true} isTrailerLoaded={true} trailerURL={null} />);

    const result = renderer.getRenderOutput();

    expect(result).toMatchSnapshot();
  });

  test('should call closeModal on click', () => {
    const closeModal = jest.fn();
    const testRenderer = TestRenderer.create(
      <TrailerModal isTrailerLoaded={true} closeModal={closeModal} trailerURL="url" />
    );
    const modal = testRenderer.root.findByProps({className: 'modal'});

    act(() => {
      modal.props.onClick();
    });

    expect(closeModal).toHaveBeenCalled();
  });

  describe('onKeyDown', () => {
    test('should call closeModal if keycode === Enter', () => {
      const closeModal = jest.fn();
      const testRenderer = TestRenderer.create(<TrailerModal closeModal={closeModal} trailerURL="url" />);
      const modal = testRenderer.root.findByProps({className: 'modal'});

      act(() => {
        modal.props.onKeyDown({ key: 'Escape', code: 'Escape', which: 27 });
      });

      expect(closeModal).toHaveBeenCalled();
    });

    test('should not call closeModal function if keycode !== Enter', () => {
      const closeModal = jest.fn();
      const testRenderer = TestRenderer.create(<TrailerModal closeModal={closeModal} trailerURL="url" />);
      const modal = testRenderer.root.findByProps({className: 'modal'});

      act(() => {
        modal.props.onKeyDown({ key: 's', code: 'KeyS', which: 83 });
      });

      expect(closeModal).not.toHaveBeenCalled();
    });
  });
});
