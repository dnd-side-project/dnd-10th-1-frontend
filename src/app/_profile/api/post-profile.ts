import { END_POINT } from "@/constants/apis"
import { axiosInstance } from "@/libs/axios/instance"
import { UserInfoType } from "@/types/user"

export type PostProfileResponse = {
  id: number
  displayName: string
  profileImage: string
}

export const postProfile = async (BodyData: UserInfoType, roomId: string | null) => {
  try {
    const url = END_POINT.user + (roomId ? `?rooId=${roomId}` : "")
    const res = await axiosInstance.post<PostProfileResponse>(url, { ...BodyData })
    return res.data
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message)
    }
  }
}
