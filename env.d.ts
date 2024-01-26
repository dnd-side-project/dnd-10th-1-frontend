export {}

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_API_MOCKING: string
      NEXT_PUBLIC_BACK_URL: string
      NEXT_PUBLIC_CLIENT_URL: string
      NEXT_PUBLIC_SERVER_URL: string
    }
  }
}
