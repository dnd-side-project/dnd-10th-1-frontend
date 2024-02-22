import { UserInfoType, UserMyInfoType } from "@/types/user"
import { WaitingUserType } from "@/types/waiting"

export const mockUserInfo: UserInfoType = {
  nickName: "현아",
  profileImage: "https://source.unsplash.com/random/?cat",
}

export const mockMyUserInfo: UserMyInfoType = {
  id: 10,
  nickName: "현아",
  profileImage: "https://source.unsplash.com/random/?cat",
}

export const mockUserList: WaitingUserType[] = [
  {
    id: 1,
    displayName: "얼음공주",
    profileImage: "https://source.unsplash.com/random/?cat",
    status: "준비 완료",
    permission: "",
  },
  {
    id: 2,
    displayName: "얼음공주",
    profileImage: "https://source.unsplash.com/random/?cat",
    status: "준비 중",
    permission: "",
  },
  {
    id: 3,
    displayName: "얼음공주",
    profileImage: "https://source.unsplash.com/random/?cat",
    status: "준비 중",
    permission: "",
  },
  {
    id: 4,
    displayName: "얼음공주",
    profileImage: "https://source.unsplash.com/random/?cat",
    status: "준비 중",
    permission: "",
  },
  {
    id: 5,
    displayName: "얼음공주",
    profileImage: "https://source.unsplash.com/random/?cat",
    status: "준비 중",
    permission: "",
  },
]
