export type WaitingUserType = {
  displayName: string
  permission: string
  profileImage: string
  id: number
  status: string
}

export type RoomIdType = string

export type WaitingResponseType = {
  userList: WaitingUserType[]
  roomId: RoomIdType
} | null
