import { Layers2 } from "lucide-react"
import { toast, Toaster } from "sonner"

import { Drawer, DrawerContent } from "@/components/drawer"
import { Input } from "@/components/input"
import { SOCKET_EVENT } from "@/constants/apis"
import useAdminStore from "@/store/admin-store"
import useSocketStore from "@/store/socket-store"
import { UserMyInfoType } from "@/types/user"
import { RoomIdType, WaitingUserType } from "@/types/waiting"

import { useFlow } from "../stackflow"
import WaitingBottom from "./components/waiting-bottom"
import WaitingTop from "./components/waiting-top"

type Props = {
  myInfo: UserMyInfoType
  userList?: WaitingUserType[]
  roomId?: RoomIdType
}

export default function WaitingScreen({ roomId = "", myInfo, userList = [] }: Props) {
  const socket = useSocketStore(state => state.socket)

  const { isAdmin, resetAdmin } = useAdminStore(state => state)

  const { replace } = useFlow()

  const copyLink = () => {
    navigator.clipboard.writeText(roomId)
    toast("초대 링크가 복사되었어요!")
  }

  const disConnectRoom = () => {
    if (isAdmin) {
      resetAdmin()
    }
    socket.emit(SOCKET_EVENT.END_GAME, { roomId, userId: myInfo.id })
  }

  const gameStart = () => {
    replace("SelectGames", { roomId })
  }

  const updateStatus = (status: boolean) => {
    if (!socket) return

    if (status) {
      socket.emit(SOCKET_EVENT.UPDATE_STATUS, { roomId, userId: myInfo.id, status: "준비 완료" })
    } else {
      socket.emit(SOCKET_EVENT.UPDATE_STATUS, { roomId, userId: myInfo.id, status: "준비 중" })
    }
  }
  return (
    <div className="relative h-full w-full bg-gray-950">
      <Drawer>
        <WaitingTop disConnectRoom={disConnectRoom} myInfo={myInfo} />
        <WaitingBottom isAdmin={isAdmin} gameStart={gameStart} updateStatus={updateStatus} userList={userList} />
        <DrawerContent className="px-[24px]">
          <div className="h4-bold pt-[34px]">초대링크 보내기</div>
          <div className="relative">
            <Input className="mt-5 pr-20" control="main" disabled defaultValue={roomId} />
            <Layers2 className="absolute right-[18px] top-1/2  text-gray-600" onClick={copyLink} />
          </div>
          <Toaster position="top-center" />
        </DrawerContent>
      </Drawer>
    </div>
  )
}
