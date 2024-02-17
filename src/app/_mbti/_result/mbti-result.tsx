import { AppScreen } from "@stackflow/plugin-basic-ui"
import { ActivityComponentType } from "@stackflow/react"
import { useState } from "react"

import { useFlow } from "../../stackflow"
import { TITLE_LIST } from "./constants"
import HeaderNavBar from "./header-nav-bar"

const MbtiResult: ActivityComponentType = () => {
  const { replace } = useFlow()

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

        {selectedTitle === "나의 결과" && <div className="text-gray-25">나는 나의 결과</div>}
        {selectedTitle === "팀조합" && <div className="text-gray-25">나는 팀조합</div>}
      </div>
    </AppScreen>
  )
}

export default MbtiResult
