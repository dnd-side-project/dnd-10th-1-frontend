import { Avatar, AvatarFallback, AvatarImage } from "@/components/avatar"

import SmallTalkGameBanner from "../components/game-banner/game-banner"
import SmallTalkGameHeader from "../components/game-header/game-header"
import SmallTalkGameResultBox from "../components/game-result-box/game-result-box"

type Props = {
  question: string
  result: {
    userNickName: string
    userProfile: string
    talkValue: string
  }
}

export default function SmallTalkGameResultScreen({ question, result }: Props) {
  const { userNickName, userProfile } = result
  return (
    <div>
      <SmallTalkGameHeader isStart={false} />
      <div className="flex flex-col gap-[23px] px-[23px]">
        <SmallTalkGameBanner question={question} className="mt-[85px]" type="result" result={result} />
        <SmallTalkGameResultBox>
          <div className="flex h-full flex-col items-center justify-center">
            <Avatar className="h-[124px] w-[124px]">
              <AvatarImage src={userProfile} />
              <AvatarFallback>{userNickName}</AvatarFallback>
            </Avatar>
            <div className="mt-[20px] text-[18px] font-semibold text-gray-100">{`${userNickName}님 썰을 풀어주세요!`}</div>
          </div>
        </SmallTalkGameResultBox>
      </div>
    </div>
  )
}
