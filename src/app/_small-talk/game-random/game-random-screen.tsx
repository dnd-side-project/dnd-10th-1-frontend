import { Button } from "@/components/button"

import SmallTalkGameBanner from "../components/game-banner/game-banner"
import SmallTalkGameHeader from "../components/game-header/game-header"
import SmallTalkGameResultBox from "../components/game-result-box/game-result-box"

type Props = {
  question: string
  talkList: string[]
}

export default function SmallTalkGameRandomScreen({ question, talkList }: Props) {
  return (
    <div>
      <SmallTalkGameHeader isStart />
      <div className="flex flex-col gap-[23px] px-[23px]">
        <SmallTalkGameBanner question={question} type="random" className="mt-[85px]" />
        <SmallTalkGameResultBox backGround="dark">
          {talkList.map((talk, index) => (
            <li className="text-gray-25" key={index}>
              {talk}
            </li>
          ))}
        </SmallTalkGameResultBox>
        <Button className="mt-[15px]">랜덤뽑기</Button>
      </div>
    </div>
  )
}
