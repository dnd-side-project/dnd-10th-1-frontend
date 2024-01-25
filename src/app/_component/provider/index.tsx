"use client"

import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import React, { PropsWithChildren, useEffect, useState } from "react"

// if (process.env.NEXT_PUBLIC_API_MOCKING === "enable") {
//   mockEnable()
// }

const Providers = ({ children }: PropsWithChildren) => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: { refetchOnWindowFocus: false, retry: false },
    },
  })

  const [mockingEnabled, enableMocking] = useState(false)

  useEffect(() => {
    async function enableApiMocking() {
      /**
       * @fixme Next puts this import to the top of
       * this module and runs it during the build
       * in Node.js. This makes "msw/browser" import to fail.
       */
      const { clientWorker } = await import("../../../__mock__/handler/client/index")
      await clientWorker.start({ onUnhandledRequest: "bypass" })
      enableMocking(true)
    }

    enableApiMocking()
  }, [])

  if (!mockingEnabled) {
    return null
  }

  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
}

export default Providers
