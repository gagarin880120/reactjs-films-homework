import ShallowRenderer from 'react-test-renderer/shallow';
import React from 'react';
import { MovieListNavBarContainer, mapStateToProps, mapDispatchToProps } from '../MovieListNavBarContainer';
import { getMovies, setCurrentGenre } from '../../../redux/actions';

jest.mock('../../../redux/actions',() => ({
  getMovies: jest.fn().mockReturnValue('getMoviesAction'),
  setCurrentGenre: jest.fn().mockReturnValue('Adventure'),
}))

describe('MovieListNavBarContainer component', () => {
  test('should render without crashing', () => {
    const renderer = new ShallowRenderer();
    renderer.render(<MovieListNavBarContainer />);
    const result = renderer.getRenderOutput();
    expect(result).toMatchSnapshot();
  });

  describe('mapStateToProps', () => {
    test('should return the right value', () => {

      const initialState = {
        genres: [{id: 28, name: 'Action'}],
        currentGenre: '28',
      };

      expect(mapStateToProps(initialState).genres).toEqual([{id: 28, name: 'Action'}]);
      expect(mapStateToProps(initialState).currentGenre).toEqual('28');
    });
  });

  describe('mapDispatchToProps', () => {
    afterEach(() => {
      jest.clearAllMocks();
    })

    test('onTrending should dispatch getMovies and setCurrentGenre actions', () => {
      const dispatch = jest.fn();
      const {onTrending} = mapDispatchToProps(dispatch);

      onTrending();

      expect(getMovies).toHaveBeenCalled();
      expect(setCurrentGenre).toHaveBeenCalled();
    });

    test('onTopRated should dispatch getMovies and setCurrentGenre actions', () => {
      const dispatch = jest.fn();
      const {onTopRated} = mapDispatchToProps(dispatch);

      onTopRated();

      expect(getMovies).toHaveBeenCalled();
      expect(setCurrentGenre).toHaveBeenCalled();
    });

    test('onUpcoming should dispatch getMovies and setCurrentGenre actions', () => {
      const dispatch = jest.fn();
      const {onUpcoming} = mapDispatchToProps(dispatch);

      onUpcoming();

      expect(getMovies).toHaveBeenCalled();
      expect(setCurrentGenre).toHaveBeenCalled();
    });

    test('onGenreChange should dispatch getMovies and setCurrentGenre actions', () => {
      const dispatch = jest.fn();
      const {onGenreChange} = mapDispatchToProps(dispatch);

      onGenreChange();

      expect(getMovies).toHaveBeenCalled();
      expect(setCurrentGenre).toHaveBeenCalled();
    });
  });
});
