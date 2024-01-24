import tempAPI from "@/services/temp/api"

export default async function TempServer() {
  const data = await tempAPI.getServerTemp()

  if (!data) return

  return <div className="temp-btn">{data.message}</div>
}
