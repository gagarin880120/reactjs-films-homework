import ShallowRenderer from 'react-test-renderer/shallow';
import React from 'react';
import { TrailerModalContainer, mapStateToProps, mapDispatchToProps } from '../TrailerModalContainer';
import { setModal } from '../../../redux/actions';

jest.mock('../../../redux/actions',() => ({
  setModal: jest.fn().mockReturnValue(false),
}))

describe('TrailerModalContainer', () => {
  describe('component', () => {
    test('should render without crashing', () => {
      const renderer = new ShallowRenderer();
      renderer.render(<TrailerModalContainer />);
      const result = renderer.getRenderOutput();
      expect(result).toMatchSnapshot();
    });
  })

  describe('mapDispatchToProps', () => {
    afterEach(() => {
      jest.clearAllMocks();
    })

    test('closeModal should dispatch setModal action', () => {
      const dispatch = jest.fn();
      const { closeModal } = mapDispatchToProps(dispatch);

      closeModal();

      expect(setModal).toHaveBeenCalled();
      expect(dispatch).toHaveBeenCalledWith(false);
    })
  })

  describe('mapStateToProps', () => {
    test('should return the right value', () => {
      const initialState = {
        isModalOpen: true,
        trailerURL: 'url'
      };
      expect(mapStateToProps(initialState).isModalOpen).toEqual(true);
    });
  });
})
