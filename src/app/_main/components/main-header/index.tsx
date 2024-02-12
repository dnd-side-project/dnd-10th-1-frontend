import Image from "next/image"

import MainLinear from "@/assets/svgs/main-linear.svg"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/avatar"
type Props = {
  userProfileImage: string
  userNickName: string
}

export default function MainHeader({ userNickName, userProfileImage }: Props) {
  return (
    <header className="relative overflow-hidden rounded-b-[20px]">
      <div className="relative z-10 flex h-60 justify-center bg-[#4747F4]">
        <div className="bg relative w-full max-w-[360px]">
          <Avatar className="absolute right-6 top-[34px] h-[34px] w-[34px]">
            <AvatarImage src={userProfileImage} />
            <AvatarFallback>{userNickName}</AvatarFallback>
          </Avatar>
          <div className="absolute bottom-[52px] left-6">
            <span className="h2 whitespace-pre-wrap text-gray-100">{`${userNickName}님\n오늘도 얼음땡과\n함께해요! 💗`}</span>
          </div>
        </div>
      </div>
      <Image className="absolute bottom-0 z-10 w-full" src={MainLinear} alt="Linear" />
    </header>
  )
}
