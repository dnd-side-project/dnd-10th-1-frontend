import { create } from "zustand"

type TempModalStore = {
  isOpen: boolean
  setOpen: () => void
  setClose: () => void
}

const useTempModalStore = create<TempModalStore>(set => ({
  isOpen: false,
  setOpen: () => set(_ => ({ isOpen: true })),
  setClose: () => set(_ => ({ isOpen: false })),
}))

export default useTempModalStore
