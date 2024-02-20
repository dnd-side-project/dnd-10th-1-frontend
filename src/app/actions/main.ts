"use server"

import { axiosInstance } from "@/libs/axios/instance"

export async function checkingInviteCode(code: string) {
  const { data } = await axiosInstance.post("/main/check-code", { code })

  if (data.status === 401) throw new Error("bad request")
}
