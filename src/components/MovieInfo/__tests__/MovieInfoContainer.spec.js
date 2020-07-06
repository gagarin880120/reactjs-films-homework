import ShallowRenderer from 'react-test-renderer/shallow';
import React from 'react';
import { MovieInfoContainer, mapStateToProps } from '../MovieInfoContainer';

describe('MovieInfoContainer', () => {
  describe('component', () => {
    test('should render without crashing', () => {
      const renderer = new ShallowRenderer();
      renderer.render(<MovieInfoContainer />);
      const result = renderer.getRenderOutput();
      expect(result).toMatchSnapshot();
    });
  })

  describe('mapStateToProps', () => {
    test('should return the right value', () => {

      const initialState = {
        movieDetails: {title: 'Matrix', runtime: 120, vote_average: 8.6, genres: [{name: 'Adventure'}]},
      };

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
  })
})
