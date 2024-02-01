"use client"

import { useGetUsers } from "@/services/temp/hook"

export default function TempClient() {
  const { data: user } = useGetUsers()
  return <div className="temp-btn">{JSON.stringify(user?.message)}</div>
}
