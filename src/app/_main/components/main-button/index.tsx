import { motion } from "framer-motion"
import { PlusSquare } from "lucide-react"
import Image from "next/image"
import { ComponentPropsWithoutRef, PropsWithChildren } from "react"

import MainCreate from "@/assets/svgs/main/main-create.svg"
import { cn } from "@/libs/tailwind/cn"

type Props = {
  isCreate: boolean
  className?: string
} & ComponentPropsWithoutRef<"button">

export default function MainButton({ isCreate, children, className, ...props }: PropsWithChildren<Props>) {
  const ButtonComponents = (() => {
    if (isCreate) {
      const svg = <Image src={MainCreate} alt="열림버튼" />
      const title = "방 만들기"
      return { svg, title }
    } else {
      const svg = <PlusSquare size={26} />
      const title = "초대 코드 입력하기"
      return { svg, title }
    }
  })()

  const buttonClassName = cn(
    "border-4 p-6 rounded-[18px] w-full",
    { "shadow-blue text-[22px] bold bg-pink-300 border-primary-300": isCreate },
    { "py-[14px] t1 shadow-blue bg-primary-300 border-pink-300": !isCreate },
    className,
  )

  const iconClassName = cn(
    "text-white flex items-center leading-none",
    { "text-[20px] font-bold gap-3": isCreate },
    { "h4-bold gap-5": !isCreate },
  )

  return (
    <button {...props}>
      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.95 }} className={buttonClassName}>
        <div className={iconClassName}>
          {ButtonComponents.svg} <span className="leading-none">{ButtonComponents.title}</span>
        </div>
        {children}
      </motion.div>
    </button>
  )
}
