import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import TestRenderer, { act } from 'react-test-renderer';
import MovieDetailsPage from '../MovieDetailsPage';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';

jest.mock('react-router-dom', () => ({
  Link: () => null,
  useHistory: jest.fn().mockReturnValue({
    location: { pathname: '/popular' },
  }),
}));

describe('MovieDetailsPage', () => {
  describe('component', () => {
    test('should render without crashing', () => {
      const renderer = new ShallowRenderer();
      renderer.render(
        <MovieDetailsPage areMoviesLoaded={true} />);
      const result = renderer.getRenderOutput();
      expect(result).toMatchSnapshot();
    });

    test('should render with other elements, depends on props', () => {
      const renderer = new ShallowRenderer();
      renderer.render(
        <MovieDetailsPage movie={{backdrop_path: 'url'}} results={[1, 2, 3]} />);
      const result = renderer.getRenderOutput();
      expect(result).toMatchSnapshot();
    });
    describe('mounted with TestRenderer', () => {
      const onPageLoad = jest.fn();

      test('should call onPageLoad when is mounted', () => {
        const middlewares = [thunk];
        const mockStore = configureMockStore(middlewares);
        const store = mockStore({
          results: [{title: 'Matrix', genre_ids:[28], id: 398}],
          genres: [{id: 28, name: 'Action'}],
          movieDetails: {
            backdrop_path: 'url',
            title: 'Matrix',
            runtime: 120,
            vote_average: 8.6,
            genres: [{name: 'Adventure'}],
          },
        });

        act(() => {
          TestRenderer.create(
            <Provider store={store}>
              <MovieDetailsPage
                onPageLoad={onPageLoad}
              />
            </Provider>
          );
        });

        expect(onPageLoad).toHaveBeenCalled();
      });
    });
  });
});
