import Image from "next/image"

import OnboardThird from "@/assets/svgs/onboarding-third.svg"
import { Button } from "@/components/button"
import { cn } from "@/libs/tailwind/cn"

type Props = {
  onClick: () => void
}

export default function ThirdScreen({ onClick }: Props) {
  return (
    <div className="min-h-screen bg-gray-950 px-6 pt-20">
      <div className="flex justify-center">
        <Image priority src={OnboardThird} alt="온보딩 첫번째 이미지" />
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
