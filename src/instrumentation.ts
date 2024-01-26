export async function register() {
  if (process.env.NEXT_RUNTIME === "nodejs") {
    const { serverWorker } = await import("./__mock__/handler/server/index")
    serverWorker.listen()
  }
}
