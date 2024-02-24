import { AppScreen } from "@stackflow/plugin-basic-ui"
import { ActivityComponentType } from "@stackflow/react"
import Image from "next/image"
import { useState } from "react"

import IceBox from "@/assets/svgs/ice-box.svg"
import AppBar from "@/components/app-bar"
import { cn } from "@/libs/tailwind/cn"
import useMyInfoStore from "@/store/my-info-store"

import { useFlow } from "../../stackflow"

const MbtiLoading: ActivityComponentType = () => {
  const [count, setCount] = useState(5)
  const [wiggle, setWiggle] = useState(false)

  const { replace } = useFlow()

  const { myInfo } = useMyInfoStore()

  return (
    <AppScreen>
      <div className="min-h-full bg-gray-950">
        <AppBar title="팀원 성향 파악" />
        <h2 className="h2 mb-[72px] mt-[30px] text-center text-gray-25">
          {myInfo?.nickName}님,
          <br />
          결과를 확인해주세요
        </h2>

        <div className="flex flex-col items-center gap-[42px]">
          <div className=" h-[180px] w-[180px] rounded-full bg-gradient-to-b from-[#2A61E7] to-[#FF7EFA]">
            <button
              onClick={() => {
                if (count === 0) return

                setCount(prev => prev - 1)
                setWiggle(true)
              }}
              onAnimationEnd={() => {
                if (count === 0) {
                  replace("MbtiResult", {})
                }

                setWiggle(false)
              }}
              className={cn(
                "flex h-full w-full animate-pulse items-center justify-center rounded-full hover:animate-none",
                count !== 0 && wiggle && "animate-wiggle hover:animate-wiggle",
                count === 0 && "animate-ping hover:animate-ping",
              )}
            >
              <Image src={IceBox} alt="얼음땡 상자" />
            </button>
          </div>

          <p className="t2-sb text-gray-400">얼음땡 상자를 클릭 해보세요!</p>
        </div>
      </div>
    </AppScreen>
  )
}

export default MbtiLoading
