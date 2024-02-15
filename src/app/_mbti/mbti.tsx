import { AppScreen } from "@stackflow/plugin-basic-ui"
import { ActivityComponentType } from "@stackflow/react"
import { useState } from "react"

import AppBar from "@/components/app-bar"
import { Button } from "@/components/button"

import { useFlow } from "../stackflow"
import Bubble from "./bubble"

const Mbti: ActivityComponentType = () => {
  const [temp, setTemp] = useState(false)

  const { replace } = useFlow()

  return (
    <AppScreen>
      <div className="min-h-full bg-gray-950">
        <AppBar title="팀원 성향 파악" />
        <h2 className="h2 text-center text-gray-100">MBTI를 선택해주세요!</h2>
        <Bubble
          handleClick={mbti => {
            console.log(mbti)
            setTemp(true)
          }}
        />
        <div className="sticky bottom-[24px] px-[24px]">
          {/* @todo 추후 공통 버튼 컴포넌트로 작업할 예정입니다.*/}
          <Button
            disabled={!temp}
            onClick={() => {
              if (!temp) return

              console.log(temp)
            }}
            className="disabled:opacity-1 mt-auto w-full bg-primary-300 text-white disabled:bg-[#B7B7B7]"
          >
            선택완료
          </Button>
        </div>
      </div>
    </AppScreen>
  )
}

export default Mbti
