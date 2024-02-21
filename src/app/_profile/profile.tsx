import { AppScreen } from "@stackflow/plugin-basic-ui"
import { ActivityComponentType } from "@stackflow/react"
import { useState } from "react"

import FallbackProfile from "@/assets/svgs/profiles/fallback-profile.svg"

import { useFlow } from "../stackflow"
import ProfileScreen from "./profile-screen"

const Profile: ActivityComponentType = () => {
  const [profile, setProfile] = useState(FallbackProfile)
  const [nickname, setNickname] = useState("")

  const { replace } = useFlow()

  const onDrawerClick = (profileTheme: any) => {
    setProfile(profileTheme)
  }

  const onInputChange = (nickname: string) => {
    setNickname(nickname)
  }

  const finish = profile !== FallbackProfile && nickname !== ""

  const onSubmit = () => {
    replace("Main", {})
  }

  return (
    <AppScreen
      appBar={{
        title: "프로필 설정하기",
        renderRight: () => {
          return (
            <button disabled={!finish} onClick={onSubmit} className="pr-[27px] text-gray-100 disabled:text-gray-600">
              완료
            </button>
          )
        },
        height: "70px",
        backgroundColor: "#0C111D",
        textColor: "#98A2B3",
        borderColor: "#0C111D",
      }}
    >
      <ProfileScreen
        profile={profile}
        nickname={nickname}
        onDrawerClick={onDrawerClick}
        onInputChange={onInputChange}
      />
    </AppScreen>
  )
}

export default Profile
