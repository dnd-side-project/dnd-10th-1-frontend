import axiosInstance from "@/libs/axios/axiosInstance"

type User = {
  userId: number
  id: number
  title: string
  body: string
}

type Temp = {
  message: string
}

const tempAPI = {
  getUsers: async (): Promise<User> => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users/5")
    const data = await res.json()

    return data
  },

  getTemp: async (): Promise<Temp> => {
    const res = await axiosInstance.get("/test")

    return res.data
  },
}

export default tempAPI
