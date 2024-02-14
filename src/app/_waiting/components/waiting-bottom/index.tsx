import { useMemo, useState } from "react"

import { cn } from "@/libs/tailwind/cn"
import type { RoleType, UserWaitingType } from "@/types/game"

import UserList from "./user-list"

type Props = {
  userList: UserWaitingType[]
  role: RoleType
}

export default function WaitingBottom({ userList, role }: Props) {
  const [state, setState] = useState(false)
  const allReady = userList.findIndex(user => !user.status) === -1
  const buttonAction = useMemo(() => {
    if (role === "방장") {
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
  }, [role, state])

  const buttonClassName = cn(
    "w-full h-[50px] rounded-[10px] text-white mt-[22px]",
    { "bg-[#878787]": role === "방장" && !allReady },
    { "bg-primary-300": role === "방장" && allReady },
    { "bg-pink-300": role === "팀원" && state },
    { "bg-primary-300": role === "팀원" && !state },
  )

  return (
    <section className="absolute bottom-0 w-full p-6">
      <span className="t1 text-gray-400">방 대기중인 팀원</span>
      <div className="mt-[14px]">
        <UserList userList={userList} />
      </div>
      <button disabled={role === "방장" && !allReady} className={buttonClassName} onClick={buttonAction.buttonAction}>
        {buttonAction.buttonTitle}
      </button>
    </section>
  )
}
