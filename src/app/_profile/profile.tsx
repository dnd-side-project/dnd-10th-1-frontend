import { AppScreen } from "@stackflow/plugin-basic-ui"
import { ActivityComponentType } from "@stackflow/react"

const Profile: ActivityComponentType = () => {
  return (
    <AppScreen
      appBar={{
        title: "프로필 설정하기",
        renderRight: () => {
          return <div className="pr-[27px] text-gray-100">완료</div>
        },
        height: "70px",
        backgroundColor: "#0C111D",
        textColor: "#98A2B3",
        borderColor: "#0C111D",
      }}
    >
      <div className="min-h-full bg-gray-950 px-6">
        <h1 className="text-white">프로필 페이지</h1>
      </div>
    </AppScreen>
  )
}

export default Profile
