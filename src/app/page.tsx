import Button from "@/components/button"

import TempClient from "./_component/temp-client"
import TempServer from "./_component/temp-server"

export default async function Home() {
  return (
    <main>
      <TempClient />
      <TempServer />
      <Button>dnd-10-1 fe</Button>
    </main>
  )
}
