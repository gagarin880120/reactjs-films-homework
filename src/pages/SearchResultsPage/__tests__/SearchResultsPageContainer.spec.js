import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import { SearchResultsPageContainer, mapStateToProps, mapDispatchToProps } from '../SearchResultsPageContainer';
import { getMovies, getMoviesBySearch, getMoviesByGenre } from '../../../redux/actions';

jest.mock('../../../redux/actions',() => ({
  getMovies: jest.fn().mockReturnValue([{title: 'Matrix'}]),
  getMoviesBySearch: jest.fn().mockReturnValue([{title: 'Matrix'}]),
  getMoviesByGenre: jest.fn().mockReturnValue([{title: 'Matrix'}]),
}))


describe('SearchResultsPageContainer', () => {
  describe('component', () => {
    test('should render without crashing', () => {
      const renderer = new ShallowRenderer();
      renderer.render(<SearchResultsPageContainer />);
      const result = renderer.getRenderOutput();
      expect(result).toMatchSnapshot();
    });
  });


  describe('mapStateToProps', () => {
    test('should return the right value', () => {

      const initialState = {
        areMoviesLoaded: true,
        results: [{title:"Star Wars", id:15, genre_ids:[28]}],
        genres: [{id: 28, name: 'Action'}],
        currentAPIRequest: 'popular',
      };

      expect(mapStateToProps(initialState).results).toEqual([
        {title:"Star Wars", id:15, genre_ids:[28], genres: 'Action'}
      ]);
      expect(mapStateToProps(initialState).areMoviesLoaded).toEqual(true);
      expect(mapStateToProps(initialState).currentAPIRequest).toEqual('popular');
    });
  });

  describe('mapDispatchToProps', () => {
    afterEach(() => {
      jest.clearAllMocks();
    });

    const dispatch = jest.fn();
    const {onCurrentAPIRequestUpdate} = mapDispatchToProps(dispatch);

    describe('onCurrentAPIRequestUpdate', () => {
      test('should dispatch getMovies action if is call with "popular" API request', () => {
        onCurrentAPIRequestUpdate('popular');
        expect(getMovies).toHaveBeenCalled();
      });

      test('should dispatch getMoviesBySearch action if is call with "search=matrix" API request', () => {
        onCurrentAPIRequestUpdate('search=matrix');
        expect(getMoviesBySearch).toHaveBeenCalled();
      });

      test('should dispatch getMoviesByGenre action if is call with "genre=28" API request', () => {
        onCurrentAPIRequestUpdate('genre=28');
        expect(getMoviesByGenre).toHaveBeenCalled();
      });
    });
  });

});
