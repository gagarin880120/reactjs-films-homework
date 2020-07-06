import ShallowRenderer from 'react-test-renderer/shallow';
import React from 'react';
import { FooterContainer, mapStateToProps, mapDispatchToProps } from '../FooterContainer';
import { getMovies } from '../../../redux/actions';

jest.mock('../../../redux/actions',() => ({
  getMovies: jest.fn().mockReturnValue('getMoviesAction'),
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
        query: 'query',
        areMoviesLoaded: false,
        currentURL: 'url',
        totalPages: 10,
        genres: [{id: 28, name: 'Action'}],
      };

      expect(mapStateToProps(initialState).results).toEqual([{title: 'Matrix', genre_ids: [28], genres: 'Action'}]);
      expect(mapStateToProps(initialState).currentPage).toEqual(1);
      expect(mapStateToProps(initialState).query).toEqual('query');
      expect(mapStateToProps(initialState).areMoviesLoaded).toEqual(false);
      expect(mapStateToProps(initialState).url).toEqual('url');
      expect(mapStateToProps(initialState).totalPages).toEqual(10);
    });
  });

  describe('mapDispatchToProps', () => {
    afterEach(() => {
      jest.clearAllMocks();
    })

    test('onIntersect should dispatch getMovies action', () => {
      const dispatch = jest.fn();
      const {onIntersect} = mapDispatchToProps(dispatch);

      onIntersect();

      expect(getMovies).toHaveBeenCalled();
    });
  });
});
