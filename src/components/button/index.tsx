import { ButtonHTMLAttributes, PropsWithChildren } from "react"

import { cn } from "@/libs/tailwind/cn"

type Props = {
  rest: ButtonHTMLAttributes<HTMLButtonElement>
  onClick: () => void
}

export default function Button({ rest, children, onClick }: PropsWithChildren<Partial<Props>>) {
  return (
    <button className={cn(`temp-btn start-0 mt-2 h-10 p-10`)} onClick={onClick} {...rest}>
      {children}
    </button>
  )
}
