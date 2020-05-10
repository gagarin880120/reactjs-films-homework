import React from "react";
import ReactDOM from "react-dom";
import Signature from "../components/Signature/Signature";

jest.mock("react-dom", () => ({ render: jest.fn() }));

describe("Application root", () => {
  it("should render without crashing", () => {
    const div = document.createElement("div");
    div.id = "root";
    document.body.appendChild(div);
    require('../index.jsx');
    expect(ReactDOM.render).toHaveBeenCalledWith(<Signature name="Andrei Mandryk" />, div);
  });
});
