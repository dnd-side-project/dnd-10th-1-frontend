import { motion } from "framer-motion"
import Image from "next/image"

import LodingIcon1 from "@/assets/svgs/profiles/profile-theme-1.svg"
import LodingIcon2 from "@/assets/svgs/profiles/profile-theme-2.svg"
import LodingIcon3 from "@/assets/svgs/profiles/profile-theme-3.svg"
import LodingIcon4 from "@/assets/svgs/profiles/profile-theme-4.svg"

import LoadingBar from "./components/loading-bar/loading-bar"

export function GameLoadingScreen() {
  return (
    <div className="relative flex min-h-full w-full justify-center bg-primary-300">
      <div className="max-w-[360px]">
        <header className="px-[61px] pt-[84px] text-white">
          <div className="h2  whitespace-pre-wrap text-center">{`방장이\n게임을 고르는 중이에요`}</div>
          <div className="t3 whitespace-pre-wrap text-center text-white">{`방장이 게임을 고르고 있는 중이에요.\n조금만 기다려주세요!`}</div>
        </header>
        <div className="mt-[148px] flex justify-center">
          <div className="flex gap-1">
            <motion.div
              animate={{ y: [10, -20, 10] }}
              transition={{ duration: 1, delay: 0, repeatDelay: 0, repeat: Infinity }}
            >
              <Image width={56} height={56} src={LodingIcon1} alt="아이콘1" />
            </motion.div>
            <motion.div
              animate={{ y: [-10, 20, -10] }}
              transition={{ duration: 1, delay: 0, repeatDelay: 0, repeat: Infinity }}
            >
              <Image width={56} height={56} src={LodingIcon2} alt="아이콘2" />
            </motion.div>
            <LoadingBar />
            <motion.div
              animate={{ y: [20, -10, 20] }}
              transition={{ duration: 1, delay: 0, repeatDelay: 0, repeat: Infinity }}
            >
              <Image width={56} height={56} src={LodingIcon3} alt="아이콘3" />
            </motion.div>
            <motion.div
              animate={{ y: [-30, 0, -30] }}
              transition={{ duration: 1, delay: 0, repeatDelay: 0, repeat: Infinity }}
            >
              <Image width={56} height={56} src={LodingIcon4} alt="아이콘4" />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}
