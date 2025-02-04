import {render, screen} from "@testing-library/react";
import Greeting from "./Greeting";
import userEvent from "@testing-library/user-event";

describe("Greeting component", () => {
  test("renders Hello World as a text", () => {
    render(<Greeting/>);
    const helloWorldElement = screen.getByText("Hello World!");
    expect(helloWorldElement).toBeInTheDocument();
  });
  test("renders good to see you if the button was NOT clicked", () => {
    render(<Greeting/>);
    const outputElement = screen.getByText("It's good to see you!");
    expect(outputElement).toBeInTheDocument();
  });
  test("renders changed if the button was clicked", () => {
    render(<Greeting/>);
    const buttonElement = screen.getByRole('button');
    userEvent.click(buttonElement);
    const outputElement = screen.getByText('Changed!');
    expect(outputElement).toBeInTheDocument();
  });
  test("renders good to see you hidden if the button was clicked", () => {
    render(<Greeting/>);
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);
    const outputElement = screen.queryByText("It's good to see you!");
    expect(outputElement).toBeNull()
  })
})
