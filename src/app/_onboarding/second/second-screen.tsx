import Image from "next/image"

import OnboardinSecond from "@/assets/svgs/onboarding-second.svg"
import { Button } from "@/components/button"
import { cn } from "@/libs/tailwind/cn"

type Props = {
  onClick: () => void
}

export default function SecondScreen({ onClick }: Props) {
  return (
    <div className="min-h-screen bg-gray-950 px-6 pt-20">
      <div className="flex justify-center">
        <Image priority src={OnboardinSecond} alt="온보딩 첫번째 이미지" />
      </div>

      <p className="h2 mb-10 flex justify-center text-center text-gray-25">
        얼음땡만의 콘텐츠를
        <br />
        경험해보세요
      </p>

      <div className="mb-[126px] flex h-8 flex-col text-center leading-[140%] text-gray-300">
        <p>어떤 말을 할지 고민했던 경험이 있으셨나요?</p>
        <p>첫 프로젝트 시작 전 팀원을 이해해보는 시간!</p>
      </div>

      <Button onClick={onClick} className={cn("t2 w-full bg-primary-300 text-white")}>
        다음
      </Button>
    </div>
  )
}