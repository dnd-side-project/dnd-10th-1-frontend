import axios from "axios"

import { BACK_URL, CLIENT_URL } from "@/constants/apis"

export const mswInstance = axios.create({
  baseURL: CLIENT_URL,
})

export const apiInstance = axios.create({
  baseURL: BACK_URL,
})
