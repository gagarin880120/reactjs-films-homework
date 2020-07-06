import ShallowRenderer from 'react-test-renderer/shallow';
import React from 'react';
import { SearchFieldContainer, mapDispatchToProps } from '../SearchFieldContainer';
import { getMovies } from '../../../redux/actions';

jest.mock('../../../redux/actions',() => ({
  getMovies: jest.fn().mockReturnValue('getMoviesAction'),
}))

const renderComponent = (props = {}) => {
  const renderer = new ShallowRenderer();
  renderer.render(<SearchFieldContainer onSearch={jest.fn()} {...props} />);

  return renderer
}

describe('SearchFieldContainer', () => {
  describe('component', () => {
    test('should render without crashing', () => {
      const component = renderComponent();

      const result = component.getRenderOutput();

      expect(result).toMatchSnapshot();
    });

  })

  describe('mapDispatchToProps', () => {
    afterEach(() => {
      jest.clearAllMocks();
    })

    test('onSearch should dispatch getMovies actions', () => {
      const dispatch = jest.fn();
      const {onSearch} = mapDispatchToProps(dispatch);

      onSearch('abc');

      expect(getMovies).toHaveBeenCalled();
    })

    test('onSearch should not dispatch getMovies action if no query', () => {
      const dispatch = jest.fn();
      const {onSearch} = mapDispatchToProps(dispatch);

      onSearch()

      expect(getMovies).not.toHaveBeenCalled()
    })
  })
})
