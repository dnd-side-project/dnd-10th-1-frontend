import { Layers2 } from "lucide-react"

import type { UserWaitingType } from "@/app/_waiting/types/game"
import { Drawer, DrawerContent } from "@/components/drawer"
import { Input } from "@/components/input"
import useAdminStore from "@/store/admin-store"
import { UserInfoType } from "@/types/user"

import WaitingBottom from "./components/waiting-bottom"
import WaitingTop from "./components/waiting-top"

type Props = {
  myInfo: UserInfoType
  userList: UserWaitingType[]
  roomId: string
}

export default function WaitingScreen({ roomId, myInfo, userList }: Props) {
  const copyLink = () => {
    navigator.clipboard.writeText(roomId)
  }

  const { isAdmin, endGame } = useAdminStore(state => state)

  const disConnectRoom = () => {
    if (isAdmin) {
      endGame()
      // 방장일 때 끊는 로직
    } else {
      // 방장이 아닐때 끊는 로직
    }
  }

  return (
    <div className="relative h-full w-full bg-gray-950">
      <Drawer>
        <WaitingTop disConnectRoom={disConnectRoom} myInfo={myInfo} />
        <WaitingBottom isAdmin={isAdmin} userList={userList} />
        <DrawerContent className="px-[24px]">
          <div className="h4-bold pt-[34px]">초대링크 보내기</div>
          <div className="relative">
            <Input className="mt-5" control="main" disabled defaultValue={roomId} />
            <Layers2 className="absolute right-[18px] top-1/2  text-gray-600" onClick={copyLink} />
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  )
}
