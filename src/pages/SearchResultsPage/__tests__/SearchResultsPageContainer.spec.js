import React from 'react';
import { SearchResultsPageContainer, mapStateToProps } from '../SearchResultsPageContainer';
import ShallowRenderer from 'react-test-renderer/shallow';

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
      };

      expect(mapStateToProps(initialState).results).toEqual([
        {title:"Star Wars", id:15, genre_ids:[28], genres: 'Action'}
      ]);
      expect(mapStateToProps(initialState).areMoviesLoaded).toEqual(true);
    });
  });

});
