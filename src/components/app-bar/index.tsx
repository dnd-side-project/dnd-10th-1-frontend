import { ArrowLeft } from "lucide-react"

type Props = {
  title: string
  isBackButton?: boolean
  onBackClick?: () => void
}

export default function AppBar({ title, isBackButton = false, onBackClick = () => {} }: Props) {
  return (
    <section className="relative h-[66px] p-[28px]">
      {isBackButton && <ArrowLeft onClick={onBackClick} className="absolute" stroke="#98A2B3" />}
      <span className="block text-center text-[14px] font-bold text-gray-400">{title}</span>
    </section>
  )
}
