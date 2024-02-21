import { create } from "zustand"

import { PostProfileResponse } from "@/app/_profile/api/post-profile"
import { UserInfoType } from "@/types/user"

type MyInfoStore = {
  myInfo: (UserInfoType & { id: number }) | null
  setMyInfo: (newInfo: PostProfileResponse) => void
}

const useMyInfoStore = create<MyInfoStore>(set => ({
  myInfo: null,
  setMyInfo: (newInfo: PostProfileResponse) =>
    set(() => {
      const { id, displayName, profileImage } = newInfo
      return {
        myInfo: { id, nickName: displayName, profileImage },
      }
    }),
}))

export default useMyInfoStore
