import { motion } from "framer-motion"
import Lottie from "lottie-react"
import Image from "next/image"
import { useState } from "react"

import animationData from "@/assets/lotties/confetti.json"
import Home from "@/assets/svgs/home.svg"
import resetIcon from "@/assets/svgs/small-talk/reset.svg"
import resetHint from "@/assets/svgs/small-talk/reset-hint.svg"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/avatar"
import { Button } from "@/components/button"
import { UserInfoType } from "@/types/user"

import SmallTalkGameBanner from "../components/game-banner/game-banner"
import SmallTalkGameHeader from "../components/game-header/game-header"
import SmallTalkGameResultBox from "../components/game-result-box/game-result-box"

type Props = {
  question: string
  selectUserInfo: UserInfoType
  selectQuestion: string
  isAdmin: boolean
}

export default function SmallTalkGameResultScreen({ question, selectUserInfo, selectQuestion, isAdmin }: Props) {
  const { userNickName, userProfileImage } = selectUserInfo

  const [isAnimationVisible, setIsAnimationVisible] = useState(true)
  const [isResetHintVisible, setIsResetHintVisible] = useState(true)

  const handleAnimationComplete = () => {
    setIsAnimationVisible(false)
  }

  const hintClose = () => {
    setIsResetHintVisible(false)
  }

  const onReset = () => {
    // 새로고침합니다.
  }

  return (
    <div className="relative min-h-full bg-gray-950">
      {isAnimationVisible && (
        <div className="w-[360px]] absolute left-1/2 top-0 z-10 translate-x-[-50%]">
          <Lottie loop={false} animationData={animationData} onComplete={handleAnimationComplete} />
        </div>
      )}
      <SmallTalkGameHeader isStart={false} />
      <div className="flex flex-col gap-[23px] px-[23px]">
        <SmallTalkGameBanner
          type="result"
          className="mt-[85px]"
          question={question}
          userNickName={selectUserInfo.userNickName}
          selectQuestion={selectQuestion}
        />
        <SmallTalkGameResultBox>
          {isAdmin && (
            <div className="relative">
              {isResetHintVisible && (
                <div className="absolute right-[11px] top-[11px] z-[2] flex flex-col items-end">
                  <div className="h-10 w-10 rounded-full border-2 border-gray-25" />
                  <Image onClick={hintClose} src={resetHint} alt="reset-hint" />
                </div>
              )}
              <motion.div className="absolute right-[20px] top-[20px] z-[1]" whileTap={{ rotate: "90deg" }}>
                <Image onClick={onReset} src={resetIcon} alt="reset" />
              </motion.div>
            </div>
          )}
          <div className="flex h-full flex-col items-center justify-center">
            <Avatar className="h-[124px] w-[124px]">
              <AvatarImage src={userProfileImage} />
              <AvatarFallback>{userNickName}</AvatarFallback>
            </Avatar>
            <div className="mt-[20px] text-[18px] font-semibold text-gray-100">{`${userNickName}님 썰을 풀어주세요!`}</div>
          </div>
        </SmallTalkGameResultBox>
        <div className="flex h-full gap-5">
          <Button className="h4-bold h-[50px] bg-primary-300 py-[12.5px] text-gray-25">
            <Image src={Home} alt="홈" />
          </Button>
          <Button className="h4-bold h-full w-full bg-primary-300 py-[12.5px] text-gray-25">대기실 가기</Button>
        </div>
      </div>
    </div>
  )
}
