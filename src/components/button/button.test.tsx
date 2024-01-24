import { render, screen } from "@testing-library/react"
import { expect, it } from "vitest"

import Button from "."

it("storybook test 버튼이 화면에 존재합니다.", () => {
  render(<Button>storybook test</Button>)

  expect(screen.getByText("storybook test")).toBeDefined()
})
