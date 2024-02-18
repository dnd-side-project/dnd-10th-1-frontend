import { AppScreen } from "@stackflow/plugin-basic-ui"
import { ActivityComponentType } from "@stackflow/react"
import Image from "next/image"

import { useFlow } from "@/app/stackflow"
import Home from "@/assets/svgs/home.svg"
import AppBar from "@/components/app-bar"
import { Avatar, AvatarFallback } from "@/components/avatar"
import { Button } from "@/components/button"

import { teamResults } from "./mocks"

const MbtiAllResult: ActivityComponentType = () => {
  const { pop, replace } = useFlow()

  return (
    <AppScreen>
      <div className="min-h-full bg-gray-950">
        <AppBar title="팀원 결과" isBackButton onBackClick={pop} />

        <div className="h-full px-6 pb-6 pt-[83px]">
          <div className="mb-[72px] rounded-[14px] bg-primary-300 px-[15.5px] py-[30px]">
            <h2 className="h2 mb-[38px] text-center text-gray-25">우리 팀원들의 결과</h2>

            <ul className="flex flex-col gap-3.5">
              {teamResults.map(({ avatar, id, nickname, workingName }) => (
                <li
                  key={id}
                  className="flex items-center gap-[18px] rounded-[15px] border-2 border-primary-200 bg-gray-25 px-[19px] py-[15px]"
                >
                  <Avatar className="border-[1px] border-gray-950">
                    <AvatarFallback>
                      <Image src={avatar} alt={`${nickname} 프로필 이미지`} />
                    </AvatarFallback>
                  </Avatar>

                  <span className="t1-bold min-w-fit">{nickname}</span>
                  <div className="t1-bold w-[132px] text-center">{workingName}</div>
                </li>
              ))}
            </ul>
          </div>

          <p className="t1 mb-[25px] text-center text-gray-400">꾹 눌러 이미지를 저장해주세요.</p>

          <div className="flex h-full gap-5">
            <Button
              onClick={() => {
                replace("Main", {})
              }}
              className="h4-bold h-[50px] bg-primary-300 py-[12.5px] text-gray-25"
            >
              <Image src={Home} alt="홈" />
            </Button>

            <Button
              onClick={() => {
                replace("Waiting", {})
              }}
              className="h4-bold h-full w-full bg-primary-300 py-[12.5px] text-gray-25"
            >
              대기실 가기
            </Button>
          </div>
        </div>
      </div>
    </AppScreen>
  )
}

export default MbtiAllResult
