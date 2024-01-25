import axios from "axios"

import { BACK_URL } from "@/constants/apis"

export const axiosInstance = axios.create({
  baseURL: BACK_URL,
})
