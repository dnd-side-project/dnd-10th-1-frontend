import AppBar from "@/components/app-bar"

type Props = {
  isStart: boolean
}

export default function SmallTalkGameHeader({ isStart }: Props) {
  return (
    <div>
      <AppBar title="빈칸 주제 게임" />
      <div className="t2-sb text-center text-gray-100">
        {isStart ? "빈칸에 자신이 생각하는 단어를 적으세요!" : "답변을 통해 팀원들과 얘기해보세요!"}
      </div>
    </div>
  )
}
