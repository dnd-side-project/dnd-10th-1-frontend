import Image from "next/image"

import OnboardThird from "@/assets/svgs/onboarding-third.svg"
import { Button } from "@/components/button"
import { cn } from "@/libs/tailwind/cn"

type Props = {
  onClick: () => void
  onSkipClick: () => void
}

export default function ThirdScreen({ onClick, onSkipClick }: Props) {
  return (
    <div className="min-h-full bg-gray-950 px-6 pb-6 pt-[46px]">
      <div className="mb-3 mr-3 text-right text-gray-400">
        <button onClick={onSkipClick}>Skip</button>
      </div>

      <div className="mb-[30px] flex justify-center">
        <Image priority src={OnboardThird} alt="온보딩 첫번째 이미지" />
      </div>

      <div className="mb-[47px] flex justify-center gap-2">
        <div className="h-2 w-2 rounded-full bg-gray-600" />
        <div className="h-2 w-2 rounded-full bg-gray-600" />
        <div className="h-2 w-2 rounded-full bg-gray-400" />
      </div>

      <p className="h2 mb-[198px] flex justify-center text-center text-gray-25">
        어렵게만 느껴졌던
        <br />
        첫만남의 벽을 깨보세요!
      </p>

      <Button onClick={onClick} className={cn("t2 w-full bg-primary-300 text-white")}>
        완료
      </Button>
    </div>
  )
}
