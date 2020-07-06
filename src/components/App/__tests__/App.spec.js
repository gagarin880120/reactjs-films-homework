import ShallowRenderer from 'react-test-renderer/shallow';
import React from 'react';
import App from '../App';
import { create, act } from 'react-test-renderer';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

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

    const store = mockStore({});

    act(() => {
      root = create(
        <Provider store={store}>
          <App onAppLoad={onAppLoad} genres={null} />
        </Provider>
      )
    });

    expect(onAppLoad).toHaveBeenCalled();
  });

  test('should not call onAppLoad when is mounted and are genres', () => {
    let root;
    const onAppLoad = jest.fn();

    const store = mockStore({
      genres: [{name: 'Adventure', id: 28}],
      results: [],
    });

    act(() => {
      root = create(
        <Provider store={store} >
          <App onAppLoad={onAppLoad} genres={[{name: 'Adventure', id: 28}]} />
        </Provider>
      )
    });
    expect(onAppLoad).not.toHaveBeenCalled();
  });
});
