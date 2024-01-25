"use client"

import { useGetUsers } from "@/services/temp/hook"

export default function TempClient() {
  const { data: users } = useGetUsers()

  return <div className="temp-btn">{JSON.stringify(users?.message)}</div>
}
