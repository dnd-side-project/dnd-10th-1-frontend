"use client"

/**
 * @description
 * https://bubbleui.blakesanie.com/
 */

import "react-bubble-ui/dist/index.css"

import { useState } from "react"
import BubbleUI from "react-bubble-ui"

import { MBTI_COMBINATIONS } from "@/constants/mbti"
import { cn } from "@/libs/tailwind/cn"

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
      {MBTI_COMBINATIONS.map((data, i) => {
        return (
          <button
            key={i}
            className={cn("flex h-[180px] w-[180px] items-center justify-center rounded-full", {
              "bg-gradient-to-b from-[#2A61E7] to-[#FF7EFA]": select === data,
            })}
          >
            <div onClick={() => onClick(data)} className="relative h-[calc(100%-6px)] w-[calc(100%-6px)]">
              <div
                className={cn(
                  `h2 flex h-full w-full items-center justify-center rounded-full bg-gray-400 text-xl font-semibold text-gray-800`,
                  select === data && "bg-pink-300 text-pink-25",
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
