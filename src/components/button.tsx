import * as stylex from "@stylexjs/stylex"

export default function Button() {
  return <button {...stylex.props(styles.button)}>storybook test</button>
}

const styles = stylex.create({
  button: {
    background: "red",
  },
})
