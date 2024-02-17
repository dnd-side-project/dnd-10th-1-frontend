import { motion, Variants } from "framer-motion"
import { ChevronDown, ChevronUp } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

import mainLineArt from "@/assets/images/main-line-art.png"
import Chip from "@/components/chip"
import { DrawerTrigger } from "@/components/drawer"
import { GAME, RANDOM_GAME_TITLE } from "@/constants/main"

import MainButton from "../main-button/main-button"
import useSlotMachine from "../slot-machine/slot-machine"

export default function MainFooter() {
  const [isOpen, setIsOpen] = useState(false)

  const variants: Variants = {
    initial: {
      height: "20px",
    },
    animate: ({ isOpen }) => {
      return { height: isOpen ? "194px" : "20px" }
    },
  }

  const { SlotMachine, randomStart } = useSlotMachine({ textList: RANDOM_GAME_TITLE, duration: 4 })

  const openHandler = () => {
    setIsOpen(true)
    randomStart()
  }

  return (
    <footer>
      <motion.div
        variants={variants}
        initial="initial"
        animate="animate"
        custom={{ isOpen }}
        className="relative my-2 flex justify-center"
      >
        <div className="absolute top-[-28px] h-full w-full rounded-b-[20px] bg-primary-300">
          <div className="absolute bottom-0 mb-[120px] h-[240px] w-full bg-gradient-to-b from-gray-25 to-gray-25/0 drop-shadow " />
          <Image className="absolute bottom-0" src={mainLineArt} alt={"mainLineArt"} />
          <div className="h4-bold absolute bottom-0 mb-[74px] w-full text-center text-white">
            <SlotMachine />
          </div>
        </div>
        <motion.div
          className="absolute bottom-0 flex w-full justify-center"
          animate={{ y: [0, 5, 0, -5, 0] }}
          transition={{ duration: 0.7, delay: 0, repeatDelay: 0, repeat: Infinity }}
        >
          {isOpen ? (
            <ChevronUp onClick={() => setIsOpen(false)} stroke="#4747F4" />
          ) : (
            <ChevronDown onClick={openHandler} stroke="#4747F4" />
          )}
        </motion.div>
      </motion.div>
      <div className="flex flex-col gap-6 px-6">
        <MainButton control="create">
          <div className="left t2 mt-[10px] flex text-left text-pink-100">
            방을 만들고
            <br />
            팀원들과 게임을 시작하세요
          </div>
          <div className="mt-10 flex gap-[10px]">
            {GAME.map(item => (
              <Chip key={item}>{item}</Chip>
            ))}
          </div>
        </MainButton>
        <DrawerTrigger asChild>
          <MainButton control="invite" />
        </DrawerTrigger>
      </div>
    </footer>
  )
}
