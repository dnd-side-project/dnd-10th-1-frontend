import { ArrowLeft } from "lucide-react"

type Props = {}

export default function WaitingScreen(_: Props) {
  return (
    <div className="relative h-full w-full bg-gray-950">
      <header className="relative p-[28px]">
        <ArrowLeft className="absolute" stroke="#98A2B3" />
        <span className="block text-center text-[14px] font-bold text-gray-400">대기방</span>
      </header>
    </div>
  )
}
