import { Check } from "lucide-react"
import { PropsWithChildren } from "react"

import { cn } from "@/libs/tailwind/cn"

type Props = {
  check: boolean
  className: string
} & React.ButtonHTMLAttributes<HTMLDivElement>
export default function Chip({ children, check = false, className, ...props }: PropsWithChildren<Partial<Props>>) {
  return (
    <div
      {...props}
      className={cn("t3-bold items-center rounded bg-mint-100 px-2 py-[2.5px] text-gray-950", className, {
        "flex gap-[5px]": check,
      })}
    >
      {check ? <Check size={10} strokeWidth="2" /> : null}
      {children}
    </div>
  )
}
