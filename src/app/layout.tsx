import "./globals.css"

import { Inter } from "next/font/google"

import Providers from "./_component/provider"

const inter = Inter({ subsets: ["latin"] })

import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "dnd 10th-1 fe",
  description: "dnd 10th-1 fe",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
