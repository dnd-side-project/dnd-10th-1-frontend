import { basicUIPlugin } from "@stackflow/plugin-basic-ui"
import { basicRendererPlugin } from "@stackflow/plugin-renderer-basic"
import { stackflow } from "@stackflow/react"

import GameLoading from "./_game-loading/game-loding"
import Main from "./_main/main"
import MbtiGame from "./_mbti/_game/mbti-game"
import MbtiLoading from "./_mbti/_loading/mbti-loading"
import MbtiAllResult from "./_mbti/_result/mbti-all-result"
import MbtiResult from "./_mbti/_result/mbti-result"
import OnboardingFirst from "./_onboarding/first/first"
import OnboardingSecond from "./_onboarding/second/second"
import OnboardingThird from "./_onboarding/third/third"
import Profile from "./_profile/profile"
import SelectGames from "./_select-games/select-games"
import SmallTalkInput from "./_small-talk/game-input"
import SmallTalkResult from "./_small-talk/game-result"
import SmallTalkGameResultList from "./_small-talk/game-result-list"
import Splash from "./_splash/splash"
import Waiting from "./_waiting/waiting"

export const { Stack, useFlow } = stackflow({
  transitionDuration: 350,
  activities: {
    Splash,
    OnboardingFirst,
    OnboardingSecond,
    OnboardingThird,
    Profile,
    Main,
    SelectGames,
    MbtiGame,
    MbtiLoading,
    MbtiResult,
    MbtiAllResult,
    Waiting,
    GameLoading,
    SmallTalkInput,
    SmallTalkGameResultList,
    SmallTalkResult,
  },
  plugins: [
    basicRendererPlugin(),
    basicUIPlugin({
      theme: "cupertino",
    }),
  ],
  initialActivity: () => "Splash",
})
