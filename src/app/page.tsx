import { Button } from "@/components/button"
import { cn } from "@/libs/tailwind/cn"

import TempClient from "./_component/temp-client"

export const dynamic = "force-dynamic"

export default async function Home() {
  return (
    <main>
      <TempClient />
      <Button className={cn("bg-gray-4-600 text-t2 text-sementic-2-warning")}>dnd-10-1 fe</Button>
    </main>
  )
}
