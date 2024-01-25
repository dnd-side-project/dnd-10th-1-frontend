import tempAPI from "@/services/temp/api"

export default async function TempServer() {
  const data = await tempAPI.getServerTemp()

  return <div className="temp-btn">{JSON.stringify(data)}</div>
}
