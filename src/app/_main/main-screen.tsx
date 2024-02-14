"use client"

import { useState } from "react"

import { Drawer, DrawerClose, DrawerContent } from "@/components/drawer"
import { Input } from "@/components/input"

import MainDragbar from "./components/main-dragbar"
import MainFooter from "./components/main-footer"
import MainHeader from "./components/main-header"
import MainOnboarding from "./components/main-onboarding"

type Props = {
  isFirstVisit: boolean
  userInfo: {
    userNickName: string
    userProfileImage: string
  }
}

export default function MainScreen({ isFirstVisit, userInfo }: Props) {
  // Local Storage로 변경될 예정
  const [isFirst, setIsFirst] = useState(isFirstVisit)
  const { userNickName, userProfileImage } = userInfo

  function inviteWithCode(e: FormData) {
    const inviteCode = e.get("inviteCode")

    if (typeof inviteCode !== "string") throw new Error("옳지 않은 접근입니다.")
  }

  function onboardingHandler() {
    setIsFirst(false)
  }

  return (
    <div className="relative h-full w-full bg-gray-950">
      <Drawer>
        {isFirst && <MainOnboarding onboardingHandler={onboardingHandler} />}
        <MainHeader userNickName={userNickName} userProfileImage={userProfileImage} />
        <MainDragbar />
        <MainFooter />
        <DrawerContent>
          <form action={inviteWithCode} className="p-7">
            <div>
              <span className="text-[18px] font-bold">코드 입력하기</span>
            </div>
            <div>
              <span className="text-4 font-medium">초대받은 코드를 입력해주세요</span>
            </div>
            <Input name="inviteCode" className="mt-5" control="main" placeholder="여기에 입력해주세요" />
            <DrawerClose className="mt-6 w-full text-[18px] font-semibold">
              <button className="h-[50px] w-full rounded-[10px] bg-primary-300 text-white">완료</button>
            </DrawerClose>
          </form>
        </DrawerContent>
      </Drawer>
    </div>
  )
}
