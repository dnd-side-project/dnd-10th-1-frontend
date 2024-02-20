import { create } from "zustand"

type GameAdminStore = {
  isAdmin: boolean
  createGame: () => void
  endGame: () => void
}

const useAdminStore = create<GameAdminStore>(set => ({
  isAdmin: false,
  createGame: () => set(() => ({ isAdmin: true })),
  endGame: () => set(() => ({ isAdmin: false })),
}))

export default useAdminStore
