import Image from "next/image"

import OnboardinFirst from "@/assets/svgs/onboarding-first.svg"
import { Button } from "@/components/button"
import { cn } from "@/libs/tailwind/cn"

type Props = {
  onClick: () => void
  onSkipClick: () => void
}

export default function FirstScreen({ onClick, onSkipClick }: Props) {
  return (
    <div className="min-h-full bg-gray-950 px-6 pb-6 pt-[46px]">
      <div className="mb-3 mr-3 text-right text-gray-400">
        <button onClick={onSkipClick}>Skip</button>
      </div>

      <div className="mb-[30px] flex justify-center">
        <Image priority src={OnboardinFirst} alt="온보딩 첫번째 이미지" />
      </div>

      <div className="mb-[47px] flex justify-center gap-2">
        <div className="h-2 w-2 rounded-full bg-gray-400" />
        <div className="h-2 w-2 rounded-full bg-gray-600" />
        <div className="h-2 w-2 rounded-full bg-gray-600" />
      </div>

      <p className="h2 mb-[39px] flex justify-center text-center text-gray-25">
        첫 만남 5분의
        <br />
        정적을 깨드릴게요!
      </p>

      <div className="mb-[126px] flex h-8 flex-col text-center leading-[140%] text-gray-300">
        <p>얼음땡만의 콘텐츠를 통해</p>
        <p>팀원들의 성향을 알 수 있어요!</p>
      </div>

      <Button onClick={onClick} className={cn("t2 w-full bg-primary-300 text-white")}>
        다음
      </Button>
    </div>
  )
}
