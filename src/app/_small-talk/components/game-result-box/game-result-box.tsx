import { motion } from "framer-motion"
import Image from "next/image"
import { PropsWithChildren } from "react"

import resetSvg from "@/assets/svgs/small-talk/reset.svg"
import { cn } from "@/libs/tailwind/cn"

type Props = {
  backGround?: "white" | "dark"
  onReset?: () => void
}

export default function SmallTalkGameResultBox({ backGround = "white", children, onReset }: PropsWithChildren<Props>) {
  const isAdmin = true
  const backGroundClassName = cn("relative border-2 border-gray-100 h-[288px] rounded-[14px] bg-gray-600", {
    "bg-gray-800": backGround === "dark",
  })
  return (
    <div className={backGroundClassName}>
      {isAdmin && backGround === "white" && (
        <motion.div className="absolute right-[20px] top-[20px]" whileTap={{ rotate: "90deg" }}>
          <Image onClick={onReset} src={resetSvg} alt="reset" />
        </motion.div>
      )}
      {children}
    </div>
  )
}
