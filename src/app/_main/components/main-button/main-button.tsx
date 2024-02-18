import { motion } from "framer-motion"
import { PlusSquare } from "lucide-react"
import Image from "next/image"
import { ComponentPropsWithoutRef, PropsWithChildren } from "react"

import MainCreate from "@/assets/svgs/main/main-create.svg"
import { cn } from "@/libs/tailwind/cn"

type Props = {
  control: "create" | "invite"
  className?: string
} & ComponentPropsWithoutRef<"button">

export default function MainButton({ control, children, className, ...props }: PropsWithChildren<Props>) {
  const ButtonComponents = (() => {
    if (control === "create") {
      const svg = <Image src={MainCreate} alt="열림버튼" />
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
    "text-white flex items-center leading-none",
    { "text-[20px] font-bold gap-3": control === "create" },
    { "h4-bold gap-5": control === "invite" },
  )

  return (
    <button {...props}>
      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.95 }} className={buttonClassName}>
        <div className={iconClassName}>
          {ButtonComponents?.svg} <span className="leading-none">{ButtonComponents?.title}</span>
        </div>
        {children}
      </motion.div>
    </button>
  )
}
