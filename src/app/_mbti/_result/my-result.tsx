import Image from "next/image"
import { useRef } from "react"

import { useFlow } from "@/app/stackflow"
import Mate1 from "@/assets/images/mbti-result/mate-1.png"
import Mate2 from "@/assets/images/mbti-result/mate-2.png"
import WorkingStyle from "@/assets/images/mbti-result/working-style.png"
import Heart from "@/assets/svgs/heart.svg"
import Planning from "@/assets/svgs/mbti-result/planning.svg"
import { Button } from "@/components/button"

import useLongPress from "./hooks/useLongPress"
import { downloadImageEvent } from "./libs"

export default function MyResult() {
  const { push } = useFlow()

  const resultRef = useRef<HTMLButtonElement>(null)

  const longPressEvent = useLongPress(() => downloadImageEvent(resultRef), { isPreventDefault: true, delay: 300 })

  return (
    <div className="px-6 pb-6">
      <button ref={resultRef} {...longPressEvent} className=" w-full bg-gray-950 px-6 pb-[79px] pt-[46px]">
        <div className="flex flex-col items-center gap-[5px]">
          <p className="t2-sb text-gray-100">나의 협업 스타일은?</p>
          <h2 className="h2 text-pink-300">{"핵인싸 워킹 메이트"}</h2>
        </div>

        <div className="mb-[31px] flex">
          <div className="relative mx-auto">
            <div className="relative mx-auto h-[208px] w-[185px]">
              <Image
                src={WorkingStyle}
                alt="나의 결과 이미지"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>

            <div className="absolute -right-3 top-16 rounded-[30px] bg-mint-200 px-2.5 py-1 text-[12px] font-semibold text-gray-800">
              #{"에너지"}
            </div>
            <div className="absolute -left-[44px] top-24 rounded-[30px] bg-mint-200 px-2.5 py-1 text-[12px] font-semibold text-gray-800">
              #{"커뮤니티케이션"}
            </div>
            <div className="absolute -right-3 bottom-6 rounded-[30px] bg-mint-200 px-2.5 py-1 text-[12px] font-semibold text-gray-800">
              #{"분위기메이커"}
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center gap-[13px]">
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

          <div className="flex w-[273px] flex-col gap-[18px] rounded-xl bg-gray-25 pb-4 pt-[19px]">
            <div className="flex items-center gap-1.5 px-4">
              <Image src={Heart} alt="하트" />
              <div className="t2-sb text-gray-950">환상의 협업 메이트</div>
            </div>

            <div className="flex items-end gap-5 px-[30px]">
              <div className="flex flex-col items-center gap-4">
                <div className="relative h-[126px] w-[96px] ">
                  <Image src={Mate1} fill alt="협업 메이트 이미지 1" />
                </div>
                <span className="t3-bold tracking-[-0.5px] text-gray-800">{"레전드 자기객관러"}</span>
              </div>

              <div className="flex flex-col items-center gap-4">
                <div className="relative h-[56px] w-[56px]">
                  <Image src={Mate2} fill alt="협업 메이트 이미지 2" />
                </div>
                <span className="t3-bold tracking-[-0.5px] text-gray-800">{"프로 마인드컨트롤러"}</span>
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
