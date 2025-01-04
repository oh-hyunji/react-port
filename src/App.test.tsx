import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  const { getByText } = render(<App />); // render의 반환값에서 getByText를 구조 분해
  const linkElement = getByText(/learn react/i); // getByText로 요소를 찾음
  expect(linkElement).toBeInTheDocument();
});
