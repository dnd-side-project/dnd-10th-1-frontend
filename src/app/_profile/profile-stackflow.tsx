import { basicUIPlugin } from "@stackflow/plugin-basic-ui"
import { basicRendererPlugin } from "@stackflow/plugin-renderer-basic"
import { stackflow } from "@stackflow/react"

import Profile from "./profile"

export const { Stack: ProfileStack, useFlow } = stackflow({
  transitionDuration: 350,
  activities: {
    Profile,
  },
  plugins: [
    basicRendererPlugin(),
    basicUIPlugin({
      theme: "cupertino",
    }),
  ],
  initialActivity: () => "Profile",
})
