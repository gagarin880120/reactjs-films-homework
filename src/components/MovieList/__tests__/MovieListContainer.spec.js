import ShallowRenderer from 'react-test-renderer/shallow';
import React from 'react';
import { mapDispatchToProps, mapStateToProps, MovieListContainer } from '../MovieListContainer';
import { getGenres } from '../../../redux/actions';

jest.mock('../../../redux/actions',() => ({
  getGenres: jest.fn().mockReturnValue('getGenresAction'),
}))

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

    describe('mapStateToProps', () => {
      test('should return the right value', () => {
        const initialState = {
          results: [{title:"Star Wars", id:15, genre_ids:[28]}],
          genres: [{id: 28, name: 'Action'}]
        };
        expect(mapStateToProps(initialState).results).toEqual([{title:"Star Wars", id:15, genre_ids:[28], genres: 'Action'}]);
      });
    });
  })
})

