import { END_POINT } from "@/constants/apis"
import { clientInstance, serverInstance } from "@/libs/axios/instance"

type Temp = {
  message: string
}

const tempAPI = {
  getClientTemp: async () => {
    try {
      const res = await clientInstance.get<Temp>(END_POINT.temp)
      return res.data
    } catch (err) {
      if (err instanceof Error) {
        throw new Error(err.message)
      }
    }
  },

  getServerTemp: async () => {
    try {
      const res = await serverInstance.get<Temp>(END_POINT.temp)
      return res.data
    } catch (err) {
      if (err instanceof Error) {
        throw new Error(err.message)
      }
    }
  },
}

export default tempAPI
