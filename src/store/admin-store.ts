import { create } from "zustand"

type GameAdminStore = {
  isAdmin: boolean
  setAdmin: () => void
  resetAdmin: () => void
}

const useAdminStore = create<GameAdminStore>(set => ({
  isAdmin: false,
  setAdmin: () => set(() => ({ isAdmin: true })),
  resetAdmin: () => set(() => ({ isAdmin: false })),
}))

export default useAdminStore
