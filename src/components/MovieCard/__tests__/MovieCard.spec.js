import ShallowRenderer from 'react-test-renderer/shallow';
import React from 'react';
import MovieCard from '../MovieCard';
import {render, fireEvent, waitFor } from '@testing-library/react';
import {getTrailer} from '../../../helpers/helpers'

describe('MovieCard', () => {
  test('MovieCard component should render without crashing', () => {
    const renderer = new ShallowRenderer();
    renderer.render(<MovieCard title='Star Wars' genre_ids={[28]} genres={[{id:28, name:'Adventure'}]} />);
    const result = renderer.getRenderOutput();
    expect(result).toMatchSnapshot();
  });

  test('testing onMouseOver event', () => {
    const { getByTestId } = render(<MovieCard title='Star Wars' genre_ids={[28]} genres={[{id:28, name:'Adventure'}]} />);
    const wrapper = getByTestId('wrapper');
    const hoverTrailer = getByTestId('hoverTrailer');

    fireEvent.mouseOver(wrapper);

    expect(hoverTrailer.style.display).toBe('flex')
  });

  test('testing onMouseOver event when info is viewed', () => {
    const { getByTestId } = render(<MovieCard title='Star Wars' genre_ids={[28]} genres={[{id:28, name:'Adventure'}]} />);
    const wrapper = getByTestId('wrapper');
    const hoverTrailer = getByTestId('hoverTrailer');
    const button = getByTestId('infoButton');

    fireEvent.click(button);

    fireEvent.mouseOver(wrapper);

    expect(hoverTrailer.style.display).toBe('none')
  });

  test('testing onMouseLeave event', () => {
    const { getByTestId } = render(<MovieCard title='Star Wars' poster_path='path' genre_ids={[28]} genres={[{id:28, name:'Adventure'}]} />);
    const wrapper = getByTestId('wrapper');
    const hoverTrailer = getByTestId('hoverTrailer');

    fireEvent.mouseLeave(wrapper);

    expect(hoverTrailer.style.display).toBe('none');
  });

  test('testing onClick event on InfoButton element', () => {
    const { getByTestId } = render(<MovieCard title='The Matrix: Revolution' genre_ids={[28]} genres={[{id:28, name:'Adventure'}]} />);
    const button = getByTestId('infoButton');
    const hoverTrailer = getByTestId('hoverTrailer');
    const info = getByTestId('info');

    fireEvent.click(button);

    expect(hoverTrailer.style.display).toBe('none');
    expect(info.className).toBe('infoIsViewed');
  });

  test('testing onClick event on closeInfo element', () => {
    const { getByTestId } = render(<MovieCard title='Star Wars' genre_ids={[28]} genres={[{id:28, name:'Adventure'}]} />);

    const button = getByTestId('infoButton');
    fireEvent.click(button);

    const closeEl = getByTestId('closeInfo');
    const info = getByTestId('info');

    fireEvent.click(closeEl);
    expect(info.className).toBe('movieInfo');
  });

  describe('testing onClick event on TrailerButtonRound element', () => {
    beforeEach(() => {
      fetch.resetMocks()
    })
    test('Should render iframe element with trailer if getTrailer is resolved', async () => {
      const { getByTestId } = render(<MovieCard title='Star Wars' id={11} genre_ids={[28]} genres={[{id:28, name:'Adventure'}]} />);
      const button = getByTestId('trailerButtonRound');
      const modal = getByTestId('modal');

      fetch.mockResponseOnce(JSON.stringify({ videos: {results: [{key: '123'}]} }))
      fireEvent.click(button);

      const video = await waitFor(() => getByTestId('video'));

      expect(modal).not.toBeNull();
      expect(video).not.toBeNull();
    })

    test('Should render span element with text Trailer is not available if getTrailer is rejected', async () => {
      const { getByTestId } = render(<MovieCard title='Star Wars' id={11} genre_ids={[28]} genres={[{id:28, name:'Adventure'}]} />);
      const button = getByTestId('trailerButtonRound');
      const modal = getByTestId('modal');

      fireEvent.click(button);

      const span = await waitFor(() => getByTestId('noTrailer'));

      expect(modal).not.toBeNull();
      expect(span).not.toBeNull();
    })
  })
})
