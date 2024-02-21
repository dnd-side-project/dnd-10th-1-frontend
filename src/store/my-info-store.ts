import { create } from "zustand"

import { UserInfoType } from "@/types/user"

type MyInfoStore = {
  myInfo: UserInfoType
  setUserInfo: (newInfo: UserInfoType) => void
}

const useMyInfoStore = create<MyInfoStore>(set => ({
  myInfo: {
    nickName: "",
    profileImage: "",
  },
  setUserInfo: (newInfo: UserInfoType) =>
    set({
      myInfo: newInfo,
    }),
}))

export default useMyInfoStore
