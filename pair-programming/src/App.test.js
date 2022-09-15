import { render, screen } from "@testing-library/react";
import React from 'react';

import App from "./App";
import Form from "./components/form";
import Header from "./components/header";

// First Test - Fix it to Pass
describe("App", () => {
  test("renders App component", () => {
    render(<App />);
  });
});

// Can you fix the project so we pass this test?  Hint: Don't only change this test!
describe("Header", () => {
  test("renders my header component", () => {
    render(<Header />);
  });
});

//Third Test - Fix it to Pass
describe("Form", () => {
  test("render the Form component", () => {
    render(<Form />);
  });
});

// Can you fix the test so we pass it?  Hint: Change this test!
test("renders Techtonica title", () => {
  render(<Header />);
  //const titleElement = screen.getByText("Hola");
  //expect();
});

// Can you fix the project so we pass this test?  Hint: Don't only change this test!
test("renders add Button", () => {
  render(<Form />);
  screen.getByRole("button", {
    name: /add/
  });
});

// Resources: https://www.robinwieruch.de/react-testing-library/
