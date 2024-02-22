import { useFlow } from "@/app/stackflow"
import AppBar from "@/components/app-bar"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/avatar"
import { UserInfoType } from "@/types/user"

type Props = {
  myInfo: UserInfoType
  disConnectRoom: () => void
}

export default function WaitingTop({ myInfo, disConnectRoom }: Props) {
  const { nickName, profileImage } = myInfo
  const { replace } = useFlow()

  const onBackClick = () => {
    disConnectRoom()
    replace("Main", {})
  }

  return (
    <>
      <AppBar title="대기방" isBackButton onBackClick={onBackClick} />
      <section className="items-col flex flex-col items-center justify-center gap-[30px]">
        <span className="whitespace-pre text-center align-text-top text-[26px] font-bold leading-tight text-gray-100">{`${nickName}님,\n팀원들이 들어오고 있어요`}</span>
        <Avatar className="h-[106px] w-[106px]">
          <AvatarImage src={profileImage} />
          <AvatarFallback>{nickName}</AvatarFallback>
        </Avatar>
      </section>
    </>
  )
}
