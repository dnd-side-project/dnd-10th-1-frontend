import Image from "next/image"

import characterLogo from "@/assets/images/main-character-logo.png"
import mainLogo from "@/assets/images/splash-logo.png"
import MainLinear from "@/assets/svgs/main/main-linear.svg"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/avatar"
type Props = {
  userProfileImage: string
  userNickName: string
}

export default function MainHeader({ userNickName, userProfileImage }: Props) {
  return (
    <header className="relative">
      <div className="relative z-10 flex h-60 justify-center overflow-hidden rounded-b-[20px] bg-[#4747F4]">
        <div className="bg relative w-full max-w-[360px] overflow-hidden rounded-b-[28px]">
          <Image src={characterLogo} alt="EZPZ 캐릭터" />
          <Image className="absolute left-[24px] top-[38px]" height={25} width={68} src={mainLogo} alt="Main 로고" />
          <Avatar className="absolute right-6 top-[34px] h-[34px] w-[34px]">
            <AvatarImage src={userProfileImage} />
            <AvatarFallback>{userNickName}</AvatarFallback>
          </Avatar>
          <div className="absolute bottom-[52px] left-6">
            <span className="h2 whitespace-pre-wrap leading-tight text-gray-100">{`${userNickName}님\n오늘도 얼음땡과\n함께해요! 💗`}</span>
          </div>
        </div>
      </div>
      <Image className="absolute bottom-0 z-10 h-[54px] w-full" src={MainLinear} alt="Linear" />
    </header>
  )
}
