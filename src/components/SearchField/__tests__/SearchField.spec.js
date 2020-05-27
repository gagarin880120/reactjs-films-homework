import ShallowRenderer from 'react-test-renderer/shallow';
import React from 'react';
import SearchField from '../SearchField';
import {render, fireEvent} from '@testing-library/react';

describe('SearchField component', () => {
  test('should render without crashing', () => {
    const renderer = new ShallowRenderer();
    renderer.render(<SearchField />);
    const result = renderer.getRenderOutput();
    expect(result).toMatchSnapshot();
  });

  test('when input onChange called should change input\'s value', () => {
    const { getByPlaceholderText } = render(<SearchField />);
    const input = getByPlaceholderText('🔍');

    fireEvent.change(input, { target: { value: 'matrix' } });

    expect(input.value).toEqual('matrix');
  });

  describe('onKeyDown', () => {
    test('should call onSearch if keycode === Enter', () => {
      const onSearch = jest.fn();

      const { getByPlaceholderText } = render(<SearchField onSearch={onSearch} />);
      const input = getByPlaceholderText('🔍');
      fireEvent.change(input, { target: { value: 'matrix' } });
      fireEvent.keyDown(input, { key: 'Enter', code: 'Enter' });

      expect(onSearch).toHaveBeenCalledWith('matrix');
    });

    test('should not call onSearch function if keycode !== Enter', () => {
      const onSearch = jest.fn();

      const { getByPlaceholderText } = render(<SearchField onSearch={onSearch} />);
      const input = getByPlaceholderText('🔍');
      fireEvent.change(input, { target: { value: 'matrix' } });
      fireEvent.keyDown(input, { key: 's', code: 'KeyS' });

      expect(onSearch).not.toHaveBeenCalled();
    });
  });
});
