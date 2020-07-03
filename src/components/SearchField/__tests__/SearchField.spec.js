import ShallowRenderer from 'react-test-renderer/shallow';
import React from 'react';
import SearchField from '../SearchField';
import TestRenderer, {act} from 'react-test-renderer';

describe('SearchField component', () => {
  test('should render without crashing', () => {
    const renderer = new ShallowRenderer();
    renderer.render(<SearchField />);
    const result = renderer.getRenderOutput();
    expect(result).toMatchSnapshot();
  });

  test('when input onChange called should change input\'s value', () => {
    const testRenderer = TestRenderer.create(<SearchField />);
    const input = testRenderer.root.findByProps({ type: 'search' });

    act(() => {
      input.props.onChange({ target: { value: 'matrix' } });
    });
    expect(input.props.value).toEqual('matrix');
  });

  describe('onKeyDown', () => {
    test('should call onSearch if keycode === Enter', () => {
      const onSearch = jest.fn();
      const testRenderer = TestRenderer.create(<SearchField onSearch={onSearch} />);
      const input = testRenderer.root.findByProps({ type: 'search' });

      act(() => {
        input.props.onKeyDown({ key: 'Enter', code: 'Enter', which: 13 });
      });

      expect(onSearch).toHaveBeenCalled();
    });

    test('should not call onSearch function if keycode !== Enter', () => {
      const onSearch = jest.fn();
      const testRenderer = TestRenderer.create(<SearchField onSearch={onSearch} />);
      const input = testRenderer.root.findByProps({ type: 'search' });

      act(() => {
        input.props.onKeyDown({ key: 's', code: 'KeyS', which: 83 });
      });

      expect(onSearch).not.toHaveBeenCalled();
    });
  });
});
