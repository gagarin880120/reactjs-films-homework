import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import { FooterContainer, mapStateToProps, mapDispatchToProps } from '../FooterContainer';
import { getMovies, getMoviesBySearch, getMoviesByGenre } from '../../../redux/actions';

jest.mock('../../../redux/actions',() => ({
  getMovies: jest.fn().mockReturnValue([{title: 'Matrix'}]),
  getMoviesBySearch: jest.fn().mockReturnValue([{title: 'Matrix'}]),
  getMoviesByGenre: jest.fn().mockReturnValue([{title: 'Matrix'}]),
}))

describe('FooterContainer component', () => {
  test('should render without crashing', () => {
    const renderer = new ShallowRenderer();
    renderer.render(<FooterContainer />);
    const result = renderer.getRenderOutput();
    expect(result).toMatchSnapshot();
  });

  describe('mapStateToProps', () => {
    test('should return the right value', () => {

      const initialState = {
        results: [{title: 'Matrix', genre_ids: [28]}],
        currentPage: 1,
        areMoviesLoaded: false,
        totalPages: 10,
        currentAPIRequest: 'popular',
        genres: [{id: 28, name: 'Action'}],
      };

      expect(mapStateToProps(initialState).results).toEqual([{title: 'Matrix', genre_ids: [28], genres: 'Action'}]);
      expect(mapStateToProps(initialState).currentPage).toEqual(1);
      expect(mapStateToProps(initialState).currentAPIRequest).toEqual('popular');
      expect(mapStateToProps(initialState).areMoviesLoaded).toEqual(false);
      expect(mapStateToProps(initialState).totalPages).toEqual(10);
    });
  });

  describe('mapDispatchToProps', () => {
    afterEach(() => {
      jest.clearAllMocks();
    });

    const dispatch = jest.fn();
    const {onIntersect} = mapDispatchToProps(dispatch);

    describe('onIntersect', () => {
      test('should dispatch getMovies action if is call with "popular" API request', () => {
        onIntersect('popular');
        expect(getMovies).toHaveBeenCalled();
      });

      test('should dispatch getMoviesBySearch action if is call with "search=matrix" API request', () => {
        onIntersect('search=matrix');
        expect(getMoviesBySearch).toHaveBeenCalled();
      });

      test('should dispatch getMoviesByGenre action if is call with "genre=28" API request', () => {
        onIntersect('genre=28');
        expect(getMoviesByGenre).toHaveBeenCalled();
      });
    });
  });
});
