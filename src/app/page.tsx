import { Button } from "@/components/button"
import Splash from "@/components/splash"
import { cn } from "@/libs/tailwind/cn"

export default async function Home() {
  return (
    <main>
      <Splash />
      <Button className={cn("t2 bg-primary-3-200")}>dnd-10-1 fe</Button>
    </main>
  )
}
