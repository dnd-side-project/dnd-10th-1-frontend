import Image from "next/image"

import MainCircle from "@/assets/svgs/main-circle.svg"
import MainTooltip from "@/assets/svgs/main-tooltip.svg"
type Props = {
  onboardingHandler: () => void
}

export default function MainOnboarding({ onboardingHandler }: Props) {
  return (
    <div className="absolute h-full w-full text-white">
      <div onClick={onboardingHandler} className="absolute z-[14] h-screen w-full"></div>
      <div className="absolute z-[3] h-screen w-full bg-black opacity-50"></div>
      <div className="absolute left-1/2 top-[235px] z-[11] flex w-full translate-x-[-50%] flex-col items-center gap-1">
        <Image src={MainCircle} alt="돋보기" />
        <Image src={MainTooltip} alt="메인 온보딩 소개말" />
      </div>
    </div>
  )
}
