import "./globals.css"

import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

import "@stackflow/plugin-basic-ui/index.css"

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
      <body className={cn(inter.className, "flex justify-center bg-gray-300")}>
        <Providers>
          <div className={cn("relative min-h-screen w-full max-w-md  overflow-hidden")}>{children}</div>
        </Providers>
      </body>
    </html>
  )
}
