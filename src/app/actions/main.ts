"use server"

import { END_POINT } from "@/constants/apis"
import { axiosInstance } from "@/libs/axios/instance"

export async function checkingInviteCode(code: string) {
  const { data } = await axiosInstance.post(END_POINT.MAIN.INVITE_CODE, { code })

  if (data.status === 401) throw new Error("bad request")
}
