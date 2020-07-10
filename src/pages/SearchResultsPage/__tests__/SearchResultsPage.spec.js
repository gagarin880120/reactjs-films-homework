import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import TestRenderer, { act } from 'react-test-renderer';
import SearchResultsPage from '../SearchResultsPage';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';

jest.mock('react-router-dom', () => ({
  Link: () => null,
  useHistory: jest.fn().mockReturnValue({
    location: { pathname: '/popular' },
  }),
}));

describe('SearchResultsPage component', () => {
  test('should render without crashing', () => {
    const renderer = new ShallowRenderer();
    renderer.render(
      <SearchResultsPage areMoviesLoaded={true} isMovieLoaded={true}/>);
    const result = renderer.getRenderOutput();
    expect(result).toMatchSnapshot();
  });

  test('should render with other elements, depends on props', () => {
    const renderer = new ShallowRenderer();
    renderer.render(
      <SearchResultsPage areMoviesLoaded={false} results={[1, 2, 3]} />);
    const result = renderer.getRenderOutput();
    expect(result).toMatchSnapshot();
  });

  describe('mounted with TestRenderer', () => {
    const middlewares = [thunk];
    const mockStore = configureMockStore(middlewares);
    const store = mockStore({
      results: [{title: 'Matrix', genre_ids:[28], id: 398}],
      genres: [{id: 28, name: 'Action'}]
    });
    const onCurrentAPIRequestUpdate = jest.fn();

    const testRenderer = TestRenderer.create(
      <Provider store={store}>
        <SearchResultsPage
          currentAPIRequest="popular"
          onCurrentAPIRequestUpdate={onCurrentAPIRequestUpdate}
        />
      </Provider>
    );

    test('when currentAPIRequest is updated should call onCurrentAPIRequestUpdate', () => {

      act(() => {
        testRenderer.update(
          <Provider store={store}>
            <SearchResultsPage
              currentAPIRequest="search=matrix"
              onCurrentAPIRequestUpdate={onCurrentAPIRequestUpdate}
            />
          </Provider>
        );
      });

      expect(onCurrentAPIRequestUpdate).toHaveBeenCalled();
    });
  });
});
