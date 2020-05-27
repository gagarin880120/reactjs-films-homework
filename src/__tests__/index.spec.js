import React from "react";
import ReactDOM from "react-dom";
import App from "../App";
import { Provider } from 'react-redux';
import { store } from '../redux/store';

jest.mock("react-dom", () => ({ render: jest.fn() }));

describe("Application root", () => {
  test("should render without crashing", () => {
    const div = document.createElement("div");
    div.id = "root";
    document.body.appendChild(div);
    require('../index.jsx');
    expect(ReactDOM.render).toHaveBeenCalledWith(<Provider store={store}>
      <App />
    </Provider>, div);
  });
});
