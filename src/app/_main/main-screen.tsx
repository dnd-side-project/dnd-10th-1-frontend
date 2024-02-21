"use client"

import { useState } from "react"

import { Drawer } from "@/components/drawer"
import useAdminStore from "@/store/admin-store"
import { UserInfoType } from "@/types/user"

import { useFlow } from "../stackflow"
import MainContent from "./components/main-content"
import MainFooter from "./components/main-footer"
import MainHeader from "./components/main-header"
import MainOnboarding from "./components/main-onboarding"

type Props = {
  userInfo: UserInfoType
  isMainFirst: boolean
}

export default function MainScreen({ userInfo, isMainFirst }: Props) {
  const [isFirst, setIsFirst] = useState(isMainFirst)
  const { nickName, profileImage } = userInfo

  const { push } = useFlow()
  const createGame = useAdminStore(state => state.createGame)

  const inviteWithCode = (e: FormData) => {
    const inviteCode = e.get("inviteCode")

    if (typeof inviteCode !== "string") throw new Error("옳지 않은 접근입니다.")

    push("Waiting", { code: inviteCode })
  }

  const onboardingHandler = () => {
    setIsFirst(false)
    localStorage.setItem("main-first", "isNotFirst")
  }

  const onCreateRoom = () => {
    createGame()
    push("Waiting", {})
  }

  return (
    <div className="relative h-full w-full bg-gray-950">
      <Drawer>
        {!isFirst && <MainOnboarding onboardingHandler={onboardingHandler} />}
        <MainHeader userNickName={nickName} userProfileImage={profileImage} />
        <MainFooter onCreateRoom={onCreateRoom} />
        <MainContent inviteWithCode={inviteWithCode} />
      </Drawer>
    </div>
  )
}
