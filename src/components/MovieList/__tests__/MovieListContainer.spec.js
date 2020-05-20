import ShallowRenderer from 'react-test-renderer/shallow';
import React from 'react';
import MovieListContainer from '../MovieListContainer';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

test('MovieListContainer component should render without crashing', () => {
  const mockStore = configureStore();
  const store = mockStore({});
  const renderer = new ShallowRenderer();
  renderer.render(<Provider store={store}><MovieListContainer /></Provider>);
  const result = renderer.getRenderOutput();
  expect(result).toMatchSnapshot();
});
