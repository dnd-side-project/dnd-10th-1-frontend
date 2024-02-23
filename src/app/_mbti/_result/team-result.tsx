import Image from "next/image"
import { useEffect, useRef, useState } from "react"

import Planning from "@/assets/svgs/mbti-result/planning.svg"
import { Button } from "@/components/button"

import useLongPress from "./hooks/useLongPress"
import { downloadImageEvent } from "./libs"
import { getRandomData } from "./libs/team-result-data"

export default function TeamResult() {
  const resultRef = useRef<HTMLButtonElement>(null)
  const [mockTeamResult, setMcokTeamResult] = useState<{
    title: string
    descriptions: string[]
    suggestion: string
    TitleImage: any
  }>()

  const longPressEvent = useLongPress(() => downloadImageEvent(resultRef), { isPreventDefault: true, delay: 300 })

  useEffect(() => {
    setMcokTeamResult(getRandomData())
  }, [])

  if (!mockTeamResult) {
    return null
  }

  const { title, descriptions, TitleImage, suggestion } = mockTeamResult

  return (
    <div className="pb-6">
      <button ref={resultRef} {...longPressEvent} className="w-full bg-gray-950 px-6 pb-[110px] pt-[46px]">
        <div className="flex flex-col items-center gap-[5px]">
          <p className="t2-sb text-gray-100">우리팀의 협업 스타일은?</p>
          <h2 className="h2 text-pink-300">{title} 조합</h2>
        </div>
        <div className="flex flex-col items-center">
          <Image src={TitleImage} alt="팀 결과 이미지" priority className="mb-[54px]" />
          <div className="flex flex-col gap-[13px]">
            <ul className="t3 flex w-[273px] list-disc flex-col gap-2 rounded-xl bg-gray-25 px-5 py-3 text-left tracking-[-0.5px] text-gray-950">
              {descriptions.map(description => (
                <li key={description}>{description}</li>
              ))}
            </ul>

            <div className="flex w-[273px] gap-[18px] rounded-xl bg-gray-25 px-[23px] py-3">
              <div className="flex items-center justify-center">
                <Image src={Planning} alt="팀 제안 이미지" />
              </div>
              <p className="t3 w-[145px] text-left text-gray-950">{suggestion}</p>
            </div>
          </div>
        </div>
      </button>

      <button className="t1 mb-[25px] w-full text-center text-gray-400">꾹 눌러 이미지를 저장해주세요.</button>

      <Button className="h4-bold h-full w-full bg-primary-300 py-[12.5px] text-gray-25">테스트 결과 공유하기</Button>
    </div>
  )
}
