import React from 'react';
import { MovieDetailsPageContainer, mapStateToProps } from '../MovieDetailsPageContainer';
import ShallowRenderer from 'react-test-renderer/shallow';
import { setModal, getTrailer } from '../../../redux/actions';

jest.mock('../../../redux/actions',() => ({
  setModal: jest.fn().mockReturnValue(false),
  getTrailer: jest.fn().mockReturnValue('trailer'),
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
        movieDetails: {title: 'Matrix', runtime: 120, vote_average: 8.6, genres: [{name: 'Adventure'}]},
      };
      expect(mapStateToProps(initialState).results).toEqual([
        {title:"Star Wars", id:15, genre_ids:[28], genres: 'Action'}
      ]);
      expect(mapStateToProps(initialState).movie).toEqual({
        genres: 'Adventure',
        runtime: '2h',
        stars: [
          {
            id: 0,
            type: 'full',
          },
          {
            id: 1,
            type: 'full',
          },
          {
            id: 2,
            type: 'full',
          },
          {
            id: 3,
            type: 'full',
          },
          {
            id: 4,
            type: 'half',
          },
        ],
        title: 'Matrix',
        vote_average: 8.6,
      });
    });
  });

});
