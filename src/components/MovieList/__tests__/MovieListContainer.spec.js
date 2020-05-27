import ShallowRenderer from 'react-test-renderer/shallow';
import {create, act} from 'react-test-renderer';
import React from 'react';
import { mapStateToProps, mapDispatchToProps, MovieListContainer } from '../MovieListContainer';
import { getGenres } from '../../../redux/actions';
import configureMockStore from 'redux-mock-store';
// import { searchResultsSelector, genresSelector } from '../../../redux/selectors';

jest.mock('../../../redux/actions',() => ({
  getGenres: jest.fn().mockReturnValue('getGenresAction'),
}));

const renderComponent = (props = {}) => {
  const renderer = new ShallowRenderer();
  renderer.render(<MovieListContainer onGetGenres={jest.fn()} {...props} />);

  return renderer;
};

describe('MovieListContainer', () => {
  describe('component', () => {
    test('should render without crashing', () => {
      const component = renderComponent();

      const result = component.getRenderOutput();
      expect(result).toMatchSnapshot();
    });
    test('When component is create, should call onGetGenres function', () => {
      const onGetGenres = jest.fn();
      let root;
      act(() => {
        root = create(
        <MovieListContainer
          onGetGenres={onGetGenres}
          genres={[{id: 28, name: 'Adventure'}]}
          results={[{title:"Star Wars", genre_ids:[28]}]} />
        )
      });
      expect(onGetGenres).toHaveBeenCalled();
    });
  });

  describe('mapStateToProps', () => {
    test('should return the right value', () => {
      const initialState = {
        genres: 'genresArray',
      };
      expect(mapStateToProps(initialState).genres).toEqual('genresArray');
    });
  });

  describe('mapDispatchToProps', () => {
    afterEach(() => {
      jest.clearAllMocks();
    })

    test('onGetGenres should dispatch getGenres action', () => {
      const dispatch = jest.fn();
      const {onGetGenres} = mapDispatchToProps(dispatch);

      onGetGenres();

      expect(getGenres).toHaveBeenCalled()
      expect(dispatch).toHaveBeenCalledWith('getGenresAction')
    })
  })
})
