import AppBar from "@/components/app-bar"

export default function SmallTalkGameHeader() {
  return (
    <div>
      <AppBar title="빈칸 주제 게임" />
      <div className="t2-sb text-center text-gray-100">빈칸에 자신이 생각하는 단어를 적으세요!</div>
    </div>
  )
}
