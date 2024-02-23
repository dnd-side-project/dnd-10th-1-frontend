import { useEffect, useState } from "react"

import { cn } from "@/libs/tailwind/cn"
import { UserCountType } from "@/types/small-talk"
import type { UserMyInfoType } from "@/types/user"

import SmallTalkGameBody from "../components/game-body/game-body"
import SmallTalkGameHeader from "../components/game-header/game-header"

type Props = {
  userCount: UserCountType
  myInfo: UserMyInfoType
  topic: string
  timeOut: (isSubmit: boolean) => void
}

export default function SmallTalkGameInputScreen({ userCount, topic, myInfo, timeOut }: Props) {
  const [timer, setTimer] = useState(60)
  const [isSubmit, setIsSubmit] = useState(false)
  const { answerCount, unanswerCount } = userCount
  useEffect(() => {
    const countStart = setInterval(() => {
      setTimer(prev => prev - 1)
    }, 1000)

    if (timer === 0) {
      clearInterval(countStart)
      // timeOut(isSubmit)
    }

    return () => {
      clearInterval(countStart)
    }
  }, [isSubmit, timeOut, timer])

  const formAction = (formData: FormData) => {
    const talkValue = formData.get("talk-value")?.toString()

    if (!talkValue) return

    setIsSubmit(true)
  }

  return (
    <div className="min-h-full bg-gray-950">
      <SmallTalkGameHeader isStart />
      <SmallTalkGameBody myInfo={myInfo} className="pt-[80px]">
        <div className="absolute right-10 top-4 bg-pink-100 p-2">{`${answerCount}/${answerCount + unanswerCount}`}</div>
        <form action={formAction} className="flex h-full w-full flex-col items-center">
          <div className="mt-[94px] rounded-xl bg-pink-100 px-[21px] py-[3px] text-[25px] font-bold text-gray-800">
            {timer === 60 ? "1:00" : `0:${timer}`}
          </div>
          <span className="h2 mt-6">{topic}</span>
          <label className="h2">
            <input
              disabled={isSubmit}
              name="talk-value"
              size={1}
              maxLength={20}
              className={cn("h-7 bg-gray-25 outline-none active:text-gray-600", { "text-primary-300": isSubmit })}
            />
            이다.
          </label>
          <button
            disabled={isSubmit}
            className="h4-b mt-[42px] rounded-[12px] bg-gray-950 px-[42px] py-[15px] text-gray-25"
          >
            작성완료
          </button>
        </form>
      </SmallTalkGameBody>
      <div className="t1 mt-[46px] text-center text-gray-400">
        {isSubmit ? "다른분들이 작성하고 있어요." : "최대 20자까지 작성할 수 있어요"}
      </div>
    </div>
  )
}
