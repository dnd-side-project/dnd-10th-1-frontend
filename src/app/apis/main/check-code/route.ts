import { NextResponse } from "next/server"

export async function POST(req: Request) {
  const { code } = await req.json()

  if (code === "400") return NextResponse.json({ status: 401, message: "bad request" })

  return NextResponse.json({ message: "success" })
}
