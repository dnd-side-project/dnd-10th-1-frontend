import { create } from "zustand"

type State = {
  loading: boolean
  isFirstVisit: boolean
  isProfile: boolean
  flow: "SPLASH" | "ONBOARDING" | "PROFILE"
  changeOnboarding: () => void
  changeProfile: () => void
}

export const useFlowMachine = create<State>(set => ({
  loading: true,
  isFirstVisit: true,
  isProfile: false,
  flow: "SPLASH",
  changeOnboarding: () => set(() => ({ flow: "ONBOARDING", isFirstVisit: true, isProfile: false, loading: false })),
  changeProfile: () => set(() => ({ flow: "PROFILE", isFirstVisit: false, isProfile: true, loading: false })),
}))
