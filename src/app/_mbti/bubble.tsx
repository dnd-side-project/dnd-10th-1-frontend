"use client"

/**
 * @description
 * https://bubbleui.blakesanie.com/
 */

import "react-bubble-ui/dist/index.css"

import { useState } from "react"
import BubbleUI from "react-bubble-ui"

import { cn } from "@/libs/tailwind/cn"

import { mbtiCombinations } from "./mbti-data"

type Props = {
  handleClick: (value: string) => void
}

export default function Bubble({ handleClick }: Props) {
  const [select, setSelect] = useState<string>()

  const options = {
    size: 180,
    minSize: 40,
    gutter: 8,
    provideProps: false,
    numCols: 5,
    fringeWidth: 160,
    yRadius: 130,
    xRadius: 220,
    cornerRadius: 50,
    showGuides: false,
    compact: true,
    gravitation: 10,
  }

  const onClick = (value: string) => {
    handleClick(value)
    setSelect(value)
  }

  return (
    <BubbleUI options={options} className="my-10 h-[500px] w-full rounded-[50px]">
      {mbtiCombinations.map((data, i) => {
        return (
          <button
            key={i}
            className="foucs:to-[#FF7EFA] flex h-[180px] w-[180px] items-center justify-center rounded-full focus:bg-gradient-to-b focus:from-[#2A61E7] focus:to-[#FF7EFA]"
          >
            <div onClick={() => onClick(data)} className="relative h-[calc(100%-6px)] w-[calc(100%-6px)]">
              <div
                className={cn(
                  `h2 flex h-full w-full items-center justify-center rounded-full bg-gray-400 text-xl font-semibold text-gray-800`,
                  select === data && "bg-pink-300",
                )}
              >
                {data}
              </div>
            </div>
          </button>
        )
      })}
    </BubbleUI>
  )
}
