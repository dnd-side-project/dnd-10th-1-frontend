import axios from "axios"

import { END_POINT } from "@/constants/apis"
import { mswInstance } from "@/libs/axios/instance"

type Temp = {
  message: string
}

const tempAPI = {
  getClientTemp: async () => {
    try {
      const res = await mswInstance.get<Temp>(END_POINT.temp)
      return res.data
    } catch (err) {
      if (err instanceof Error) {
        throw new Error(err.message)
      }
    }
  },

  getServerTemp: async () => {
    try {
      // const res = await mswInstance.get<Temp>(END_POINT.temp)
      const res = await axios("https://jsonplaceholder.typicode.com/todos/1")
      return res.data
    } catch (err) {
      if (err instanceof Error) {
        throw new Error(err.message)
      }
    }
  },
}

export default tempAPI
