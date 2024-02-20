import Image from "next/image"
import { useRef } from "react"

import IdeaBank from "@/assets/svgs/mbti-result/idea-bank.svg"
import Planning from "@/assets/svgs/mbti-result/planning.svg"
import { Button } from "@/components/button"

import useLongPress from "./hooks/useLongPress"
import { downloadImageEvent } from "./libs"

export default function TeamResult() {
  const resultRef = useRef<HTMLButtonElement>(null)

  const longPressEvent = useLongPress(() => downloadImageEvent(resultRef), { isPreventDefault: true, delay: 300 })

  return (
    <div className="pb-6">
      <button ref={resultRef} {...longPressEvent} className="w-full bg-gray-950 px-6 pb-[110px] pt-[46px]">
        <div className="flex flex-col items-center gap-[5px]">
          <p className="t2-sb text-gray-100">우리팀의 협업 스타일은?</p>
          <h2 className="h2 text-pink-300">{"아이디어뱅크"} 조합</h2>
        </div>
        <div className="flex flex-col items-center">
          <Image src={IdeaBank} alt="팀 결과 이미지" priority className="mb-[54px]" />
          <div className="flex flex-col gap-[13px]">
            <ul className="t3 flex w-[273px] list-disc flex-col gap-2 rounded-xl bg-gray-25 px-5 py-3 text-left tracking-[-0.5px] text-gray-950">
              <li>{"직장 내 분위기메이커일 확률이 높아요."}</li>
              <li>{"적극적이고 주도적으로 업무를 진행해요."}</li>
              <li>{"모든 동료와 좋은 관계를 유지하는 비타민같은 존재!"}</li>
            </ul>

            <div className="flex w-[273px] gap-[18px] rounded-xl bg-gray-25 px-[23px] py-3">
              <div className="flex items-center justify-center">
                <Image src={Planning} alt="팀 제안 이미지" />
              </div>
              <p className="t3 w-[145px] text-left text-gray-950">
                {"계획을 세우고 일의 우선순위를 정해보는 것은 어떨까요?"}
              </p>
            </div>
          </div>
        </div>
      </button>

      <button className="t1 mb-[25px] w-full text-center text-gray-400">꾹 눌러 이미지를 저장해주세요.</button>

      <Button className="h4-bold h-full w-full bg-primary-300 py-[12.5px] text-gray-25">테스트 결과 공유하기</Button>
    </div>
  )
}
