import ShallowRenderer from 'react-test-renderer/shallow';
import React from 'react';
import MovieListNavBar from '../MovieListNavBar';
import TestRenderer, { act } from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';

describe('MovieListNavBar component', () => {
  test('should render without crashing', () => {
    const renderer = new ShallowRenderer();
    renderer.render(<MovieListNavBar currentAPIRequest="/popular" viewMode="list" genres={[{id: 28, name: 'Action'}]}/>);
    const result = renderer.getRenderOutput();
    expect(result).toMatchSnapshot();
  });

  test('should render with another styles depends on props', () => {
    const renderer = new ShallowRenderer();
    renderer.render(<MovieListNavBar currentAPIRequest="/upcoming" viewMode="gallery" />);
    const result = renderer.getRenderOutput();
    expect(result).toMatchSnapshot();
  });

  test('should render with another styles depends on props', () => {
    const renderer = new ShallowRenderer();
    renderer.render(<MovieListNavBar currentAPIRequest="/discover" viewMode="gallery" />);
    const result = renderer.getRenderOutput();
    expect(result).toMatchSnapshot();
  });

  test('should render with another styles depends on props', () => {
    const renderer = new ShallowRenderer();
    renderer.render(<MovieListNavBar currentAPIRequest="/top_rated" viewMode="gallery" />);
    const result = renderer.getRenderOutput();
    expect(result).toMatchSnapshot();
  });

  describe('events', () => {
    const onTrending = jest.fn();
    const onTopRated = jest.fn();
    const onUpcoming = jest.fn();
    const onGenreChange = jest.fn();
    const switchViewMode = jest.fn();

    const testRenderer = TestRenderer.create(
      <Router>
        <MovieListNavBar
          onTrending={onTrending}
          onTopRated={onTopRated}
          onUpcoming={onUpcoming}
          onGenreChange={onGenreChange}
          switchViewMode={switchViewMode}
          currentAPIRequest="genre=35"
        />
      </Router>
    );

    describe('trending link', () => {
      test('when is clicked should call onTrending function', () => {
        const link = testRenderer.root.findByProps({id: 'popular'});

        act(() => {
          link.props.onClick();
        })

        expect(onTrending).toHaveBeenCalled();
      });
    });

    describe('topRated link', () => {
      test('when is clicked should call onTopRated function', () => {
        const link = testRenderer.root.findByProps({id: 'topRated'});

        act(() => {
          link.props.onClick();
        })

        expect(onTopRated).toHaveBeenCalled();
      });
    });

    describe('upcoming link', () => {
      test('when is clicked should call onUpcoming function', () => {
        const link = testRenderer.root.findByProps({id: 'upComing'});

        act(() => {
          link.props.onClick();
        })

        expect(onUpcoming).toHaveBeenCalled();
      });
    });

    describe('select', () => {
      test('when is onChange should call onGenreChange function', () => {
        const select = testRenderer.root.findByType('select');

        act(() => {
          select.props.onChange({target: { value: '28' }});
        })

        expect(onGenreChange).toHaveBeenCalled();
      });
    });

    describe('galleryView button', () => {
      test('when is clicked should call switchViewMode function', () => {
        const button = testRenderer.root.findByProps({id: 'galleryView'});

        act(() => {
          button.props.onClick();
        })

        expect(switchViewMode).toHaveBeenCalled();
      });
    });

    describe('listView button', () => {
      test('when is clicked should call switchViewMode function', () => {
        const button = testRenderer.root.findByProps({id: 'listView'});

        act(() => {
          button.props.onClick();
        })

        expect(switchViewMode).toHaveBeenCalled();
      });
    });

  });
});
