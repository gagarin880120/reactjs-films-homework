import ShallowRenderer from 'react-test-renderer/shallow';
import React from 'react';
import { SearchFieldContainer, mapDispatchToProps } from '../SearchFieldContainer';
import { getResults } from '../../../redux/actions';

jest.mock('../../../redux/actions',() => ({
  getResults: jest.fn().mockReturnValue('getResultsAction'),
}))

const renderComponent = (props = {}) => {
  const renderer = new ShallowRenderer();
  renderer.render(<SearchFieldContainer onSearch={jest.fn()} {...props} />);

  return renderer
}

describe('SearchFieldContainer', () => {
  describe('component', () => {
    test('SearchFieldContainer component should render without crashing', () => {
      const component = renderComponent()

      const result = component.getRenderOutput();

      expect(result).toMatchSnapshot();
    });

  })

  describe('mapDispatchToProps', () => {
    afterEach(() => {
      jest.clearAllMocks();
    })

    test('onSearch should dispatch getResults action', () => {
      const dispatch = jest.fn();
      const {onSearch} = mapDispatchToProps(dispatch);

      onSearch('abc')

      expect(getResults).toHaveBeenCalledWith('abc')
      expect(dispatch).toHaveBeenCalledWith('getResultsAction')
    })

    test('onSearch should not dispatch getResults action if no query', () => {
      const dispatch = jest.fn();
      const {onSearch} = mapDispatchToProps(dispatch);

      onSearch()

      expect(getResults).not.toHaveBeenCalled()
      expect(dispatch).not.toHaveBeenCalled()
    })
  })
})
