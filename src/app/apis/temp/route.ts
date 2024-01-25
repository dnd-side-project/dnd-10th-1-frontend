import { NextResponse } from "next/server"

import { tempMock } from "@/seeds/temp-mock"

export async function GET() {
  return NextResponse.json(tempMock)
}
