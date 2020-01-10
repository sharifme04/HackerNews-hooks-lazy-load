import React from "react";
import { unmountComponentAtNode } from "react-dom";
import { shallow } from "enzyme";
import App from "./App";

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
const fakeStory = [
  {
    by: "jger15",
    descendants: 15,
    id: 22000126,
    kids: [
      22001188,
      22001236,
      22001202,
      22001107,
      22001179,
      22001091,
      22001154,
      22001106
    ],
    score: 38,
    time: 1578567242,
    title: "Work on these things",
    type: "story",
    url:
      "https://marginalrevolution.com/marginalrevolution/2019/12/work-on-these-things.html"
  },
  {
    by: "awwstn",
    descendants: 30,
    id: 22012831,
    kids: [
      22013151,
      22013052,
      22013186,
      22013149,
      22013020,
      22013011,
      22013299,
      22013028,
      22013270,
      22013182
    ],
    score: 51,
    time: 1578677960,
    title: "Postman is now charging 50% more for ~5x less",
    type: "story",
    url: "https://capiche.com/q/what-has-changed-in-postmans-new-pricing"
  }
];

describe("<App />", () => {
  it("renders story data", async () => {
    jest.spyOn(global, "fetch").mockImplementation(() =>
      Promise.resolve({
        json: () => Promise.resolve(fakeStory)
      })
    );

    global.fetch.mockRestore();
  });

  test("should render initial layout", () => {
    const component = shallow(<App />);
    expect(component.exists()).toBe(true);
  });
});
