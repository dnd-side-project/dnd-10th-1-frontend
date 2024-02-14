import type { Meta, StoryObj } from "@storybook/react"

import FallbackProfile from "@/assets/svgs/profiles/fallback-profile.svg"

import ProfileScreen from "./profile-screen"

const meta: Meta<typeof ProfileScreen> = {
  title: "Profile/ProfileScreen",
  component: ProfileScreen,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof ProfileScreen>

export const Primary: Story = {
  render: args => (
    <div className="absolute bottom-0 left-0 right-0 top-0">
      <ProfileScreen {...args} profile={FallbackProfile} />
    </div>
  ),
}
