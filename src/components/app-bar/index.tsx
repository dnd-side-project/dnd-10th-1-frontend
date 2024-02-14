import { ArrowLeft } from "lucide-react"

type Props = {
  title: string
  isBackButton: boolean
  callback?: () => void
}

export default function AppBar({ title, isBackButton, callback }: Props) {
  const onClick = () => {
    if (typeof callback !== "undefined") {
      callback()
    }
  }
  return (
    <section className="relative p-[28px]">
      {isBackButton && <ArrowLeft onClick={onClick} className="absolute" stroke="#98A2B3" />}
      <span className="block text-center text-[14px] font-bold text-gray-400">{title}</span>
    </section>
  )
}
