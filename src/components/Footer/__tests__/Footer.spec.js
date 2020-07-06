import ShallowRenderer from 'react-test-renderer/shallow';
import TestRenderer, { act } from 'react-test-renderer';
import React from 'react';
import Footer from '../Footer';

describe('Footer component', () => {
  test('should render without crashing', () => {
    const renderer = new ShallowRenderer();
    renderer.render(<Footer />);
    const result = renderer.getRenderOutput();
    expect(result).toMatchSnapshot();
  });
  describe('testRenderer', () => {
    const testRenderer = TestRenderer.create(
    <Footer
      areMoviesLoaded={false}
      currentPage={5}
      totalPages={5}
    />
    );

    test('when areMoviesLoaded is updated', () => {
      act(() => {
        testRenderer.update(
          <Footer
            areMoviesLoaded={true}
            currentPage={5}
            totalPages={5}
          />
        );
      });
    });

    describe('intersectionObserver', () => {
      const mockIntersectionObserver = jest.fn();
      const observe = jest.fn();
      const disconnect = jest.fn();
      const onIntersect = jest.fn();

      mockIntersectionObserver.mockReturnValue({
        observe: observe,
        disconnect: disconnect
      });

      window.IntersectionObserver = mockIntersectionObserver;

      test('should not call onIntersect method if not intersected', () => {
        act(() => {
          testRenderer.update(
            <Footer
              areMoviesLoaded={false}
              currentPage={2}
              totalPages={5}
              onIntersect={onIntersect}
            />
          );
        });

        const mockEntry = { isIntersecting: false }
        const observerCallback = mockIntersectionObserver.mock.calls[0][0];
        observerCallback([mockEntry])
        expect(onIntersect).not.toHaveBeenCalled();
      });

      test('should call onIntersect method if is intersected', () => {
        act(() => {
          testRenderer.update(
            <Footer
              areMoviesLoaded={true}
              currentPage={2}
              totalPages={5}
              onIntersect={onIntersect}
            />
          );
        });

        const mockEntry = { isIntersecting: true }
        const observerCallback = mockIntersectionObserver.mock.calls[0][0];
        observerCallback([mockEntry])
        expect(onIntersect).toHaveBeenCalled();
        expect(disconnect).toHaveBeenCalled();
      });
    });
  });
});

