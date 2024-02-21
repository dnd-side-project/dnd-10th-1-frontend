import { create } from "zustand"

import { UserInfoType } from "@/types/user"

type MyInfoStore = {
  myInfo: UserInfoType
  setMyInfo: (newInfo: UserInfoType) => void
}

const useMyInfoStore = create<MyInfoStore>(set => ({
  myInfo: {
    nickname: "",
    profileImage: "",
  },
  setMyInfo: (newInfo: UserInfoType) =>
    set(() => ({
      myInfo: newInfo,
    })),
}))

export default useMyInfoStore
