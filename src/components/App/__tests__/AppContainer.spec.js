import ShallowRenderer from 'react-test-renderer/shallow';
import React from 'react';
import { AppContainer, mapStateToProps, mapDispatchToProps } from '../AppContainer';
import { getGenres, getMovies } from '../../../redux/actions';

jest.mock('../../../redux/actions',() => ({
  getGenres: jest.fn().mockReturnValue('getGenresAction'),
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
        genres: [{id: 28, name: 'Action'}]
      };

      expect(mapStateToProps(initialState).genres).toEqual([{id: 28, name: 'Action'}]);
    });
  });

  describe('mapDispatchToProps', () => {
    afterEach(() => {
      jest.clearAllMocks();
    })

    test('onAppLoad should dispatch getGenres actions', () => {
      const dispatch = jest.fn();
      const {onAppLoad} = mapDispatchToProps(dispatch);

      onAppLoad();

      expect(getGenres).toHaveBeenCalled();
      expect(getMovies).toHaveBeenCalled();
    })
  })

});
