"use client"

import { useState } from "react"

import { Drawer } from "@/components/drawer"
import useAdminStore from "@/store/admin-store"

import { checkingInviteCode } from "../actions/main"
import { useFlow } from "../stackflow"
import MainContent from "./components/main-content"
import MainFooter from "./components/main-footer"
import MainHeader from "./components/main-header"
import MainOnboarding from "./components/main-onboarding"

type Props = {
  userInfo: {
    userNickName: string
    userProfileImage: string
  }
  isMainFirst: boolean
}

export default function MainScreen({ userInfo, isMainFirst }: Props) {
  const [isFirst, setIsFirst] = useState(isMainFirst)
  const { userNickName, userProfileImage } = userInfo

  const { push } = useFlow()
  const createGame = useAdminStore(state => state.createGame)

  const onSubmit = async (formData: FormData) => {
    try {
      const inviteCode = formData.get("inviteCode")?.toString()

      if (!inviteCode) throw new Error("옳지 않은 접근입니다.")

      await checkingInviteCode(inviteCode)

      push("Waiting", { code: inviteCode })
    } catch (err) {
      if (err instanceof Error) {
        console.error(err.message)
      }
    }
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
        <MainHeader userNickName={userNickName} userProfileImage={userProfileImage} />
        <MainFooter onCreateRoom={onCreateRoom} />
        <MainContent inviteWithCode={onSubmit} />
      </Drawer>
    </div>
  )
}
