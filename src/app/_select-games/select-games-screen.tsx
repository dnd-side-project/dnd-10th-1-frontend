import Image from "next/image"
import { useState } from "react"

import BlankGame from "@/assets/svgs/select-games/blank-game.png"
import MbtiGame from "@/assets/svgs/select-games/mbti-game.png"
import AppBar from "@/components/app-bar"
import { Button } from "@/components/button"
import { cn } from "@/libs/tailwind/cn"

type Props = {
  onCompleteClick: (gameId: number) => void
}

export default function SelectGamesScreen({ onCompleteClick }: Props) {
  const [selected, setSelected] = useState<number | null>(null)
  const selectedBlank = 1
  const selectedMbti = 2
  const mbtiGameClassName = cn("flex h-[168px] w-full items-center justify-center rounded-[10px]", {
    "bg-gradient-to-b from-[#2A61E7] to-[#FF7EFA]": selected === selectedMbti,
  })

  const blankGameClassName = cn("flex h-[168px] w-full items-center justify-center rounded-[10px]", {
    "bg-gradient-to-b from-[#2A61E7] to-[#FF7EFA]": selected === selectedBlank,
  })

  return (
    <div className="min-h-full bg-gray-950">
      <AppBar title="게임선택" />
      <div className="flex flex-col px-[24px] pb-[24px] text-center text-gray-100">
        <div className="mb-[49px]">
          <h2 className="mb-2.5 text-[25px] font-bold">게임을 선택하세요</h2>

          <p className="t2">팀원들과 진행하고 싶은 게임을</p>
          <p className="t2">선택해주세요.</p>
        </div>

        <div className="mb-[149px] flex flex-col gap-5">
          <div className={mbtiGameClassName}>
            <Button onClick={() => setSelected(2)} className="relative h-[162px] w-[calc(100%-6px)]">
              <Image priority fill src={MbtiGame} alt={"mbtiGame"} />
            </Button>
          </div>

          <div className={blankGameClassName}>
            <Button onClick={() => setSelected(1)} className="relative h-[162px] w-[calc(100%-6px)]">
              <Image priority fill src={BlankGame} alt={"blankGame"} />
            </Button>
          </div>
        </div>
        <Button
          disabled={!selected}
          onClick={() => {
            if (!selected) return

            onCompleteClick(selected)
          }}
          className="disabled:opacity-1 mt-auto w-full bg-primary-300 text-white disabled:bg-[#B7B7B7]"
        >
          선택완료
        </Button>
      </div>
    </div>
  )
}
