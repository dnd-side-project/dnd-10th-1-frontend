import * as stylex from "@stylexjs/stylex";
import TempUsers from "./temp-users";

export default async function Home() {
  return (
    <main>
      <TempUsers />
      <button {...stylex.props(styles.button)}>dnd-10-1 fe</button>
    </main>
  );
}

const styles = stylex.create({
  button: {
    background: "teal",
  },
});
