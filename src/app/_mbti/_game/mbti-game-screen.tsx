import dynamic from "next/dynamic"

import AppBar from "@/components/app-bar"
import { Button } from "@/components/button"

const Bubble = dynamic(() => import("./bubble"), { ssr: false })

type Props = {
  onBubbleClick: (mbti: string) => void
  onCompleteClick: () => void
  isSelected: boolean
}

export default function MbtiScreen({ onBubbleClick, onCompleteClick, isSelected }: Props) {
  return (
    <div className="min-h-full bg-gray-950">
      <AppBar title="팀원 성향 파악" />

      <h2 className="h2 text-center text-gray-100">MBTI를 선택해주세요!</h2>

      <Bubble handleClick={onBubbleClick} />

      <div className="sticky bottom-[24px] px-[24px]">
        <Button
          disabled={!isSelected}
          onClick={onCompleteClick}
          className="disabled:opacity-1 mt-auto w-full bg-primary-300 text-white disabled:bg-[#B7B7B7]"
        >
          선택완료
        </Button>
      </div>
    </div>
  )
}
