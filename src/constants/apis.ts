export const BACK_URL =
  process.env.NEXT_PUBLIC_API_MOCKING === "enable"
    ? process.env.NEXT_PUBLIC_CLIENT_URL + "/apis"
    : process.env.NEXT_PUBLIC_BACK_URL

export const CLIENT_URL = process.env.NEXT_PUBLIC_CLIENT_URL

export const SERVER_URL = process.env.NEXT_PUBLIC_SERVER_URL

export const END_POINT = {
  temp: "/temp",
}
