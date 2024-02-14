import Chip from "@/components/chip"
import { DrawerTrigger } from "@/components/drawer"
import { GAME } from "@/constants/main"

import MainButton from "./main-button"

export default function MainFooter() {
  return (
    <footer className="flex flex-col gap-6 px-6">
      <MainButton control="create">
        <div className="left t3 mt-[10px] flex text-left text-pink-100">
          방을 만들고
          <br />
          팀원들과 게임을 시작하세요
        </div>
        <div className="mt-10 flex gap-[10px]">
          {GAME.map(item => (
            <Chip key={item}>{item}</Chip>
          ))}
        </div>
      </MainButton>
      <DrawerTrigger asChild>
        <MainButton control="invite" />
      </DrawerTrigger>
    </footer>
  )
}
