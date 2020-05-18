import ShallowRenderer from 'react-test-renderer/shallow';
import React from 'react';
import SearchFieldContainer from '../index';
import SearchField from '../SearchField';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import TestRenderer from 'react-test-renderer';
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

const mockStore = configureStore();
const store = mockStore({});

test('SearchFieldContainer component should render without crashing', () => {
  const renderer = new ShallowRenderer();

  renderer.render(<Provider store={store}><SearchFieldContainer /></Provider>);
  const result = renderer.getRenderOutput();
  expect(result).toMatchSnapshot();
});



it("testing onChangeHandler", () => {
  const testRenderer = TestRenderer.create(<Provider store={store}><SearchFieldContainer /></Provider>);
  const testInstance = testRenderer.root;
  const onChangeHandler = testInstance.findByType(SearchField).props.onChangeHandler;
  
});
