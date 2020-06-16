import ShallowRenderer from 'react-test-renderer/shallow';
import React from 'react';
import { MovieCardContainer, mapDispatchToProps } from '../MovieCardContainer';
import { setModal, getTrailer } from '../../../redux/actions';

jest.mock('../../../redux/actions',() => ({
  setModal: jest.fn().mockReturnValue(false),
  getTrailer: jest.fn().mockReturnValue('trailer'),
}))

describe('MovieCardContainer', () => {
  describe('component', () => {
    test('should render without crashing', () => {
      const renderer = new ShallowRenderer();
      renderer.render(<MovieCardContainer />);
      const result = renderer.getRenderOutput();
      expect(result).toMatchSnapshot();
    });
  })

  describe('mapDispatchToProps', () => {
    afterEach(() => {
      jest.clearAllMocks();
    })

    test('onTrailerButtonClick should dispatch setModal action', () => {
      const dispatch = jest.fn();
      const { onTrailerButtonClick } = mapDispatchToProps(dispatch);

      onTrailerButtonClick();

      expect(setModal).toHaveBeenCalled();
      expect(getTrailer).toHaveBeenCalled();
      expect(dispatch).toHaveBeenCalled();
    })
  })
})
