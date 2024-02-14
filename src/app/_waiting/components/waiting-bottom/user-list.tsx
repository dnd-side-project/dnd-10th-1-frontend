import { UserWaitingType } from "@/app/_waiting/types/game"

import OneUser from "./one-user"

type Props = {
  userList: UserWaitingType[]
}

export default function UserList({ userList }: Props) {
  return (
    <div className="flex max-h-[334px] w-full flex-col gap-[6px] overflow-y-scroll rounded-[10px] bg-[#F3F3F3] px-[10px] py-[6px] scrollbar-hide">
      {userList.map((userInfo, index) => (
        <OneUser key={userInfo.id} userInfo={userInfo} index={index + 1} />
      ))}
    </div>
  )
}
