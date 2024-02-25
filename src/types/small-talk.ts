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
  topic: {
    id: number
    description: string
  }
  selectAnswer: [{ answer: string }]
}
