import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

import NoSleep from "nosleep.js";

jest.spyOn(NoSleep.prototype, "enable").mockImplementation(jest.fn());

beforeEach(() => {
  window.localStorage.clear();
});

test("renders number 0 on load", () => {
  render(<App />);
  const number = screen.getByText(/0/i);
  expect(number).toBeInTheDocument();
});

test("renders number 1 on click the screen", () => {
  render(<App />);
  const number = screen.getByText(/0/i);
  fireEvent.click(number);

  const newNumber = screen.getByText(/1/i);
  expect(newNumber).toBeInTheDocument();
});

test("renders number 3 on click 3 times the screen", () => {
  render(<App />);
  const number = screen.getByText(/0/i);
  fireEvent.click(number);
  fireEvent.click(number);
  fireEvent.click(number);

  const newNumber = screen.getByText(/3/i);
  expect(newNumber).toBeInTheDocument();
});

test("renders number 0 on click reset button", () => {
  render(<App />);
  const number = screen.getByText(/0/i);
  fireEvent.click(number);
  fireEvent.click(number);
  expect(screen.getByText(/2/i)).toBeInTheDocument();

  const resetButton = screen.getByText(/reset/i);
  fireEvent.click(resetButton);
  expect(screen.getByText(/0/i)).toBeInTheDocument();
});
