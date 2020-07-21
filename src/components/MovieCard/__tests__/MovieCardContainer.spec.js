import ShallowRenderer from 'react-test-renderer/shallow';
import React from 'react';
import { MovieCardContainer, mapStateToProps, mapDispatchToProps } from '../MovieCardContainer';
import { setModal, getTrailer, getMovieDetails } from '../../../redux/actions';

jest.mock('../../../redux/actions',() => ({
  setModal: jest.fn().mockReturnValue(false),
  getTrailer: jest.fn().mockReturnValue('trailer'),
  getMovieDetails: jest.fn().mockReturnValue('details'),
}))

describe('MovieCardContainer', () => {
  describe('component', () => {
    test('should render without crashing', () => {
      const renderer = new ShallowRenderer();
      renderer.render(<MovieCardContainer />);
      const result = renderer.getRenderOutput();
      expect(result).toMatchSnapshot();
    });

    test('should render other elements, depends on props', () => {
      const renderer = new ShallowRenderer();
      renderer.render(<MovieCardContainer viewMode="gallery"/>);
      const result = renderer.getRenderOutput();
      expect(result).toMatchSnapshot();
    });
  })

  describe('mapStateToProps', () => {
    test('should return the right value', () => {

      const initialState = {
        viewMode: false,
      };

      expect(mapStateToProps(initialState).viewMode).toEqual(false);
    });
  });

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
    });

    test('onLinkClick should dispatch getMovieDetails action', () => {
      const dispatch = jest.fn();
      const { onLinkClick } = mapDispatchToProps(dispatch);

      onLinkClick();

      expect(getMovieDetails).toHaveBeenCalled();
      expect(dispatch).toHaveBeenCalled();
    })
  })
})
