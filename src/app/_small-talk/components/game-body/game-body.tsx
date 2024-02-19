import { motion } from "framer-motion"
import { PropsWithChildren } from "react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/avatar"
import { cn } from "@/libs/tailwind/cn"

type Props = {
  className?: string
}

export default function SmallTalkGameBody({ children, className }: PropsWithChildren<Props>) {
  const mockInfo = {
    userNickName: "해지",
    userProfileImage: "https://source.unsplash.com/random/?cat",
  }
  return (
    <div className={cn("relative h-[412px] w-full", className)}>
      <div className="relative mx-auto my-0 h-[354px] w-[calc(100%-62px)]">
        <div className="absolute z-[3] flex h-[354px] w-full justify-center rounded-[20px] bg-gray-100">
          <Avatar className="absolute h-[124px] w-[124px] translate-y-[-50%] drop-shadow">
            <AvatarImage src={mockInfo.userProfileImage} />
            <AvatarFallback>{mockInfo.userNickName}</AvatarFallback>
          </Avatar>
          {children}
        </div>
        <motion.div
          initial={{
            height: "314px",
            width: "278px",
            borderRadius: 14,
            zIndex: 1,
            bottom: 20,
            left: -13,
            translateX: 0,
            translateY: 0,
          }}
          animate={{ rotate: "-8.89deg" }}
          className="absolute bg-primary-25"
        />
        <motion.div
          initial={{
            height: "314px",
            width: "278px",
            borderRadius: 14,
            zIndex: 1,
            bottom: 20,
            right: -13,
            translateX: 0,
            translateY: 0,
          }}
          animate={{ rotate: "8.89deg" }}
          className="absolute bg-primary-25"
        />
        <motion.div
          initial={{
            height: "322px",
            width: "296px",
            borderRadius: 14,
            zIndex: 2,
            bottom: 15,
            right: -10,
            translateX: 0,
            translateY: 0,
          }}
          animate={{ rotate: "3.97deg" }}
          className="absolute  bg-gradient-to-b from-[#2A61E7] to-[#FF7EFA] "
        />
        <motion.div
          initial={{
            height: "322px",
            width: "296px",
            borderRadius: 14,
            zIndex: 2,
            bottom: 15,
            left: -10,
            translateX: 0,
            translateY: 0,
          }}
          animate={{ rotate: "-3.97deg" }}
          className="absolute  bg-gradient-to-b from-[#2A61E7] to-[#FF7EFA] "
        />
      </div>
    </div>
  )
}
