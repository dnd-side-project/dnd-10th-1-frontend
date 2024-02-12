"use client"

import { AppScreen } from "@stackflow/plugin-basic-ui"
import { ActivityComponentType } from "@stackflow/react"
import Image from "next/image"
import { useState } from "react"

import EditProfile from "@/assets/svgs/profiles/edit-profile.svg"
import FallbackProfile from "@/assets/svgs/profiles/fallback-profile.svg"
import { Avatar, AvatarFallback } from "@/components/avatar/avatar"
import { Drawer, DrawerClose, DrawerContent, DrawerTrigger } from "@/components/drawer"
import { Input } from "@/components/input"

import { useFlow } from "../stackflow"
import { PROFILE_THEMES } from "./profile-themes"

const Profile: ActivityComponentType = () => {
  const [profile, setProfile] = useState(FallbackProfile)
  const [value, setValue] = useState("")

  const { replace } = useFlow()

  const finish = profile !== FallbackProfile && value !== ""

  return (
    <AppScreen
      appBar={{
        title: "프로필 설정하기",
        renderRight: () => {
          return (
            <button
              disabled={!finish}
              onClick={() => {
                replace("Splash", {})
              }}
              className="pr-[27px] text-gray-100 disabled:text-gray-600"
            >
              완료
            </button>
          )
        },
        height: "70px",
        backgroundColor: "#0C111D",
        textColor: "#98A2B3",
        borderColor: "#0C111D",
      }}
    >
      <div className="min-h-full bg-gray-950 px-6">
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
                      <DrawerClose onClick={() => setProfile(profileTheme)}>
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

        <Input className="mb-[14px]" onChange={e => setValue(e.target.value)} value={value} />

        <div className="flex flex-col items-center text-sm text-[#F2F4F7]">
          <p className="">얼음땡에서 사용할 닉네임과 프로필을 설정해주세요.</p>
          <p className="">닉네임은 최대 19자까지 입력이 가능해요!</p>
        </div>
      </div>
    </AppScreen>
  )
}

export default Profile
