import { expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import Button from "./button";

it("storybook test 버튼이 화면에 존재합니다.", () => {
  render(<Button />);

  expect(screen.getByText("storybook test")).toBeDefined();
});
