import ShallowRenderer from 'react-test-renderer/shallow';
import React from 'react';
import { MovieListNavBarContainer, mapStateToProps, mapDispatchToProps } from '../MovieListNavBarContainer';
import { setCurrentAPIRequest, setViewMode } from '../../../redux/actions';

jest.mock('../../../redux/actions',() => ({
  setCurrentAPIRequest: jest.fn().mockReturnValue('popular'),
  setViewMode: jest.fn().mockReturnValue('list')
}))

describe('MovieListNavBarContainer', () => {
  describe('component', () => {
    test('should render without crashing', () => {
      const renderer = new ShallowRenderer();
      renderer.render(<MovieListNavBarContainer />);
      const result = renderer.getRenderOutput();
      expect(result).toMatchSnapshot();
    });
  })

  describe('mapStateToProps', () => {
    test('should return the right value', () => {

      const initialState = {
        genres: [{id: 28, name: 'Action'}],
        viewMode: 'list',
        currentAPIRequest: 'popular',
      };

      expect(mapStateToProps(initialState).genres).toEqual([{id: 28, name: 'Action'}]);
      expect(mapStateToProps(initialState).viewMode).toEqual('list');
      expect(mapStateToProps(initialState).currentAPIRequest).toEqual('popular');
    });
  });

  describe('mapDispatchToProps', () => {
    afterEach(() => {
      jest.clearAllMocks();
    })

    test('onTrending should dispatch setCurrentAPIRequest actions', () => {
      const dispatch = jest.fn();
      const {onTrending} = mapDispatchToProps(dispatch);

      onTrending();

      expect(setCurrentAPIRequest).toHaveBeenCalled();
    });

    test('onTopRated should dispatch setCurrentAPIRequest actions', () => {
      const dispatch = jest.fn();
      const {onTopRated} = mapDispatchToProps(dispatch);

      onTopRated();

      expect(setCurrentAPIRequest).toHaveBeenCalled();
    });

    test('onUpcoming should dispatch setCurrentAPIRequest actions', () => {
      const dispatch = jest.fn();
      const {onUpcoming} = mapDispatchToProps(dispatch);

      onUpcoming();

      expect(setCurrentAPIRequest).toHaveBeenCalled();
    });

    test('onGenreChange should dispatch setCurrentAPIRequest actions', () => {
      const dispatch = jest.fn();
      const {onGenreChange} = mapDispatchToProps(dispatch);

      onGenreChange();

      expect(setCurrentAPIRequest).toHaveBeenCalled();
    });

    test('switchViewMode should dispatch setViewMode actions', () => {
      const dispatch = jest.fn();
      const {switchViewMode} = mapDispatchToProps(dispatch);

      switchViewMode();

      expect(setViewMode).toHaveBeenCalled();
    });
  });
});
