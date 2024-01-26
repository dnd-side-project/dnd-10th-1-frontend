"use client"

import { useGetUsers } from "@/services/temp/hook"

export default function TempClient() {
  const { data: user } = useGetUsers()
  console.log(process.env.NEXT_PUBLIC_API_MOCKING)
  return <div className="temp-btn">{JSON.stringify(user?.message)}</div>
}
