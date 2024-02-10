import { AppScreen } from "@stackflow/plugin-basic-ui"
import { ActivityComponentType } from "@stackflow/react"

const Profile: ActivityComponentType = () => {
  return (
    <AppScreen>
      <div className="min-h-screen bg-gray-950 px-6 pt-20">
        <h1 className="text-white">프로필 페이지</h1>
      </div>
    </AppScreen>
  )
}

export default Profile
