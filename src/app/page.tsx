import { Button } from "@/components/button"
import { cn } from "@/libs/tailwind/cn"

import TempClient from "./_component/temp-client"

export const dynamic = "force-dynamic"

export default async function Home() {
  return (
    <main>
      <TempClient />
      <Button className={cn("t2 bg-primary-3-200")}>dnd-10-1 fe</Button>
    </main>
  )
}
