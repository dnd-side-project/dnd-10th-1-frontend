"use client"

import { useGetUsers } from "@/services/temp/hook"

export default function TempUsers() {
  const { data: users } = useGetUsers()
  return <div>{JSON.stringify(users)}</div>
}
