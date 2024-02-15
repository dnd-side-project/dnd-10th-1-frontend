import { motion } from "framer-motion"
import { useState } from "react"

import { cn } from "@/libs/tailwind/cn"
export default function HeaderNavBar() {
  const TITLE = ["팀조합", "나의 결과"] as const
  const [selectState, setSelectState] = useState<"팀조합" | "나의 결과">("팀조합")

  return (
    <header className="bg-gray-950">
      <nav>
        <ul className="flex justify-center gap-[70px]">
          {TITLE.map((title, index) => (
            <li
              className={cn("px-5 py-12 text-white transition", { "text-primary-200": title === selectState })}
              onClick={() => setSelectState(title)}
              key={index}
            >
              {title}
              {title === selectState && <motion.div className="border-b-2 border-primary-200" layoutId="underLine" />}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
