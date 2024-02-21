import Image from "next/image"

import EditProfile from "@/assets/svgs/profiles/edit-profile.svg"
import { Avatar, AvatarFallback } from "@/components/avatar"
import { Drawer, DrawerClose, DrawerContent, DrawerTrigger } from "@/components/drawer"
import { UserInfoType } from "@/types/user"

import ProfileInput from "./components/profile-input/profile-input"
import { PROFILE_THEMES } from "./profile-themes"

type Props = {
  profile: any
  onDrawerClick: (profileTheme: any) => void
  onInputChange: (value: string) => void
} & Pick<UserInfoType, "nickName">

export default function ProfileScreen({ profile, nickName, onDrawerClick, onInputChange }: Props) {
  return (
    <div className="min-h-full bg-gray-950 px-[49px]">
      <div className="mb-[33px] flex justify-center">
        <Drawer>
          <DrawerTrigger>
            <div className="relative">
              <Avatar className="h-[99px] w-[99px]">
                <AvatarFallback className="relative h-[99px] w-[99px]">
                  <Image priority src={profile} fill alt="기본 프로필" />
                </AvatarFallback>
              </Avatar>
              <Image src={EditProfile} alt="기본 프로필" className="absolute bottom-0 right-0" />
            </div>
          </DrawerTrigger>

          <DrawerContent>
            <div className="px-[19px] pt-[34px]">
              <h2 className="mb-[27px] text-lg font-bold text-black">프로필 선택하기</h2>

              <div className="grid grid-cols-4 gap-[14px]">
                {PROFILE_THEMES.map((profileTheme, index) => (
                  <Avatar key={index} className="h-[70px] w-[70px]">
                    <DrawerClose onClick={() => onDrawerClick(profileTheme)}>
                      <AvatarFallback>
                        <Image src={profileTheme} alt="기본 프로필" />
                      </AvatarFallback>
                    </DrawerClose>
                  </Avatar>
                ))}
              </div>
            </div>
          </DrawerContent>
        </Drawer>
      </div>

      <ProfileInput nickname={nickName} onInputChange={onInputChange} />

      <div className="flex flex-col items-center text-sm text-[#F2F4F7]">
        <p>얼음땡에서 사용할 닉네임과 프로필을 설정해주세요.</p>
        <p>닉네임은 최대 19자까지 입력이 가능해요!</p>
      </div>
    </div>
  )
}
