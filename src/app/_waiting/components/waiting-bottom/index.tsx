import { Share2 } from "lucide-react"
import { useMemo, useState } from "react"

import { DrawerTrigger } from "@/components/drawer"
import { cn } from "@/libs/tailwind/cn"
import { WaitingUserType } from "@/types/waiting"

import UserList from "./user-list"

type Props = {
  isAdmin: boolean
  userList: WaitingUserType[]
  gameStart: () => void
  updateStatus: (status: boolean) => void
}

export default function WaitingBottom({ userList, isAdmin, gameStart, updateStatus }: Props) {
  const [state, setState] = useState(false)
  const allReady = userList.findIndex((user, index) => index !== 0 && user.status !== "준비 완료") === -1

  const buttonAction = useMemo(() => {
    if (isAdmin) {
      const buttonTitle = "시작하기"
      const buttonAction = () => {
        gameStart()
      }

      return { buttonTitle, buttonAction }
    } else {
      const buttonTitle = state ? "준비완료" : "준비하기"
      const buttonAction = () => {
        if (state) {
          setState(false)
          updateStatus(false)
          // 준비 취소 액션
        } else {
          setState(true)
          updateStatus(true)
        }
      }

      return { buttonTitle, buttonAction }
    }
  }, [gameStart, isAdmin, state, updateStatus])

  const adminWithNotAllReady = (isAdmin && !allReady) || userList.length === 1
  const adminWithAllReady = isAdmin && allReady && userList.length !== 1
  const userWithReady = !isAdmin && state
  const userWithNotReady = !isAdmin && !state

  const buttonClassName = cn(
    "w-full rounded-[10px] text-white",
    { "bg-[#878787]": adminWithNotAllReady },
    { "bg-primary-300": adminWithAllReady },
    { "bg-pink-300": userWithReady },
    { "bg-primary-300": userWithNotReady },
  )

  return (
    <section className="absolute bottom-0 w-full p-6">
      <span className="t1 text-gray-400">방 대기중인 팀원</span>
      <div className="mt-[14px]">
        <UserList userList={userList} />
      </div>
      <div className="mt-[22px] flex h-[50px] gap-5">
        <button disabled={adminWithNotAllReady} className={buttonClassName} onClick={buttonAction.buttonAction}>
          {buttonAction.buttonTitle}
        </button>
        <div className="h4-bold flex aspect-square h-[50px] items-center justify-center rounded-[10px] bg-primary-300 text-gray-25">
          <DrawerTrigger>
            <Share2 className="text-gray-25" />
          </DrawerTrigger>
        </div>
      </div>
    </section>
  )
}
