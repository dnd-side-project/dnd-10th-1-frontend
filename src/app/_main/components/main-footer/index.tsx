import Chip from "@/components/chip"
import { DrawerTrigger } from "@/components/drawer"
import { GameType } from "@/constants/main"

import MainButton from "./main-button"

type Props = {
  game: GameType
}

export default function MainFooter({ game }: Props) {
  return (
    <footer className="flex flex-col gap-6 px-6">
      <MainButton control="create">
        <div className="left t3 mt-[10px] flex text-left text-pink-100">
          방을 만들고
          <br />
          팀원들과 게임을 시작하세요
        </div>
        <div className="mt-10 flex gap-[10px]">
          {game.map(item => (
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
