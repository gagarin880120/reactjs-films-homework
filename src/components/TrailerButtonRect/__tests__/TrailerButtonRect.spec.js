import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import TestRenderer, { act } from 'react-test-renderer';
import TrailerButtonRect from '../TrailerButtonRect';

describe('TrailerButtonRect component', () => {
  test('should render without crashing', () => {
    const renderer = new ShallowRenderer();
    renderer.render(<TrailerButtonRect />);
    const result = renderer.getRenderOutput();
    expect(result).toMatchSnapshot();
  });

  test('should call onTrailerButtonClick on click', () => {
    const onTrailerButtonClick = jest.fn();
    const testRenderer = TestRenderer.create(<TrailerButtonRect onTrailerButtonClick={onTrailerButtonClick} />);
    const button = testRenderer.root.findByType('button');
    act(() => {
      button.props.onClick();
    });

    expect(onTrailerButtonClick).toHaveBeenCalled();
  });
});
