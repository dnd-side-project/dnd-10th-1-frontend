import { motion } from "framer-motion"

import { cn } from "@/libs/tailwind/cn"

import { TITLE_LIST } from "../constants"

type Props = {
  selectedTitle: (typeof TITLE_LIST)[number]
  onClick: (title: (typeof TITLE_LIST)[number]) => void
}

export default function HeaderNavBar({ selectedTitle, onClick }: Props) {
  return (
    <header className="h-[66px] bg-gray-950">
      <nav className="h-full">
        <ul className="flex h-full items-center justify-center gap-[70px]">
          {TITLE_LIST.map((title, index) => (
            <li
              className={cn(" text-white transition hover:cursor-pointer", {
                "text-primary-200": title === selectedTitle,
              })}
              onClick={() => onClick(title)}
              key={index}
            >
              {title}
              {title === selectedTitle && <motion.div className="border-b-2 border-primary-200" layoutId="underLine" />}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
