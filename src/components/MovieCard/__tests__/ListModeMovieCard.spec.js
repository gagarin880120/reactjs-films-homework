import ShallowRenderer from 'react-test-renderer/shallow';
import TestRenderer, { act } from 'react-test-renderer';
import React from 'react';
import ListModeMovieCard from '../ListModeMovieCard';
import { BrowserRouter as Router } from 'react-router-dom';

describe('ListModeMovieCard component', () => {
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
    renderer.render(<ListModeMovieCard movie={movie} genres={genres} />);
    const result = renderer.getRenderOutput();
    expect(result).toMatchSnapshot();
  });

  test('when Link element is clicked should call onLinkClick', () => {
    const onLinkClick = jest.fn();
    const testRenderer = TestRenderer.create(
      <Router>
        <ListModeMovieCard movie={movieWithPoster} onLinkClick={onLinkClick} />
      </Router>
    );
    const link = testRenderer.root.findByProps({ to: '/movie/11' });

    act(() => {
      link.props.onClick();
    });

    expect(onLinkClick).toHaveBeenCalled();
  });
});
