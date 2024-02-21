"use client"

import { useState } from "react"

import { Drawer } from "@/components/drawer"
import useAdminStore from "@/store/admin-store"
import { UserMyInfoType } from "@/types/user"

import { useFlow } from "../stackflow"
import MainContent from "./components/main-content"
import MainFooter from "./components/main-footer"
import MainHeader from "./components/main-header"
import MainOnboarding from "./components/main-onboarding"

type Props = {
  myInfo: UserMyInfoType
  isMainFirst: boolean
}

export default function MainScreen({ myInfo, isMainFirst }: Props) {
  const [isFirst, setIsFirst] = useState(() => isMainFirst)

  const { replace } = useFlow()
  const createGame = useAdminStore(state => state.createGame)

  const onSubmit = async (formData: FormData) => {
    const inviteCode = formData.get("inviteCode")?.toString()

    if (!inviteCode) throw new Error("옳지 않은 접근입니다.")

    replace("Waiting", { roomId: inviteCode })
  }

  const onboardingHandler = () => {
    setIsFirst(false)
    localStorage.setItem("main-first", "isNotFirst")
  }

  const onCreateRoom = () => {
    createGame()
    replace("Waiting", {})
  }

  return (
    <div className="relative h-full w-full bg-gray-950">
      <Drawer>
        {isFirst && <MainOnboarding onboardingHandler={onboardingHandler} />}
        <MainHeader myInfo={myInfo} />
        <MainFooter onCreateRoom={onCreateRoom} />
        <MainContent inviteWithCode={onSubmit} />
      </Drawer>
    </div>
  )
}
