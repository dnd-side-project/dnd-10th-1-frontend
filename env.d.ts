declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_API_MOCKING: string
      NEXT_PUBLIC_BACK_API: string
      NEXT_PUBLIC_CLIENT_API: string
    }
  }
}
