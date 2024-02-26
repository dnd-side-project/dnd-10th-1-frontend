import { create } from "zustand"

type BlankGuideStore = {
  isFirst: boolean
  setNotFirst: () => void
}

const useBlankGuideStore = create<BlankGuideStore>(set => ({
  isFirst: true,
  setNotFirst: () =>
    set({
      isFirst: false,
    }),
}))

export default useBlankGuideStore
