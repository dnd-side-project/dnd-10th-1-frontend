import { basicUIPlugin } from "@stackflow/plugin-basic-ui"
import { basicRendererPlugin } from "@stackflow/plugin-renderer-basic"
import { stackflow } from "@stackflow/react"

import Main from "./_main/main"
import OnboardingFirst from "./_onboarding/first/first"
import OnboardingSecond from "./_onboarding/second/second"
import OnboardingThird from "./_onboarding/third/third"
import Profile from "./_profile/profile"
import Splash from "./_splash/splash"

export const { Stack, useFlow } = stackflow({
  transitionDuration: 350,
  activities: {
    Splash,
    OnboardingFirst,
    OnboardingSecond,
    OnboardingThird,
    Profile,
    Main,
  },
  plugins: [
    basicRendererPlugin(),
    basicUIPlugin({
      theme: "cupertino",
    }),
  ],
  initialActivity: () => "Splash",
})
