import { AppScreen } from "@stackflow/plugin-basic-ui"
import { ActivityComponentType } from "@stackflow/react"
import { useState } from "react"

import { TITLE_LIST } from "./constants"
import HeaderNavBar from "./header-nav-bar"
import MyResult from "./my-result"
import TeamResult from "./team-result"

const MbtiResult: ActivityComponentType = () => {
  const [selectedTitle, setSelectedTitle] = useState<(typeof TITLE_LIST)[number]>(TITLE_LIST[0])

  return (
    <AppScreen>
      <div className="min-h-full bg-gray-950">
        <HeaderNavBar
          selectedTitle={selectedTitle}
          onClick={title => {
            setSelectedTitle(title)
          }}
        />

        {selectedTitle === "팀결과" && <TeamResult />}
        {selectedTitle === "나의 결과" && <MyResult />}
      </div>
    </AppScreen>
  )
}

export default MbtiResult
