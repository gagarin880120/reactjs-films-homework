import ShallowRenderer from 'react-test-renderer/shallow';
import React from 'react';
import MovieListNavBar from '../MovieListNavBar';
import TestRenderer, { act } from 'react-test-renderer';

describe('MovieListNavBar component', () => {
  test('should render without crashing', () => {
    const renderer = new ShallowRenderer();
    renderer.render(<MovieListNavBar />);
    const result = renderer.getRenderOutput();
    expect(result).toMatchSnapshot();
  });

  describe('events', () => {
    const onTrending = jest.fn();
    const onTopRated = jest.fn();
    const onUpcoming = jest.fn();
    const onGenreChange = jest.fn();

    const testRenderer = TestRenderer.create(
      <MovieListNavBar
        onTrending={onTrending}
        onTopRated={onTopRated}
        onUpcoming={onUpcoming}
        onGenreChange={onGenreChange}
      />
    );

    describe('trending button', () => {
      test('when is clicked should call onTrending function', () => {
        const button = testRenderer.root.findByProps({id: 'trending'});

        act(() => {
          button.props.onClick();
        })

        expect(onTrending).toHaveBeenCalled();
      });
    });

    describe('topRated button', () => {
      test('when is clicked should call onTopRated function', () => {
        const button = testRenderer.root.findByProps({id: 'topRated'});

        act(() => {
          button.props.onClick();
        })

        expect(onTopRated).toHaveBeenCalled();
      });
    });

    describe('upcoming button', () => {
      test('when is clicked should call onUpcoming function', () => {
        const button = testRenderer.root.findByProps({id: 'upComing'});

        act(() => {
          button.props.onClick();
        })

        expect(onUpcoming).toHaveBeenCalled();
      });
    });

    describe('select', () => {
      test('when is change should call onGenreChange function', () => {
        const select = testRenderer.root.findByType('select');

        act(() => {
          select.props.onChange({target: { value: '28' }});
        })

        expect(onGenreChange).toHaveBeenCalled();
      });
    });

  });
});
