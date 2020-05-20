import ShallowRenderer from 'react-test-renderer/shallow';
import React from 'react';
import SearchFieldContainer from '../';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

const mockStore = configureStore();
const store = mockStore({});

test('SearchFieldContainer component should render without crashing', () => {
  const renderer = new ShallowRenderer();
  renderer.render(<Provider store={store}><SearchFieldContainer /></Provider>);
  const result = renderer.getRenderOutput();
  expect(result).toMatchSnapshot();
});
