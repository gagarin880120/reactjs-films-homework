import ShallowRenderer from 'react-test-renderer/shallow';
import TestRenderer, { act } from 'react-test-renderer';
import React from 'react';
import GalleryModeMovieCard from '../GalleryModeMovieCard';
import { BrowserRouter as Router } from 'react-router-dom';

describe('GalleryModeMovieCard component', () => {
  const movie = {
    title: 'Star Wars',
    genre_ids: [28],
    id: 11
  }

  const movieWithPoster = {
    title: 'Star Wars',
    genre_ids: [28],
    id: 11,
    poster_path: 'path'
  }

  const genres = [{id:28, name:'Adventure'}]

  test('should render without crashing', () => {
    const renderer = new ShallowRenderer();
    renderer.render(<GalleryModeMovieCard movie={movie} genres={genres} />);
    const result = renderer.getRenderOutput();
    expect(result).toMatchSnapshot();
  });

  describe('with mocked refs', () => {
    const testRenderer = TestRenderer.create(
      <Router>
        <GalleryModeMovieCard movie={movieWithPoster} genres={genres} />
      </Router>,
      {
        createNodeMock: (element) => {
          return element;
        }
      }
    );

    test('when infoButton is clicked should render overview element', () => {
      const button = testRenderer.root.findByProps({className: 'infoButton'});

      act(() => {
        button.props.onClick();
      });

      const overview = testRenderer.root.findByProps({className: 'overview'});
      expect(overview).not.toBeNull();
    });

    test('when closeInfo is clicked should change hoverEl className to hoverTrailer', () => {
      const closeInfo = testRenderer.root.findByProps({className: 'closeInfo'});
      const hoverEl = testRenderer.root.findByProps({className: 'hoverTrailer'});

      act(() => {
        closeInfo.props.onClick();
      });

      expect(hoverEl.props.className).toBe('hoverTrailer');
    });
  });

  test('when Link element is clicked should call onLinkClick', () => {
    const onLinkClick = jest.fn();
    const testRenderer = TestRenderer.create(
      <Router>
        <GalleryModeMovieCard onLinkClick={onLinkClick} movie={movie} />
      </Router>
    );
    const link = testRenderer.root.findByProps({ to: '/movie/11' });

    act(() => {
      link.props.onClick();
    });

    expect(onLinkClick).toHaveBeenCalled();
  });
});
