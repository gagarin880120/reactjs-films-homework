import ShallowRenderer from 'react-test-renderer/shallow';
import React from 'react';
import MovieCard from '../MovieCard';
import { render, fireEvent, waitFor } from '@testing-library/react';

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

  test('when InfoButton element is clicked should change info element\'s className to infoIsViewed', () => {
    const { getByTestId } = render(<MovieCard movie={movie} genres={[{id:28, name:'Adventure'}]} />);
    const button = getByTestId('infoButton');
    const info = getByTestId('info');

    fireEvent.click(button);

    expect(info.className).toBe('infoIsViewed');
  });

  test('when closeInfo element is clicked should change info element\'s className to movieInfo', () => {
    const { getByTestId } = render(<MovieCard movie={movieWithPoster} genres={[{id:28, name:'Adventure'}]} />);

    const button = getByTestId('infoButton');
    fireEvent.click(button);

    const closeEl = getByTestId('closeInfo');
    const info = getByTestId('info');

    fireEvent.click(closeEl);

    expect(info.className).toBe('movieInfo');
  });

  describe('when TrailerButtonRound element is clicked', () => {
    beforeEach(() => {
      fetch.resetMocks()
    })
    test('should render iframe element with trailer if getTrailer is resolved', async () => {
      const { getByTestId } = render(<MovieCard movie={movie} genres={[{id:28, name:'Adventure'}]} />);
      const button = getByTestId('trailerButtonRound');
      const modal = getByTestId('modal');

      fetch.mockResponseOnce(JSON.stringify({ videos: {results: [{key: '123'}]} }))
      fireEvent.click(button);

      const video = await waitFor(() => getByTestId('video'));

      expect(modal).not.toBeNull();
      expect(video).not.toBeNull();
    })

    test('should render span element with text Trailer is not available if getTrailer is rejected', async () => {
      const { getByTestId } = render(<MovieCard movie={movie} genres={[{id:28, name:'Adventure'}]} />);
      const button = getByTestId('trailerButtonRound');
      const modal = getByTestId('modal');

      fireEvent.click(button);

      const span = await waitFor(() => getByTestId('noTrailer'));

      expect(modal).not.toBeNull();
      expect(span).not.toBeNull();
    })
  })
})
