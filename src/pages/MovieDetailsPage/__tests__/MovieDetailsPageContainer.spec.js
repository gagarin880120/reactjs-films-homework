import React from 'react';
import { MovieDetailsPageContainer, mapStateToProps, mapDispatchToProps } from '../MovieDetailsPageContainer';
import ShallowRenderer from 'react-test-renderer/shallow';
import { setCurrentAPIRequest, getMovies } from '../../../redux/actions';

jest.mock('../../../redux/actions',() => ({
  setCurrentAPIRequest: jest.fn().mockReturnValue('popular'),
  getMovies: jest.fn().mockReturnValue([{title: 'Matrix'}]),
}));

describe('MovieDetailsPageContainer', () => {
  describe('component', () => {
    test('should render without crashing', () => {
      const renderer = new ShallowRenderer();
      renderer.render(<MovieDetailsPageContainer />);
      const result = renderer.getRenderOutput();
      expect(result).toMatchSnapshot();
    });

    test('should render spinner if movie is not loaded', () => {
      const renderer = new ShallowRenderer();
      renderer.render(<MovieDetailsPageContainer isMovieLoaded={true} />);
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
        isMovieLoaded: false,
      };
      expect(mapStateToProps(initialState).results).toEqual([
        {title:"Star Wars", id:15, genre_ids:[28], genres: 'Action'}
      ]);
      expect(mapStateToProps(initialState).isMovieLoaded).toEqual(false);
    });
  });

  describe('mapDispatchToProps', () => {
    afterEach(() => {
      jest.clearAllMocks();
    });

    describe('onPageLoad', () => {
      test('should dispatch setCurrentAPIRequest and getMovies actions', () => {
        const dispatch = jest.fn();
        const {onPageLoad} = mapDispatchToProps(dispatch);

        onPageLoad();

        expect(setCurrentAPIRequest).toHaveBeenCalled();
        expect(getMovies).toHaveBeenCalled();
      });
    });
  });

});
