"use client"

import * as stylex from "@stylexjs/stylex"
import { ButtonHTMLAttributes, PropsWithChildren } from "react"

import { styles } from "./button.styles"

type PropsType = {
  rest: ButtonHTMLAttributes<HTMLButtonElement>
  onClick: () => void
}

export default function Button({ rest, children, onClick }: PropsWithChildren<Partial<PropsType>>) {
  return (
    <button onClick={onClick} {...rest} {...stylex.props(styles.button)}>
      {children}
    </button>
  )
}
