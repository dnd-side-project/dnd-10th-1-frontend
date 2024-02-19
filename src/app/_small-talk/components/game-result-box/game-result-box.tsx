import { PropsWithChildren } from "react"

import { cn } from "@/libs/tailwind/cn"

type Props = {
  backGround: "white" | "dark"
  onReset: () => void
  className: string
}

export default function SmallTalkGameResultBox({
  backGround = "white",
  children,
  className,
}: PropsWithChildren<Partial<Props>>) {
  const backGroundClassName = cn(
    "relative border-2 border-gray-100 h-[288px] rounded-[14px] bg-gray-600",
    {
      "bg-gray-800": backGround === "dark",
    },
    className,
  )
  return <div className={backGroundClassName}>{children}</div>
}
