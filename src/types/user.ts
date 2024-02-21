export type UserInfoType = {
  nickName: string
  profileImage: string
}

export type UserMyInfoType = {
  id: number
} & UserInfoType
