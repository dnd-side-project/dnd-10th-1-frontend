import Image from "next/image"
import { useEffect, useRef, useState } from "react"

import { useFlow } from "@/app/stackflow"
import Heart from "@/assets/svgs/heart.svg"
import Planning from "@/assets/svgs/mbti-result/planning.svg"
import { Button } from "@/components/button"

import useLongPress from "./hooks/useLongPress"
import { downloadImageEvent } from "./libs"
import { getRandomData } from "./libs/my-result-data"

export default function MyResult() {
  const { push } = useFlow()

  const [mockMyResult, setMcokMyResult] = useState<{
    title: string
    partner1Image: any
    partner1Text: string
    partner2Image: any
    partner2Text: string
    descriptions: string[]
    suggestion: string
    TitleImage: any
  }>()

  const resultRef = useRef<HTMLButtonElement>(null)

  const longPressEvent = useLongPress(() => downloadImageEvent(resultRef), { isPreventDefault: true, delay: 300 })

  useEffect(() => {
    setMcokMyResult(getRandomData())
  }, [])

  if (!mockMyResult) {
    return null
  }

  const { title, descriptions, TitleImage, partner1Image, partner1Text, partner2Image, partner2Text, suggestion } =
    mockMyResult

  return (
    <div className="px-6 pb-6">
      <button ref={resultRef} {...longPressEvent} className=" w-full bg-gray-950 px-6 pb-[79px] pt-[46px]">
        <div className="flex flex-col items-center gap-[5px]">
          <p className="t2-sb text-gray-100">나의 협업 스타일은?</p>
          <h2 className="h2 text-pink-300">{title}</h2>
        </div>

        <div className="mb-[31px] flex">
          <div className="relative mx-auto">
            <div className="relative mx-auto h-[208px] w-[185px]">
              <Image
                src={TitleImage}
                alt="나의 결과 이미지"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center gap-[13px]">
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

          <div className="flex w-[273px] flex-col gap-[18px] rounded-xl bg-gray-25 pb-4 pt-[19px]">
            <div className="flex items-center gap-1.5 px-4">
              <Image src={Heart} alt="하트" />
              <div className="t2-sb text-gray-950">환상의 협업 메이트</div>
            </div>

            <div className="flex items-end gap-5 px-[30px]">
              <div className="flex flex-col items-center gap-4">
                <div className="relative h-[126px] w-[96px] ">
                  <Image src={partner1Image} fill alt={`${partner1Text}`} />
                </div>
                <span className="t3-bold tracking-[-0.5px] text-gray-800">{partner1Text}</span>
              </div>

              <div className="flex flex-col items-center gap-4">
                <div className="relative h-[56px] w-[56px]">
                  <Image src={partner2Image} fill alt={`${partner2Text}`} />
                </div>
                <span className="t3-bold tracking-[-0.5px] text-gray-800">{partner2Text}</span>
              </div>
            </div>
          </div>
        </div>
      </button>

      <p className="t1 mb-[25px] text-center text-gray-400">꾹 눌러 이미지를 저장해주세요.</p>
      <Button
        onClick={() => {
          push("MbtiAllResult", {})
        }}
        className="h4-bold h-full w-full bg-primary-300 py-[12.5px] text-gray-25"
      >
        팀원 전체 결과 보기
      </Button>
    </div>
  )
}
