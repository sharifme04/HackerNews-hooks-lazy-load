import React from 'react';
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
//import { render, unmountComponentAtNode  } from '@testing-library/react';
import App from './App';

// describe('renders learn react link', () => {
//   const { getByText } = render(<App />);
//   const storiesPerPage = getByText("28");
//   expect(storiesPerPage).toBeInTheDocument();
// });

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
it("renders story data", async () => {
  const fakeStory = {
    by: "jger15",
    descendants: 15,
    id: 22000126,
    kids:[22001188, 22001236, 22001202, 22001107, 22001179, 22001091, 22001154, 22001106],
    score: 38,
    time: 1578567242,
    title: "Work on these things",
    type: "story",
    url: "https://marginalrevolution.com/marginalrevolution/2019/12/work-on-these-things.html"
  };

  jest.spyOn(global, "fetch").mockImplementation(() =>
    Promise.resolve({
      json: () => Promise.resolve(fakeStory)
    })
  );

  // Use the asynchronous version of act to apply resolved promises
  await act(async () => {
    render(<App id="22000126" />, container);
  });

  // expect(container.querySelector("summary").textContent).toBe(fakeStory.name);
  // expect(container.querySelector("strong").textContent).toBe(fakeStory.age);
  // expect(container.textContent).toContain(fakeStory.address);

  // remove the mock to ensure tests are completely isolated
  global.fetch.mockRestore();
});

// describe("<App />", () => {
//   it("properly data fetch", () => {
//     const { getByText } = render(<App />);
//     const storiesPerPage = getByText("0");
//     expect(storiesPerPage.textContent).toEqual("28");
//   });
// });
