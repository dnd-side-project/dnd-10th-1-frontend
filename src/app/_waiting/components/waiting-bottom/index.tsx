import { Share2 } from "lucide-react"
import { useMemo, useState } from "react"

import type { UserWaitingType } from "@/app/_waiting/types/game"
import { Button } from "@/components/button"
import { DrawerTrigger } from "@/components/drawer"
import { cn } from "@/libs/tailwind/cn"

import UserList from "./user-list"

type Props = {
  userList: UserWaitingType[]
  isAdmin: boolean
}

export default function WaitingBottom({ userList, isAdmin }: Props) {
  const [state, setState] = useState(false)
  const allReady = userList.findIndex(user => !user.status) === -1

  const buttonAction = useMemo(() => {
    if (isAdmin) {
      const buttonTitle = "시작하기"
      const buttonAction = () => {
        // 게임 시작 액션
      }

      return { buttonTitle, buttonAction }
    } else {
      const buttonTitle = state ? "준비완료" : "준비하기"
      const buttonAction = () => {
        if (state) {
          setState(false)
          // 준비 취소 액션
        } else {
          setState(true)
          // 준비 완료 액션
        }
      }

      return { buttonTitle, buttonAction }
    }
  }, [isAdmin, state])

  const buttonClassName = cn(
    "w-full rounded-[10px] text-white",
    { "bg-[#878787]": isAdmin && !allReady },
    { "bg-primary-300": isAdmin && allReady },
    { "bg-pink-300": !isAdmin && state },
    { "bg-primary-300": !isAdmin && !state },
  )

  return (
    <section className="absolute bottom-0 w-full p-6">
      <span className="t1 text-gray-400">방 대기중인 팀원</span>
      <div className="mt-[14px]">
        <UserList userList={userList} />
      </div>
      <div className="mt-[22px] flex h-[50px] gap-5">
        <button disabled={isAdmin && !allReady} className={buttonClassName} onClick={buttonAction.buttonAction}>
          {buttonAction.buttonTitle}
        </button>
        <Button className="h4-bold h-full rounded-[10px] bg-primary-300 py-[12.5px] text-gray-25">
          <DrawerTrigger>
            <Share2 className="text-gray-25" />
          </DrawerTrigger>
        </Button>
      </div>
    </section>
  )
}
