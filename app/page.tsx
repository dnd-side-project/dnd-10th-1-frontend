import * as stylex from "@stylexjs/stylex";

export default function Home() {
  return (
    <main>
      <button {...stylex.props(styles.button)}>dnd-10-1 fe</button>
    </main>
  );
}

const styles = stylex.create({
  button: {
    background: "teal",
  },
});
