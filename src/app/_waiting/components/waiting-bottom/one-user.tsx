import { useMemo } from "react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/avatar"
import { cn } from "@/libs/tailwind/cn"
import { WaitingUserType } from "@/types/waiting"

type Props = {
  userInfo: WaitingUserType
  index: number
}

export default function OneUser({ userInfo, index }: Props) {
  const { displayName, profileImage, status } = userInfo

  const isAdmin = index === 1
  const chipClassName = cn(
    "flex items-center justify-center text-white rounded w-[62px] h-6 text-[12px]",
    { "bg-pink-200": isAdmin },
    { "border-primary-300 text-primary-300 border": index !== 1 && !status },
    { "bg-primary-300": index !== 1 && status },
  )

  const userStatus = useMemo(() => {
    if (isAdmin) {
      return "방장"
    } else if (!isAdmin && userInfo.status === "준비 완료") {
      return "준비완료"
    } else {
      return "준비 중"
    }
  }, [userInfo.status, isAdmin])

  return (
    <div className="flex items-center justify-between border-b border-[rgba(00,00,00,10%)]">
      <div className="flex items-center gap-[18px] py-[11px] ">
        <div className="text-[20px]">{index}</div>
        <Avatar className="h-[54px] w-[54px]">
          <AvatarImage src={profileImage} />
          <AvatarFallback>{displayName}</AvatarFallback>
        </Avatar>
        <div className="text-[20px]">{displayName}</div>
      </div>
      <div className={chipClassName}>{userStatus}</div>
    </div>
  )
}
