import type { RoleType, UserWaitingType } from "@/types/game"
import { UserInfoType } from "@/types/user"

import WaitingBottom from "./components/waiting-bottom"
import WaitingTop from "./components/waiting-top"

type Props = {
  userInfo: UserInfoType
  userList: UserWaitingType[]
  role: RoleType
}

export default function WaitingScreen({ userInfo, userList, role }: Props) {
  return (
    <div className="relative h-full w-full bg-gray-950">
      <WaitingTop userInfo={userInfo} />
      <WaitingBottom role={role} userList={userList} />
    </div>
  )
}
