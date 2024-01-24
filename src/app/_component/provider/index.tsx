"use client"

import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import React, { PropsWithChildren } from "react"

import mockEnable from "@/libs/msw/mock-enable"

if (process.env.NEXT_PUBLIC_API_MOCKING === "enable") {
  mockEnable()
}

const Providers = ({ children }: PropsWithChildren) => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: { refetchOnWindowFocus: false, retry: false },
    },
  })

  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
}

export default Providers
