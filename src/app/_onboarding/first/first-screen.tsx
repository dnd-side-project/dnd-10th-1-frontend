import Image from "next/image"

import OnboardinFirst from "@/assets/svgs/onboarding-first.svg"
import { Button } from "@/components/button"
import { cn } from "@/libs/tailwind/cn"

type Props = {
  onClick: () => void
}

export default function FirstScreen({ onClick }: Props) {
  return (
    <div className="min-h-screen bg-gray-950 px-6 pt-20">
      <div className="flex justify-center">
        <Image priority src={OnboardinFirst} alt="온보딩 첫번째 이미지" />
      </div>

      <p className="h2 mb-10 flex justify-center text-center text-gray-25">
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
