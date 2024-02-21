import { UserInfoType } from "@/types/user"

export type RoleType = "방장" | "팀원"

export type UserWaitingType = {
  id: number
  status: boolean
} & UserInfoType
