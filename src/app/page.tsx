import { Button } from "@/components/button"

import TempClient from "./_component/temp-client"

export const dynamic = "force-dynamic"

export default async function Home() {
  return (
    <main>
      <TempClient />
      <Button>dnd-10-1 fe</Button>
    </main>
  )
}
