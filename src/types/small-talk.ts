import { UserInfoType } from "./user"

export type UserCountType = {
  answerCount: number
  totalCount: number
}

export type AnswerType = {
  userId: number
  answer: string
}

export type SmallTalkResult = {
  userInfo: UserInfoType
  topic: string
  selectAnswer: string
  isTryAllowed: "true" | "false"
}
