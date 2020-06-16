import ShallowRenderer from 'react-test-renderer/shallow';
import TestRenderer, { act } from 'react-test-renderer';
import React from 'react';
import TrailerButtonRound from '../TrailerButtonRound';

describe('TrailerButtonRound component', () => {
  test('should render without crashing', () => {
    const renderer = new ShallowRenderer();
    renderer.render(<TrailerButtonRound />);
    const result = renderer.getRenderOutput();
    expect(result).toMatchSnapshot();
  });

  test('should call onTrailerButtonClick on click', () => {
    const onTrailerButtonClick = jest.fn();
    const testRenderer = TestRenderer.create(<TrailerButtonRound onTrailerButtonClick={onTrailerButtonClick} />);
    const button = testRenderer.root.findByProps({testid: 'trailerButtonRound'});
    act(() => {
      button.props.onClick();
    });

    expect(onTrailerButtonClick).toHaveBeenCalled();
  });
});
