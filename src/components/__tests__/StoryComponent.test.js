import React from "react";
import { shallow } from "enzyme";
import StoryComponent from "../StoryComponent";

const mockstory = [
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

describe("<StoryComponent />", () => {
  test("renders", () => {
    const component = shallow(<StoryComponent stories={mockstory} />);
    expect(component).toMatchSnapshot();
  });

  test("return the default array when there is no data to map through", () => {
    const component = shallow(<StoryComponent />);
    expect(component).toMatchSnapshot();
  });

  test("does not break without value", () => {
    const component = shallow(<StoryComponent />);
    expect(component.find("h6")).toHaveLength(0);
    expect(component.find("p")).toHaveLength(0);
    expect(component.find("small")).toHaveLength(0);
  });

  test("does not break with an empty array", () => {
    const component = shallow(<StoryComponent stories={[]} />);
    expect(component.find("h6")).toHaveLength(0);
    expect(component.find("p")).toHaveLength(0);
    expect(component.find("small")).toHaveLength(0);
  });
});
