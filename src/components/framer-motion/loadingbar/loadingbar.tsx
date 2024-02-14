import { motion } from "framer-motion"

export default function HideButton() {
  return (
    <div className="h-[74px] w-[74px] rounded-full border-[6px] border-white">
      <ul className="flex h-full items-center justify-center gap-1">
        <motion.li
          className="h-[8px] w-[8px] rounded-full bg-white"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 0.5, delay: 0, repeatDelay: 1.5, repeat: Infinity }}
        ></motion.li>
        <motion.li
          className="h-[8px] w-[8px] rounded-full bg-white"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 0.5, delay: 0.5, repeatDelay: 1.5, repeat: Infinity }}
        ></motion.li>
        <motion.li
          className="h-[8px] w-[8px] rounded-full bg-white"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 0.5, delay: 1, repeatDelay: 1.5, repeat: Infinity }}
        ></motion.li>
        <motion.li
          className="h-[8px] w-[8px] rounded-full bg-white"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 0.5, delay: 1.5, repeatDelay: 1.5, repeat: Infinity }}
        ></motion.li>
      </ul>
    </div>
  )
}
