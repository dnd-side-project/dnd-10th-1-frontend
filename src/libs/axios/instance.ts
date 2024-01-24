import axios from "axios"

import { BACK_URL, CLIENT_URL } from "@/constants/apis"

export const clientInstance = axios.create({
  baseURL: BACK_URL,
})

export const serverInstance = axios.create({
  baseURL: CLIENT_URL,
})
