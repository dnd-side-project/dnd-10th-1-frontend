import { ArrowLeft } from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/avatar"
import { UserInfoType } from "@/types/user"

type Props = {
  userInfo: UserInfoType
}

export default function WaitingTop({ userInfo }: Props) {
  const { userNickName, userProfileImage } = userInfo
  return (
    <>
      <section className="relative p-[28px]">
        <ArrowLeft className="absolute" stroke="#98A2B3" />
        <span className="block text-center text-[14px] font-bold text-gray-400">대기방</span>
      </section>
      <section className="items-col flex flex-col items-center justify-center gap-[30px]">
        <span className="whitespace-pre text-center align-text-top text-[26px] font-bold leading-tight text-gray-100">{`${userNickName}님,\n팀원들이 들어오고 있어요`}</span>
        <Avatar className="h-[106px] w-[106px]">
          <AvatarImage src={userProfileImage} />
          <AvatarFallback>{userNickName}</AvatarFallback>
        </Avatar>
      </section>
    </>
  )
}
