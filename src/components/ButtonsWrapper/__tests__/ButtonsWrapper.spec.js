import ShallowRenderer from 'react-test-renderer/shallow';
import TestRenderer, { act } from 'react-test-renderer';
import React from 'react';
import ButtonsWrapper from '../ButtonsWrapper';

describe('ButtonsWrapper component', () => {
  test('should render without crashing', () => {
    const renderer = new ShallowRenderer();
    renderer.render(
    <ButtonsWrapper />);
    const result = renderer.getRenderOutput();
    expect(result).toMatchSnapshot();
  });

  describe('infoButton', () => {
    const testRenderer = TestRenderer.create(<ButtonsWrapper />);

    describe('when is clicked', () => {
      test('once, should render overview element', () => {
        const button = testRenderer.root.findByProps({className: 'infoButton'});

        act(() => {
          button.props.onClick();
        });

        const overview = testRenderer.root.findByProps({className: 'overview'});
        expect(overview.props.style.display).toBe('block');
      });

      test('two times, should not render overview element', () => {
        const button = testRenderer.root.findByProps({className: 'infoButton'});

        act(() => {
          button.props.onClick();
          button.props.onClick();
        });

        const overview = testRenderer.root.findByProps({className: 'overview'});
        expect(overview.props.style.display).toBe('none');
      });
    });
  });
});
