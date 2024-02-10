import { ArrowRightSquare, PlusSquare } from "lucide-react"
import { PropsWithChildren } from "react"

import { cn } from "@/libs/tailwind/cn"

type Props = {
  control: "create" | "invite"
  inLine: string
  centerLine: string
  outLine: string
  className?: string
} & React.ButtonHTMLAttributes<HTMLButtonElement>
export default function MainButton({ control, children, className, ...props }: PropsWithChildren<Props>) {
  const ButtonComponents = (() => {
    if (control === "create") {
      const svg = <ArrowRightSquare size={28} />
      const title = "방 만들기"
      return { svg, title }
    }

    if (control === "invite") {
      const svg = <PlusSquare size={26} />
      const title = "초대 코드 입력하기"
      return { svg, title }
    }
  })()

  const buttonClassName = cn(
    "border-4 p-6 rounded-[18px] w-full",
    { "shadow-blue text-[22px] bold bg-pink-300 border-primary-300": control === "create" },
    { "py-[14px] t1 shadow-blue bg-primary-300 border-pink-300": control === "invite" },
    className,
  )

  const iconClassName = cn(
    "text-white flex items-center",
    { "h2 gap-3": control === "create" },
    { "t1 gap-5": control === "invite" },
  )

  return (
    <button {...props} className={buttonClassName}>
      <div className={iconClassName}>
        {ButtonComponents?.svg} {ButtonComponents?.title}
      </div>
      {children}
    </button>
  )
}
