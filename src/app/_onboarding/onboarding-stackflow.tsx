import { basicUIPlugin } from "@stackflow/plugin-basic-ui"
import { basicRendererPlugin } from "@stackflow/plugin-renderer-basic"
import { stackflow } from "@stackflow/react"

import First from "./first/first"
import Second from "./second/second"
import Third from "./third/third"

export const { Stack: OnboardingStack, useFlow } = stackflow({
  transitionDuration: 350,
  activities: {
    First,
    Second,
    Third,
  },
  plugins: [
    basicRendererPlugin(),
    basicUIPlugin({
      theme: "cupertino",
    }),
  ],
  initialActivity: () => "First",
})
