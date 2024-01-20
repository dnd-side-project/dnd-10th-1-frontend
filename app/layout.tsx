import type { Metadata } from "next";
import * as stylex from "@stylexjs/stylex";
import "./globals.css";

export const metadata: Metadata = {
  title: "dnd 10th-1 fe",
  description: "dnd 10th-1 fe",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html {...stylex.props(styles.reset)} lang="ko">
      <body>{children}</body>
    </html>
  );
}

const styles = stylex.create({
  reset: {
    minHeight: "100%",
    margin: 0,
    padding: 0,
  },
});
