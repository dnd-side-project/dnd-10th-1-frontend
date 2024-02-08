import "./globals.css"

import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

import type { Metadata } from "next"

import Providers from "@/components/provider"
import { cn } from "@/libs/tailwind/cn"

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
      <body className={cn(inter.className, "bg-gray-100")}>
        <Providers>
          <div className={cn("relative mx-auto min-h-screen max-w-md bg-white")}>{children}</div>
        </Providers>
      </body>
    </html>
  )
}
