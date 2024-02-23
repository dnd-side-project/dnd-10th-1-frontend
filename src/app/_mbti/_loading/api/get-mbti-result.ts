import { END_POINT } from "@/constants/apis"
import { axiosInstance } from "@/libs/axios/instance"

type Props = {
  roomId: string
  userId: number
}

export const getMbtiResult = async ({ userId, roomId }: Props) => {
  try {
    const url = END_POINT.MBTI_RESULT + `?userId=${userId}&roomId=${roomId}`
    const {
      data: { data },
    } = await axiosInstance.get(url)
    return data
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message)
    }
  }
}
