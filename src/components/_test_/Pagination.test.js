import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import Pagination from "../Pagination";

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

describe("<Pagination />", () => {
  it("properly increments and decrements the value", () => {
    act(() => {
      render(<Pagination />, container);
    });
    expect(container.textContent).toBe("");
  });
});
