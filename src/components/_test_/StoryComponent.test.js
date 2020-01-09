import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import StoryComponent from "../StoryComponent";

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

describe("<StoryComponent />", () => {
  //const onChange = jest.fn();
  it("renders with stories", () => {
    act(() => {
      render(<StoryComponent />, container);
    });
    expect(container.textContent).toBe("");

    //expect(container.querySelector(`.card-title`).textContent).toBe(fakeStory.title);

//     expect(
//   container.querySelector(".card-title']").getAttribute("href")
// ).toEqual("mailto:test@example.com");
  });
});
