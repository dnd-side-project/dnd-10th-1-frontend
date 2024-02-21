import { motion } from "framer-motion"
import { PropsWithChildren } from "react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/avatar"
import { cn } from "@/libs/tailwind/cn"
import { UserInfoType } from "@/types/user"

type Props = {
  myInfo: UserInfoType
  className?: string
}

export default function SmallTalkGameBody({ myInfo, children, className }: PropsWithChildren<Props>) {
  const { nickName, profileImage } = myInfo
  return (
    <div className={cn("relative h-[412px] w-full", className)}>
      <div className="relative mx-auto my-0 h-[354px] w-[calc(100%-62px)]">
        <div className="absolute z-[3] flex h-[354px] w-full justify-center rounded-[20px] bg-gray-100">
          <Avatar className="absolute h-[124px] w-[124px] translate-y-[-50%] drop-shadow">
            <AvatarImage src={profileImage} />
            <AvatarFallback>{nickName}</AvatarFallback>
          </Avatar>
          {children}
        </div>
        <motion.div
          initial={{
            height: "314px",
            width: "278px",
            borderRadius: 14,
            zIndex: 1,
            bottom: 0,
            right: 0,
            borderBottomLeftRadius: 200,
          }}
          animate={{ left: -10, bottom: 20, rotate: "-8.89deg" }}
          className="absolute bg-primary-25"
        />
        <motion.div
          initial={{
            height: "314px",
            width: "278px",
            borderRadius: 14,
            zIndex: 1,
            bottom: 0,
            right: 0,
            borderBottomRightRadius: 200,
          }}
          animate={{ right: -10, bottom: 20, rotate: "8.89deg" }}
          className="absolute bg-primary-25"
        />
        <motion.div
          initial={{
            height: "322px",
            width: "296px",
            borderRadius: 14,
            zIndex: 2,
            bottom: 0,
            right: 0,
            borderBottomLeftRadius: 200,
          }}
          animate={{ right: -10, bottom: 15, rotate: "3.97deg" }}
          className="absolute bg-gradient-to-b from-[#2A61E7] to-[#FF7EFA] "
        />
        <motion.div
          initial={{
            height: "322px",
            width: "296px",
            borderRadius: 14,
            zIndex: 2,
            bottom: 0,
            left: 0,
            borderBottomRightRadius: 200,
          }}
          animate={{ left: -10, bottom: 15, rotate: "-3.97deg" }}
          className="absolute bg-gradient-to-b from-[#2A61E7] to-[#FF7EFA] "
        />
      </div>
    </div>
  )
}
