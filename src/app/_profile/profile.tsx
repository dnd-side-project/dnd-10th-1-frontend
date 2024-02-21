import { AppScreen } from "@stackflow/plugin-basic-ui"
import { ActivityComponentType } from "@stackflow/react"
import { useState } from "react"

import FallbackProfile from "@/assets/svgs/profiles/fallback-profile.svg"
import useMyInfoStore from "@/store/my-info-store"

import { useFlow } from "../stackflow"
import { postProfile } from "./api/post-profile"
import ProfileScreen from "./profile-screen"

const Profile: ActivityComponentType = () => {
  const [nickName, setNickName] = useState("")
  const [profileImage, setProfileImage] = useState(FallbackProfile)
  const setMyInfo = useMyInfoStore(state => state.setMyInfo)

  const { replace } = useFlow()

  const onDrawerClick = (newProfile: string) => {
    setProfileImage(newProfile)
  }

  const onInputChange = (newName: string) => {
    setNickName(newName)
  }

  const finish = profileImage !== FallbackProfile && nickName !== ""

  const onSubmit = async () => {
    try {
      const res = await postProfile({ nickName, profileImage: profileImage.src })

      if (!res) throw new Error("사용자 정보 생성에 실패하였습니다.")

      setMyInfo(res)

      replace("Main", {})
    } catch (err) {
      if (err instanceof Error) {
        console.error(err.message)
      }
    }
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
        nickName={nickName}
        profile={profileImage}
        onDrawerClick={onDrawerClick}
        onInputChange={onInputChange}
      />
    </AppScreen>
  )
}

export default Profile
