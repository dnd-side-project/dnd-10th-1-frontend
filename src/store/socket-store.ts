import { Socket } from "socket.io-client"
import { io } from "socket.io-client"
import { create } from "zustand"
const socket = io(process.env.NEXT_PUBLIC_SOCKET_URL)
type GameAdminStore = {
  socket: Socket
  connect: () => void
  disconnect: () => void
}

const useSocketStore = create<GameAdminStore>(() => ({
  socket: socket,
  connect: () => {
    socket.connect()
  },
  disconnect: () => {
    socket.close()
  },
}))

export default useSocketStore
