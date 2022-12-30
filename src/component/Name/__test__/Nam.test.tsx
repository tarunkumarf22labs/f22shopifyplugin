import { render, fireEvent, screen, waitFor } from "@testing-library/preact";
import { beforeEach, describe, expect, test } from "vitest";
import Name from "../Nameinput";

test("should first", () => {
  let val = {
    firstName: "",
    lastName: "",
    age: "",
    street: "",
    city: "",
    state: "",
    zip: "",
    email: "",
    password: "",
    radioval: "",
    checkbox: [],
  };

  render(<Name value={val} handleChange={() => {}} />);
  const name = screen.getByPlaceholderText("Enter your name");
  expect(name).toBeInTheDocument();
  console.log(name);
});
