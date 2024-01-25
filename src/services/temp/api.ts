import axios from "axios"

import { BACK_URL, END_POINT } from "@/constants/apis"

type Temp = {
  message: string
}

const tempAPI = {
  getClientTemp: async () => {
    try {
      const res = await axios.get<Temp>(BACK_URL + END_POINT.temp)
      return res.data
    } catch (err) {
      if (err instanceof Error) {
        throw new Error(err.message)
      }
    }
  },
}

export default tempAPI
