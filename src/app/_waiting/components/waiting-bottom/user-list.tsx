import { WaitingUserType } from "@/types/waiting"

import OneUser from "./one-user"

type Props = {
  userList: WaitingUserType[]
}

export default function UserList({ userList }: Props) {
  return (
    <div className="flex h-[340px] w-full flex-col gap-[6px] overflow-y-scroll rounded-[10px] bg-[#F3F3F3] px-[10px] py-[6px] scrollbar-hide">
      {userList.map((userInfo, index) => (
        <OneUser key={userInfo.id} userInfo={userInfo} index={index + 1} />
      ))}
    </div>
  )
}
