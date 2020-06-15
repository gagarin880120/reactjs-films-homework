import ShallowRenderer from 'react-test-renderer/shallow';
import TestRenderer, {act} from 'react-test-renderer';
import React from 'react';
import MovieCard from '../MovieCard';

describe('MovieCard component', () => {
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

  test('should render without crashing', () => {
    const renderer = new ShallowRenderer();
    renderer.render(<MovieCard movie={movie} genres={[{id:28, name:'Adventure'}]} />);
    const result = renderer.getRenderOutput();
    expect(result).toMatchSnapshot();
  });

  // test('when onTrailerButtonClick is called should render modal', () => {
  //   const testRenderer = TestRenderer.create(<MovieCard movie={movieWithPoster} genres={[{id:28, name:'Adventure'}]} />);
  //   const button = testRenderer.root.findByProps({testid: 'trailerButtonRound'});

  //   act(() => {
  //     button.props.onTrailerButtonClick();
  //   });

  //   const modal = testRenderer.root.findByProps({testid: 'modal'});

  //   expect(modal).not.toBeNull();
  // })

});
