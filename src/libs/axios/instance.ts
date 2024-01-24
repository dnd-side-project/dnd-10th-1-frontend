import axios from "axios"

import { BACK_URL, SERVER_URL } from "@/constants/apis"

export const clientInstance = axios.create({
  baseURL: BACK_URL,
})

export const serverInstance = axios.create({
  baseURL: SERVER_URL,
})
