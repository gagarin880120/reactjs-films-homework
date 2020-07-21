import ShallowRenderer from 'react-test-renderer/shallow';
import React from 'react';
import { AppContainer, mapStateToProps, mapDispatchToProps } from '../AppContainer';
import { getGenres, setCurrentAPIRequest, getMovieDetails, getMovies, } from '../../../redux/actions';

jest.mock('../../../redux/actions',() => ({
  getGenres: jest.fn().mockReturnValue([{id: 28, name: 'Action'}]),
  setCurrentAPIRequest: jest.fn().mockReturnValue('popular'),
  getMovieDetails:  jest.fn().mockReturnValue({title: 'Matrix'}),
  getMovies: jest.fn().mockReturnValue('getMoviesAction'),
}))

describe('AppContainer component', () => {
  test('should render without crashing', () => {
    const renderer = new ShallowRenderer();
    renderer.render(<AppContainer />);
    const result = renderer.getRenderOutput();
    expect(result).toMatchSnapshot();
  });

  describe('mapStateToProps', () => {
    test('should return the right value', () => {

      const initialState = {
        genres: [{id: 28, name: 'Action'}],
        currentAPIRequest: 'popular',
      };

      expect(mapStateToProps(initialState).genres).toEqual([{id: 28, name: 'Action'}]);
      expect(mapStateToProps(initialState).currentAPIRequest).toEqual('popular');
    });
  });

  describe('mapDispatchToProps', () => {
    afterEach(() => {
      jest.clearAllMocks();
    })

    test('onAppLoad should dispatch getGenres action', () => {
      const dispatch = jest.fn();
      const {onAppLoad} = mapDispatchToProps(dispatch);

      onAppLoad();

      expect(getGenres).toHaveBeenCalled();
    });

    test('onReload should dispatch getMovieDetails and getMovies actions if path includes "movie/"', () => {
      const dispatch = jest.fn();
      const {onReload} = mapDispatchToProps(dispatch);

      onReload('movie/');

      expect(getMovieDetails).toHaveBeenCalled();
      expect(getMovies).toHaveBeenCalled();
    });

    test('onReload should dispatch setCurrentAPIRequest action if path not includes "/movie"', () => {
      const dispatch = jest.fn();
      const {onReload} = mapDispatchToProps(dispatch);

      onReload('/genre=35');

      expect(setCurrentAPIRequest).toHaveBeenCalled();
    });
  });

});
