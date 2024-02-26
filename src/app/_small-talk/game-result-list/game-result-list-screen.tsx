import { Button } from "@/components/button"
import { cn } from "@/libs/tailwind/cn"
import { AnswerType } from "@/types/small-talk"

import SmallTalkGameBanner from "../components/game-banner/game-banner"
import SmallTalkGameHeader from "../components/game-header/game-header"
import SmallTalkGameResultBox from "../components/game-result-box/game-result-box"

type Props = {
  topic: string
  answerList: AnswerType[]
  isAdmin: boolean
  moveResultScreen: () => void
}

export default function SmallTalkGameResultListScreen({ moveResultScreen, topic, answerList, isAdmin }: Props) {
  return (
    <div className="min-h-full bg-gray-950">
      <SmallTalkGameHeader isStart />
      <div className="flex flex-col gap-[23px] px-[23px]">
        <SmallTalkGameBanner type="random" topic={topic} className="mt-[85px]" />
        <SmallTalkGameResultBox
          backGround="dark"
          className="flex flex-col items-center overflow-y-scroll px-[40px] scrollbar-hide"
        >
          <div className="mt-[34px] flex w-fit items-center justify-center rounded-[5px] bg-gradient-to-b from-[#2A61E7] to-[#FF7EFA]">
            <span className="t3-bold m-[1px] rounded-[5px] bg-gray-800 px-[14px] py-[3px] text-pink-200">
              썰 풀어줄 사람 랜덤 뽑기
            </span>
          </div>
          <ul className="mt-[30px] flex w-full flex-col gap-5">
            {answerList.map((answer, index) => (
              <li
                className={cn("w-full list-none text-gray-25", index % 2 === 0 ? "text-left" : "text-right")}
                key={answer.userId}
              >
                {answer.answer}
              </li>
            ))}
          </ul>
        </SmallTalkGameResultBox>
        {isAdmin && (
          <Button onClick={moveResultScreen} variant="full" size="max" className="mt-[15px]">
            랜덤뽑기
          </Button>
        )}
      </div>
    </div>
  )
}
