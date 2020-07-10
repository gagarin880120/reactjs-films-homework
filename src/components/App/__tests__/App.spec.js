import ShallowRenderer from 'react-test-renderer/shallow';
import React from 'react';
import App from '../App';
import { create, act } from 'react-test-renderer';
import { useLocation } from 'react-router-dom';

jest.mock('react-router-dom', () => ({
  useLocation: jest.fn().mockReturnValue({pathname: '/popular'}),
  Switch: () => null,
  Route: () => null,
  Redirect: jest.fn(),
}));

describe('App component', () => {
  test('should render without crashing', () => {
    const renderer = new ShallowRenderer();
    renderer.render(<App />);
    const result = renderer.getRenderOutput();
    expect(result).toMatchSnapshot();
  });

  test('should call onAppLoad when is mounted and are not genres', () => {
    let root;
    const onAppLoad = jest.fn();
    const onReload = jest.fn();

    act(() => {
      root = create(
        <App onAppLoad={onAppLoad} onReload={onReload} genres={null} />
      )
    });

    expect(onAppLoad).toHaveBeenCalled();
    expect(onReload).toHaveBeenCalled();
  });

  test('should not call onAppLoad when is mounted and are genres', () => {
    const onAppLoad = jest.fn();
    const onReload = jest.fn();
    useLocation.mockReturnValue({pathname: '/'});
    let root;

    act(() => {
      root = create(
        <App onAppLoad={onAppLoad} onReload={onReload} genres={[{name: 'Adventure', id: 28}]} />
      )
    });

    expect(onAppLoad).not.toHaveBeenCalled();
    expect(onReload).not.toHaveBeenCalled();
  });
});
